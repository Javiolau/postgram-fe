import React from "react";
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBCol,
	MDBLink,
} from "mdbreact";
import useSWR from "swr";

const NewsSection = () => {
	const { data, error } = useSWR("/API");

	return (
		<MDBCol>
			<MDBCard className='postBG' style={{ width: "22rem" }}>
				<h1>Title</h1>
				<a href='https://newsapi.org/' target='_blank'>
					<strong> Read more here! </strong>
				</a>
				<MDBCardBody>
					<MDBCardTitle>Sources</MDBCardTitle>
					<MDBCardText>
						Some quick example text to build on the card title and make up the
						bulk of the card&apos;s content.
					</MDBCardText>
				</MDBCardBody>
				<MDBCardImage
					className='img-fluid'
					src='https://cdn.arstechnica.net/wp-content/uploads/2017/06/Google-News-760x380.jpg'
					waves
				/>
				<MDBCardBody>
					<MDBBtn href='https://newsapi.org/'>NewsLink</MDBBtn>
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	);
};

export default NewsSection;
