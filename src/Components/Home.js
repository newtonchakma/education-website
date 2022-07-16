import React from 'react';
import About from './Pages/About/About';
import Banner from './Pages/Banner/Banner';
import Contact from './Pages/Contact';
import CourseInfo from './Pages/Courses/CourseInfo';
import CourseSamary from './Pages/CourseSamary';
import FeatureInfo from './Pages/Features/FeatureInfo';
import Footer from './Pages/Footer';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';
import TeamInfo from './Pages/OurTeams/TeamInfo';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <FeatureInfo></FeatureInfo>
            <CourseInfo></CourseInfo>
            <CourseSamary></CourseSamary>
            <TeamInfo></TeamInfo>
            <About></About>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;