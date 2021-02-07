import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../src/images/image_01.webp";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center justify-content-center pt-5">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row ">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1> {props.name} <br /><strong className="brand-name"> Tec Guru</strong> </h1>
                                    <h2 className="my-3">We are the team of talented developer making websites</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started">{props.title}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Home Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Common;