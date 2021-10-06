import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <MenuBar></MenuBar>
                    <div className="col-md-6">
                        <h1 className="title">
                            Be an IT SPECIALIST <br /> LEARN AND BE SKILLFULL
                        </h1>
                        <p className="text-white text-center mt-3">
                            For students around the country, classroom learning has become distance learning. Despite the uncertainty around closed schools, teachers can still provide some continuity for their students. With Verizon’s reliable, secure network, school administrators can give teachers the connectivity and collaboration tools to help them connect with students, parents and colleagues.
                        </p>
                        <button className="mt-3 about-btn">About Us</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
