import React, { useEffect, useState } from 'react';
import './Allcourses.css';

const Allcourses = () => {
    //data load
    const [courses, setCourses] = useState([]);




    useEffect(() => {
        fetch('./tool.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));


    }, []);




    // console.log(courses);




    return (
        // search part
        <div className="course-container p-3 m-5">
            {/* <h1>Our Courses</h1>
            <div className="srarch-box ">
                <input type="text" className="p-2" placeholder="enter course name" />
                <button className="btn btn-danger m-3">Search</button>
            </div> */}

            {/* courses part */}
            <div className="courses">
                <div className="row">
                    {
                        courses?.map(course => (

                            <div className="col-md-4">
                                <div className="cart p-2 m-4 border border-success border-1" >
                                    <div className="cart-details">
                                        <img className=" img-fluid " style={{ height: "120px" }} src={course.img} alt="" />
                                    </div>
                                    <div className="m-2 p-2 text-area">
                                        <h4>{course.name}</h4>
                                        <p>Instructor:{course.instructor}</p>
                                        <p>Duration:{course.duration}</p>
                                        <p>price: ${course.price}</p>
                                        <p>University: {course.university}</p>

                                    </div>

                                    <button className="btn btn-success">Details</button>

                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div >
    );
};

export default Allcourses;