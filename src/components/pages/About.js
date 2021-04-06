import React from "react";
import AboutParticipants from "../aboutSections/AboutParticipants";
import { MDBContainer } from "mdbreact";

import chabeliIMG from "../../assets/images/chabeli.jpeg";
import fidelIMG from "../../assets/images/fidel.jpeg";
import ginelIMG from "../../assets/images/ginel.jpeg";
import javierIMG from "../../assets/images/javier.jpeg";
import richarIMG from "../../assets/images/richar.jpeg";
import yasielIMG from "../../assets/images/yasiel.jpeg";
import FooterPage from "../navigation/FooterPage";

const AboutPage = () => {
  const aboutUsInfo = [
    {
      name: "Richar Marshall",
      role: "Developer & QA",
      description:
        "More than 3 years of experiece in the industry of Web Development and Software Engineering.",
      image: richarIMG,
      github: "https://github.com/reaxster",
      linkedIn: "https://www.linkedin.com/in/richar-marshall-665559127/",
    },

    {
      name: "Chabeli Barranco",
      role: "Front-end Developer",
      description:
        "Software Engineer with knowledge in Java, C, C++, and React",
      image: chabeliIMG,
      github: "https://github.com/cbroque95",
      linkedIn: "https://www.linkedin.com/in/chabeli-barranco-66637b147/",
    },
    {
      name: "Fidel Hernandez",
      role: "Back-end Developer",
      description: "Sleeps all day and codes all night",
      image: fidelIMG,
      github: "https://github.com/fhernan22",
      linkedIn: "https://www.linkedin.com/in/fidel-hernandez-09738014a/",
    },

    {
      name: "Ginel Gordillo",
      role: "Back-end Developer QA",
      description:
        "Software Egineer with experience in Python, Java, React, JavaScript and other technologies.",
      image: ginelIMG,
      github: "https://github.com/papijuancho",
      linkedIn: "http://linkedin.com/in/ginelgordillo",
    },
    {
      name: "Yasiel Barroso",
      role: "Front-end Developer",
      description:
        "Software Engineer with experience in Python, Java, C#, C, React, Javascript and other technologies.",
      image: yasielIMG,
      github: "https://github.com/ybarr042",
      linkedIn: "https://www.linkedin.com/in/yasiel-barroso-985a0b171/",
    },
    {
      name: "Javier Oliva",
      role: "QA",
      description:
        "Software engineer with experience in Java, python, C, React, Javascript and other technologies.",
      image: javierIMG,
      github: "https://github.com/Javiolau/",
      linkedIn: "https://www.linkedin.com/in/javier-oliva/",
    },
  ];

  return (
    <MDBContainer>
      <div>
        <AboutParticipants info={aboutUsInfo} />
      </div>

      <FooterPage />
      <hr className="btn-red w-50" />
    </MDBContainer>
  );
};

export default AboutPage;
