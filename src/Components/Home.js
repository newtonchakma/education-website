import React from 'react';
import Banner from './Pages/Banner/Banner';
import CourseInfo from './Pages/Courses/CourseInfo';
import CourseSamary from './Pages/CourseSamary';
import FeatureInfo from './Pages/Features/FeatureInfo';
import Header from './Pages/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FeatureInfo></FeatureInfo>
            <CourseInfo></CourseInfo>
            <CourseSamary></CourseSamary>
        </div>
    );
};

export default Home;