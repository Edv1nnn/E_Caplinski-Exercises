"use strict";

const monday = 5;
const tuesday = 6;
const wednesday = 4;
const thursday = 5;
const friday = 4;

const lectureTimeMin = 45;

const lecturesPerWeek = monday + tuesday + wednesday + thursday + friday;

const totalLectureTimeMin = lecturesPerWeek * lectureTimeMin;

console.log(`Number of lectures per week - ${lecturesPerWeek}. This totals ${totalLectureTimeMin} minutes.`);