import React from 'react';
import Banner from './Pages/Banner/Banner';
import CourseInfo from './Pages/Courses/CourseInfo';
import CourseSamary from './Pages/CourseSamary';
import FeatureInfo from './Pages/Features/FeatureInfo';
import Header from './Pages/Header/Header';
import TeamInfo from './Pages/OurTeams/TeamInfo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FeatureInfo></FeatureInfo>
            <CourseInfo></CourseInfo>
            <CourseSamary></CourseSamary>
            <TeamInfo></TeamInfo>
        </div>
    );
};

export default Home;