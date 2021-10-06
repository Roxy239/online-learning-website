import React, { useEffect, useState } from 'react';
import './Courses.css';

const Courses = () => {
    //data load
    const [courses, setCourses] = useState([]);

    const [searchText, setSearchText] = useState("");



    useEffect(() => {
        if (searchText !== "") {
            let filter_data = courses.filter(obj => obj.name.includes(searchText));
            setCourses(filter_data)
        } else {
            fetch('./tool.JSON')
                .then(res => res.json())
                .then(data => setCourses(data));
        }
    }, [searchText])



    const handleChange = (e) => {
        // const searchText = e.target.value;
        setSearchText(e.target.value);
    };

    // console.log(courses);
    console.log(searchText);



    return (
        // search part
        <div className="course-container p-3 m-5">
            <h1>Our Courses</h1>
            <div className="srarch-box ">
                <input onChange={handleChange} type="text" className="p-2" placeholder="enter course name" />
                <button className="btn btn-danger m-3">Search</button>
            </div>

            {/* courses part */}
            <div className="courses">
                <div className="row">
                    {
                        courses?.slice(0, 3).map(course => (

                            <div className="col-md-4">
                                <div className="cart p-2 m-4 border border-success border-1" >
                                    <div className="cart-details">
                                        <img className="h-75 w-50 p-2 m-3 img-fluid " src={course.img} alt="" />
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

export default Courses;