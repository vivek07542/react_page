import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/image_01.webp";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow Your Business With" imgsrc={web} visit="/service" title = "Get Started"/>
        </>
    );
};
export default Home;