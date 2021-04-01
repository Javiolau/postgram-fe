import React, {useContext} from "react";
import {MDBCardImage, MDBCard, MDBCardTitle, MDBCardText,MDBIcon, MDBCol, MDBRow, MDBBtn} from 'mdbreact';
import { AuthContext } from "../../context/useAuthContext";
 //TODO: This information goes in the profile
  /*  Obiamente no va asi mismo exactamente, pero los datos a uysar son esos
      email: "reaxster@email.com"
      firstName: "Richard"
      handle: "reaxster2"
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/postgram-16bf2.appspot.com/o/no-img.png?alt=media"
      lastName: "Richard"
      */

const UserProfile = (props) => {
  const auth = useContext(AuthContext);
  
  
 
  return (
    <div className='profileCard d-flex justify-content-start '>
      <MDBCardImage 
            hover
            
            className=' imageSize'
            src={auth.userInfo.imageUrl}
            alt='man'
          />
          
          <div className='doingMargin d-flex flex-column   '>
          <MDBIcon icon="user"  size="lg" className="red-text pr-3"/>
          <MDBIcon icon="envelope" size="lg" className="red-text my-4"/>
          <MDBIcon fab icon="angellist" size="lg" className="red-text pr-3"/>
          </div>
          
           
          <div className=' d-flex flex-column  '>
         
          <MDBCardTitle className="red-text pr-3">
					  {`${auth.userInfo.firstName} ${auth.userInfo.lastName}`}
				  </MDBCardTitle>
          <p className="red-text my-0"> {`${auth.userInfo.email}`}</p>
          <p className="red-text my-2">Be Happy</p>
          <br />
          <MDBBtn className="maxWH mx-0 borders text-center mb-4" color="red">Edit Profile</MDBBtn>
        </div>
        
    </div>
      
      
    
    
   
  );
};

export default UserProfile;
