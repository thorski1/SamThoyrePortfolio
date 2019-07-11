import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Languages from "./languages";
import Tools from "./tools";
import Frameworks from "./frameworks";
import Soft from "./soft";
import Courses from "./courses";


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: "center"}}>
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-512.png"
                                alt="avatar"
                                style={{height: "250px" }}
                            />
                        </div>
                        

                        <h2>Sam Thoyre</h2>
                        <h4 style={{color: "grey"}}>Full Stack Developer</h4>
                        <hr style={{borderTop: "3px solid #95D4A4", width: "50%"}}/>
                        <p>
                            Greetings! I am a golf professional in Florida looking
                            to make the transition into the world of web development!
                            I've been working hard to learn everything I can as efficiently
                            as possible! Currently, I am studying through various online 
                            resources to hone my skills and start making some awesome stuff!
                        </p>
                        <hr style={{borderTop: "3px solid #95D4A4", width: "50%"}}/>
                        <h5>Address</h5>
                        <p>6124 Willow Beck Lane, Apartment 103</p>
                        <p>Bradenton, Fl 34202</p>
                        <h5>Phone</h5>
                        <p>(919)605-4298</p>
                        <h5>Email</h5>
                        <p>sthoyre@gmail.com</p>
                        <hr style={{borderTop: "3px solid #95D4A4", width: "50%"}}/>
                    </Cell>
                    <Cell className="resume-right-col"col={8}>
                    <h2>Programming Languages</h2>

                        <Languages
                            language="HTML"
                            progress={85}    
                        />

                        <Languages
                            language="CSS"
                            progress={65}    
                        />

                        <Languages
                            language="JavaScript"
                            progress={35}    
                        />

                        <Languages
                            language="Git"
                            progress={60}    
                        />
                        <Languages
                            language="Command Line Interface"
                            progress={40}    
                        />

                        <hr style={{borderTop: "3px solid #95D4A4"}}/>
                        
                        <h2>Tools</h2>
                            <Tools 
                                tool="Github"
                                progress={80}
                            />
                            <Tools 
                                tool="Chrome Dev Tools"
                                progress={60}
                            />
                            <Tools 
                                tool="Ubuntu"
                                progress={50}
                            />
                            <Tools 
                                tool="Visual Studio Code"
                                progress={85}
                            />
                            <Tools 
                                tool="Windows"
                                progress={80}
                            />
                            <Tools 
                                tool="DOM"
                                progress={20}
                            />
                            <Tools 
                                tool="Postman"
                                progress={25}
                            />
                            <Tools 
                                tool="APIs"
                                progress={20}
                            />
                            <Tools 
                                tool="NodeJS"
                                progress={40}
                            />
                            <Tools 
                                tool="MongoDB"
                                progress={30}
                            />
                            <Tools 
                                tool="Mongoose"
                                progress={30}
                            />
                            <Tools 
                                tool="EJS"
                                progress={30}
                            />
                            <Tools
                                tool="Heroku"
                                progress={60}
                            />

                        <hr style={{borderTop: "3px solid #95D4A4"}}/>
                        
                        <h2>Frameworks/Libraries</h2>

                            <Frameworks 
                                framework="Bootstrap 4"
                                progress={70}
                            />
                            <Frameworks 
                                framework="Bootstrap 3"
                                progress={40}
                            />
                            <Frameworks 
                                framework="jQuery"
                                progress={20}
                            />
                            <Frameworks 
                                framework="Express"
                                progress={50}
                            />
                            <Frameworks 
                                framework="Request.JS"
                                progress={20}
                            />
                            <Frameworks 
                                framework="Semantic UI"
                                progress={60}
                            />
                            <Frameworks 
                                framework="React"
                                progress={10}
                            />
                            <Frameworks 
                                framework="React Material Design Lite"
                                progress={40}
                            />

                        <hr style={{borderTop: "3px solid #95D4A4"}}/>
                        
                        <h2>Online Courses/Bootcamps</h2>
                        <h3>Total Hours of Curriculum Completed: 84.5</h3>

                            <Courses 
                                siteName="Udemy"
                                courseName="Web Developer Bootcamp"
                                author="Colt Steele"
                                hours={47.5}
                                topics="HTML, CSS, Bootstrap, Javascript, jQuery, DOM, Postman, Express, NodeJS, Request.JS, API's, Semantic UI, Authentication, MongoDB, Mongoose, EJS, Heroku, Git, Github"
                            />

                            <hr style={{borderTop: "1px solid black"}}/>

                            <Courses 
                                siteName="Codecademy"
                                courseName="Introduction to HTML"
                                hours={7}
                                topics="HTML"
                            />

                            <hr style={{borderTop: "1px solid black"}}/>

                            <Courses 
                                siteName="Codecademy"
                                courseName="Learn CSS"
                                hours={15}
                                topics="CSS"
                            />

                            <hr style={{borderTop: "1px solid black"}}/>

                            <Courses 
                                siteName="Pluralsight"
                                courseName="JavaScript: Getting Started"
                                author="Mark Zamoyta"
                                hours={2.75}
                                topics="JavaScript"
                            />

                            <hr style={{borderTop: "1px solid black"}}/>

                            <Courses 
                                siteName="Pluralsight"
                                courseName="JavaScript Fundamentals"
                                author="Mark Zamoyta"
                                hours={3}
                                topics="JavaScript"
                            />

                            <hr style={{borderTop: "1px solid black"}}/>

                            <Courses 
                                siteName="Pluralsight"
                                courseName="JavaScript Objects and Prototypes"
                                author="Jim Cooper"
                                hours={0.75}
                                topics="JavaScript"
                            />

                            <hr style={{borderTop: "1px solid black"}}/>

                            <Courses 
                                siteName="Pluralsight"
                                courseName="HTML, CSS, and JavaScript: The Big Picture"
                                author="Barry Luijbregts"
                                hours={1.5}
                                topics="HTML, CSS, and JavaScript"
                            />

                            <hr style={{borderTop: "1px solid black"}}/>

                            <Courses 
                                siteName="Pluralsight"
                                courseName="User Experience Tips and Tricks for Developers"
                                author="Amber Isrealsen"
                                hours={3}
                                topics="User Experience"
                            />

                            <hr style={{borderTop: "1px solid black"}}/>

                        <hr style={{borderTop: "3px solid #95D4A4"}}/>
                        
                        <h2>Education</h2>

                        <Education 
                            startYear={2008}
                            endYear={2009}
                            schoolName="Alamance Community College"
                            schoolDescription="Associate's Degree in Business Administration"
                        />

                        <Education 
                            startYear={2010}
                            endYear={2011}
                            schoolName="University of North Carolina at Greensboro"
                            schoolDescription="Bachelor's Degree in Economics"
                        />

                        <hr style={{borderTop: "3px solid #95D4A4"}}/>

                        <h2>Soft Skills</h2>
                            <div className="soft-skills-grid">
                                <Soft skill="Training" />
                                <Soft skill="Management" />
                                <Soft skill="Customer Service" />
                                <Soft skill="Budgeting" />
                                <Soft skill="Time Management" />
                                <Soft skill="Data Entry" />
                                <Soft skill="Inventory Control" />
                                <Soft skill="Business Development" />
                                <Soft skill="Sense of Humor" />
                            </div>
                        <hr style={{borderTop: "3px solid #95D4A4"}}/>

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2017}
                            endYear="Current"
                            jobName="Sara Bay Country Club"
                            jobDescription="Assistant Golf Professional"
                        />

                        <Experience 
                            startYear={2016}
                            endYear={2017}
                            jobName="Esplanade Golf & Country Club"
                            jobDescription="Assistant Golf Professional"
                        />

                        <Experience 
                            startYear={2015}
                            endYear={2016}
                            jobName="Belleview Biltmore Golf Club"
                            jobDescription="Golf Shop Assistant"
                        />

                    <hr style={{borderTop: "3px solid #95D4A4"}}/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;