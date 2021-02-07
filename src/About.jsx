
import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/image_01.png";
import Common from "./Common";



const About = () =>{
    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" title = "Contact Now"/>
        </>
    );
};
export default About;