import React, { useContext } from "react";
import { AuthContext } from "../../context/useAuthContext";
import {
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
} from "mdbreact";

const SectionHomeProfile = () => {
	const auth = useContext(AuthContext);

	return (
		<MDBCard className='postBG'>
			<MDBCardImage 
				className='img-fluid'
				style={{ width: "5rem", height: "5rem", borderRadius: "20rem" }}
				src={auth.userInfo.imageUrl}
				waves
			/>
			<MDBCardBody>
				<MDBCardTitle>
					{`${auth.userInfo.firstName}, ${auth.userInfo.lastName}`}
				</MDBCardTitle>
				<MDBCardText>Text</MDBCardText>
			</MDBCardBody>
		</MDBCard>
	);
};

export default SectionHomeProfile;
