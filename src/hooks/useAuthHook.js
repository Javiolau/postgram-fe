import { useCallback, useEffect, useState } from "react";

let logoutTimer;
export const useAuthHook = () => {
	const [token, setToken] = useState(false);
	const [userId, setUserId] = useState(false);
	const [tokenExpirationDate, setTokenExpirationDate] = useState();

	const login = useCallback(
		(uid, token, expirationDate) => {
			setToken(token);
			setUserId(uid);

			const tokenExpirationDate =
				expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
			setTokenExpirationDate(tokenExpirationDate);

			localStorage.setItem(
				"userData",
				JSON.stringify({
					userId: userId,
					token: token,
					expiration: tokenExpirationDate.toISOString(),
				})
			);
		},
		[userId]
		// add userId porque estaba dando error en ci server
	);

	//TO Logout
	const logout = useCallback(() => {
		setToken(null);
		setTokenExpirationDate(null);
		setUserId(null);
		localStorage.removeItem("userData");
	}, []);

	//Timeout of Token to Re-login
	useEffect(() => {
		if (token && tokenExpirationDate) {
			const remainingTime =
				tokenExpirationDate.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logout, tokenExpirationDate]);

	//Saving Token  To Local Storage
	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (
			storedData &&
			storedData.token &&
			new Date(storedData.expiration) > new Date()
		) {
			login(
				storedData.userId,
				storedData.token,
				new Date(storedData.expiration)
			);
		}
	}, [login]);

	return { token, login, logout, userId };
};
