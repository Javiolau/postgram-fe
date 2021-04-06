function CheckContext(auth){

    return !(!auth.userInfo  || !auth.userId || !auth.userInfo.firstName || !auth.userInfo.lastName);


}

export default CheckContext;