import React from "react";
import '../assets/styles/Certification.scss';

function Certification() {
    return (
        <div className="certifications-container" id="certifications">
            <h1>Certifications and Membership</h1>
            <div className="certifications-grid">
                <div className="certification-card">
                    <a href="https://asset.cloudinary.com/duhlo06nb/e644dde052920d8d882bd070c434709e" target="_blank" rel="noreferrer">
                        <h2>Member of the Institution of Analytics (IOA)</h2>
                    </a>
                    <p>Dec 2023 - Dec 2024</p>
                </div>
                <div className="certification-card">
                    <a href="https://asset.cloudinary.com/duhlo06nb/e644dde052920d8d882bd070c434709e" target="_blank" rel="noreferrer">
                        <h2>Year 3 Python and R - IoA Knowledge: SQL Fundamentals (Datacamp)</h2>
                    </a>
                    <p>Completed on: Nov 18, 2024</p>
                </div>
                <div className="certification-card">
                    <a href="https://www.credly.com/badges/1ad53094-dd7e-4010-8a10-88ee9a9f8042?source=linked_in_profile" target="_blank" rel="noreferrer">
                        <h2>AWS Academy Graduate - AWS Academy Machine Learning Foundations</h2>
                    </a>
                    <p>Completed on: June 13, 2022</p>
                </div>
              
            </div>
        </div>
    );
}

export default Certification;
