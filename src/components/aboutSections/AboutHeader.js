import React from "react";

const AboutHeader = () => {
  return (
    <div>
      <hr className="btn-red w-75" />
      <p className="grey-text w-responsive mx-auto mb-5 ">
        The internet was originally envisaged as an open platform where people
        could freely exchange ideas, create communities based on commonly shared
        values, and securely communicate with one another. Unfortunately, Big
        Tech companies have failed to live up to this original vision by
        arbitrarily censoring users and by providing little transparency on what
        data they collect and how. PostGram is built upon a foundation of
        respect for free speech, private and personal data, and transparent
        corporate policy. This document will explain the problem we are trying
        to solve, our proposed solution to this problem, and our motivation for
        selecting this project. We will then discuss the project’s requirements,
        design process, implementation, verification, and finally, the lessons
        we learned.
      </p>
    </div>
  );
};

export default AboutHeader;
