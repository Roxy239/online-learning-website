import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <Banner />
            <Courses />
            {/* <Allcourses /> */}
            <Footer />
        </div>
    );
};

export default Home;