import React from "react";
import pro6 from '../assets/images/pro6.png';
import pro5 from '../assets/images/pro5.png';
import pro4 from '../assets/images/pro4.png';
import pro3 from '../assets/images/pro3.png';
import pro2 from '../assets/images/pro2.png';
import pro1 from '../assets/images/pro1.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Shristythapa/text2playlist-with-LLM" target="_blank" rel="noreferrer"><img src={pro1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shristythapa/text2playlist-with-LLM" target="_blank" rel="noreferrer"><h2>Playlist Recommendation System by Fine-tuning a Large Language Model</h2></a>
                <p>Developed a fine-tuned T5-based music recommendation system with a user-centric approach, integrating Flask, Flutter, PostgreSQL, and Tableau for seamless interactions and insights.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shristythapa/Providing-city-recommendation-for-students-migrating-to-uk-for-studies" target="_blank" rel="noreferrer"><img src={pro2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shristythapa/Providing-city-recommendation-for-students-migrating-to-uk-for-studies" target="_blank" rel="noreferrer"><h2>Providing city recommendations for students migrating to the UK for studies</h2></a>
                <p>Developed a city recommendation system for students migrating to the UK, leveraging R for data cleaning, formatting, and analysis of multi-source datasets to identify the top five student-friendly districts based on comprehensive factor evaluation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shristythapa/Nepal_Indicators" target="_blank" rel="noreferrer"><img src={pro3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shristythapa/Nepal_Indicators" target="_blank" rel="noreferrer"><h2>Nepal Resource Availability Access Analysis</h2></a>
                <p>Analyzed Nepal's resource availability using data from the World Bank Group, leveraging Python and Excel for cleaning and analysis, and presenting key insights through impactful Tableau visualizations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shristythapa/intruderDetector" target="_blank" rel="noreferrer"><img src={pro4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shristythapa/intruderDetector" target="_blank" rel="noreferrer"><h2>IOT Home Security System</h2></a>
                <p>Developed an IoT-based home security system with face recognition for intruder detection using Python, Raspberry Pi, and Arduino, leveraging Agile (Scrum) methodology for efficient and collaborative development.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shristythapa/Stories-of-Ghibli" target="_blank" rel="noreferrer"><img src={pro5} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shristythapa/Stories-of-Ghibli" target="_blank" rel="noreferrer"><h2>Stories of ghibli</h2></a>
                <p>Analyzed Studio Ghibli movies by scraping IMDb data with Python (Selenium), cleaning it using pandas, and creating interactive Tableau visualizations to showcase key movie insights.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shristythapa/job-task-scheduler" target="_blank" rel="noreferrer"><img src={pro6} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shristythapa/job-task-scheduler" target="_blank" rel="noreferrer"><h2>Job/Task Scheduler</h2></a>
                <p>Designed a job/task scheduler in Java with efficient O(V+E) time complexity using graph topological sort and queue, integrating Java's Swing for UI and MySQL for task storage.</p>
            </div>
    
        </div>
    </div>
    );
}

export default Project;