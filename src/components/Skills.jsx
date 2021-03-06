import React from "react";
import { Container, Heading,Box } from "@chakra-ui/react";
import SkillBox from "./SkillBox";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FcCommandLine } from "react-icons/fc";
import {
  SiGithub,
  SiEagle,
  SiAnsys,
  SiAdobeillustrator,
  SiInkscape,
  SiAdobexd,
  SiArduino,
  SiChakraui,
  SiFirebase,
  SiReact,
  SiExpress,
  SiRedux,
  SiFlutter,
  SiJavascript,
  SiCss3,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const frontend = [
    {
      id: 1,
      skill: "HTML5",
      img: <AiFillHtml5 size="25px" color="rgb(233,89,35)" />,
    },
    { id: 2, skill: "CSS3", img: <SiCss3 size="25px" color="blue" /> },
    {
      id: 3,
      skill: "JavaScript",
      img: <SiJavascript size="25px" color="orange" />,
    },
    { id: 4, skill: "React", img: <SiReact size="25px" color="skyblue" /> },
    { id: 5, skill: "Redux", img: <SiRedux size="25px" color="darkblue" /> },
    {
      id: 6,
      skill: "Chakra",
      img: <SiChakraui size="25px" color="rgb(78,201,196)" />,
    },
    {
      id: 7,
      skill: "Flutter",
      img: <SiFlutter size="25px" color="rgb(94,200,248)" />,
    },
  ];
  const backend = [
    {
      id: 1,
      skill: "Express.js",
      img: <SiExpress size="25px" color="black" />,
    },
    {
      id: 2,
      skill: "MongoDB",
      img: <SiMongodb size="25px" color="rgb(104,177,62)" />,
    },
    {
      id: 3,
      skill: "Node.js",
      img: <FaNodeJs size="25px" color="rgb(102,159,100)" />,
    },
    { id: 4, skill: "MySQL", img: <DiMysql size="25px" color="darkblue" /> },
    {
      id: 5,
      skill: "Firebase",
      img: <SiFirebase size="25px" color="orange" />,
    },
  ];
  const toolsets = [
    {
      id: 1,
      skill: "AdobeXD",
      img: <SiAdobexd size="25px" color="rgb(69,1,53)" />,
    },
    {
      id: 2,
      skill: "Fusion360",
      img: <AiFillHtml5 size="25px" color="orange" />,
    },
    { id: 3, skill: "Inkskape", img: <SiInkscape size="25px" color="black" /> },
    {
      id: 4,
      skill: "Illustrator",
      img: <SiAdobeillustrator size="25px" color="rgb(49,0,0)" />,
    },
    {
      id: 5,
      skill: "Eagle",
      img: <SiEagle size="25px" color="rgb(193,105,32)" />,
    },
    {
      id: 6,
      skill: "SolidWorks",
      img: <AiFillHtml5 size="25px" color="orange" />,
    },
    { id: 7, skill: "ANSYS", img: <SiAnsys size="25px" color="black" /> },
    { id: 8, skill: "GitHub", img: <SiGithub size="25px" color="black" /> },
    {
      id: 9,
      skill: "CLI Bash",
      img: <FcCommandLine size="25px" color="black" />,
    },
  ];
  const hardskils = [
    {
      id: 1,
      skill: "Arduino",
      img: <SiArduino size="25px" color="rgb(78,201,196)" />,
    },
  ];

  return (
    <Container       maxW="90%"
    >

      <Heading textAlign="center" margin="20px">
        My Skills
      </Heading>
    <Container
      maxW="100%"
      textAlign="left"
      marginTop="50px"
      display='grid'
      gridTemplateColumns={[
        "repeat(1,1fr)",
        "repeat(2,1fr)",
        "repeat(3,1fr)",
        "repeat(3,1fr)",
        "repeat(3,1fr)",
    ]}
      gap='20px'

    >
        <Box p='10px' boxShadow='inner'borderRadius='10px' h='auto'>

      <Heading size="lg" margin="20px">
        Frontent
      </Heading>
      <SkillBox skills={frontend} />
        </Box>
        <Box p='10px' boxShadow='inner'borderRadius='10px' h='auto'>

      <Heading size="lg" margin="20px">
        Backend
      </Heading>
      <SkillBox skills={backend} />
        </Box>
        <Box p='10px' boxShadow='inner'borderRadius='10px' h='auto'>

      <Heading size="lg" margin="20px">
        Toolsets
      </Heading>
      <SkillBox skills={toolsets} />
        </Box>
        <Box p='10px' boxShadow='inner'borderRadius='10px' h='auto'>

      <Heading size="lg" margin="20px">
        Hardware
      </Heading>
      <SkillBox skills={hardskils} />
        </Box>
    </Container>
    </Container>
  );
};

export default Skills;
