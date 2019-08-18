import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Languages from './languages';
import Tools from './tools';
import Frameworks from './frameworks';
import Soft from './soft';
import Courses from './courses';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://lh3.googleusercontent.com/uqhF_ZYQEEsnT4suYGE9ommXWmu6c0VrE0cb55yj-UV6MsW_uwarQWKZJ0Q7NGENcCkMQcA6zcyAgSfSWK86VFBFcoyUpf9zOYX-uRt9x_2A7tpq1TY2FfuLUQB9Ix6O7TeO2Gzm5xUIsh-B8ajDcSXHa1Cmx4hXLt5a8Ibz3-wqnalXCbiEoX53at6ZCauREowKo9px4aBG6Gfc1SLmESCd-KhuQrs5IeLRaSwEqZaZFl98bUoVLA5ePwrwK6lqU-27i3YTUFoIA5CftZSld8-WJjb41o2cZp0woiL5iRaKzpXud-jLiObwSMbuU1DBe-cvIGgAa6a-VxcsOKnyg9O0mMjXE4lvdxs0G317lrzXDm13TD2-0JdKSNfIABh-J0p-onAqu2i18lFu-5sz2GSyww3FA_p6_r_bRYfU47BqlZzRsIGyy2FewNlBPohg1a4PDnmJqrYEpQYos88H90AOje4xzAabeuU-loQSudwdwRwGkrYv921yDmM5apzHC7J_tRLkwJ1HqplsbEPxsSartcTt-gjRgW1lKTELuw5CDP_OnkA7z3WnV16emjcKy-hkhgqFIzrS7pXhZi6opP7DnDW32vU-Ve7Pj3p3ht_wNRMio2KxP4OEjcCG0OohBL_l5vSrb2W0QFeJNoKSHsyBGtnt94A=s504-no"
                alt="avatar"
                style={{ height: '250px' }}
              />
            </div>

            <h2>Sam Thoyre</h2>
            <h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
            <hr style={{ borderTop: '3px solid #95D4A4', width: '50%' }} />
            <p>
              Over the past 15 years, I have been honing my soft skills into a science. I know exactly how to interact with both customers and co-workers, superiors or otherwise. Now, I'm leveling up by developing my technical skills so that I can be prepared for a junior software development position.  Since May 26th, 2019, I have been learning everything there is to know about software engineering. I am completely self-sufficient in my studies; all I need is a direction to work towards and I will take care of the rest.  I may not know everything there is to know about software development, but I know how to research, read documentation, and most importantly, use Google!
            </p>
            <hr style={{ borderTop: '3px solid #95D4A4', width: '50%' }} />
            <h5>Address</h5>
            <p>6124 Willow Beck Lane, Apartment 103</p>
            <p>Bradenton, Fl 34202</p>
            <h5>Phone</h5>
            <p>(919)605-4298</p>
            <h5>Email</h5>
            <p>sthoyre@gmail.com</p>
            <hr style={{ borderTop: '3px solid #95D4A4', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Programming Languages</h2>

            <Languages language="HTML" progress={100} />

            <Languages language="CSS" progress={80} />

            <Languages language="JavaScript" progress={50} />
            <Languages language="Sass" progress={35} />

            <Languages language="Git" progress={70} />
            <Languages language="Command Line Interface" progress={60} />

            <hr style={{ borderTop: '3px solid #95D4A4' }} />

            <h2>Tools</h2>
            <Tools tool="Github" progress={80} />
            <Tools tool="NodeJS" progress={80} />
            <Tools tool="Redux" progress={20} />
            <Tools tool="Stripe API" progress={40} />
            <Tools tool="Firebase" progress={40} />
            <Tools tool="JSS" progress={40} />
            <Tools tool="React Router" progress={40} />
            <Tools tool="MongoDB" progress={40} />
            <Tools tool="Chrome Dev Tools" progress={60} />
            <Tools tool="Ubuntu" progress={50} />
            <Tools tool="Visual Studio Code" progress={85} />
            <Tools tool="Windows" progress={80} />
            <Tools tool="DOM" progress={20} />
            <Tools tool="Postman" progress={25} />
            <Tools tool="APIs" progress={20} />
            <Tools tool="NodeJS" progress={40} />
            <Tools tool="MongoDB" progress={30} />
            <Tools tool="Mongoose" progress={30} />
            <Tools tool="EJS" progress={30} />
            <Tools tool="Heroku" progress={60} />
            <Tools tool="LeafletJS" progress={30} />

            <hr style={{ borderTop: '3px solid #95D4A4' }} />

            <h2>Frameworks/Libraries</h2>

            <Frameworks framework="React" progress={60} />
            <Frameworks framework="Vue" progress={30} />
            <Frameworks framework="Bootstrap 4" progress={70} />
            <Frameworks framework="Bootstrap 3" progress={40} />
            <Frameworks framework="jQuery" progress={20} />
            <Frameworks framework="Express" progress={50} />
            <Frameworks framework="Request.JS" progress={20} />
            <Frameworks framework="Semantic UI" progress={60} />
            <Frameworks framework="React Material Design Lite" progress={40} />

            <hr style={{ borderTop: '3px solid #95D4A4' }} />

            <h2>Online Courses/Bootcamps</h2>
            <h3>Total Hours of Curriculum Completed: 123.5</h3>
            <Courses
              siteName="Udemy"
              courseName="The Modern React Bootcamp"
              author="Colt Steele"
              hours={39}
              topics="React, React Hooks, React Router, Context API, JSS, Drag & Drop with React, Material UI, Bootstrap, Webpack"
            />

            <hr style={{ borderTop: '1px solid black' }} />

            <Courses
              siteName="Udemy"
              courseName="Web Developer Bootcamp"
              author="Colt Steele"
              hours={47.5}
              topics="HTML, CSS, Bootstrap, Javascript, jQuery, DOM, Postman, Express, NodeJS, Request.JS, API's, Semantic UI, Authentication, MongoDB, Mongoose, EJS, Heroku, Git, Github"
            />

            <hr style={{ borderTop: '1px solid black' }} />

            <Courses
              siteName="Codecademy"
              courseName="Introduction to HTML"
              hours={7}
              topics="HTML"
            />

            <hr style={{ borderTop: '1px solid black' }} />

            <Courses
              siteName="Codecademy"
              courseName="Learn CSS"
              hours={15}
              topics="CSS"
            />

            <hr style={{ borderTop: '1px solid black' }} />

            <Courses
              siteName="Pluralsight"
              courseName="JavaScript: Getting Started"
              author="Mark Zamoyta"
              hours={2.75}
              topics="JavaScript"
            />

            <hr style={{ borderTop: '1px solid black' }} />

            <Courses
              siteName="Pluralsight"
              courseName="JavaScript Fundamentals"
              author="Mark Zamoyta"
              hours={3}
              topics="JavaScript"
            />

            <hr style={{ borderTop: '1px solid black' }} />

            <Courses
              siteName="Pluralsight"
              courseName="JavaScript Objects and Prototypes"
              author="Jim Cooper"
              hours={0.75}
              topics="JavaScript"
            />

            <hr style={{ borderTop: '1px solid black' }} />

            <Courses
              siteName="Pluralsight"
              courseName="HTML, CSS, and JavaScript: The Big Picture"
              author="Barry Luijbregts"
              hours={1.5}
              topics="HTML, CSS, and JavaScript"
            />

            <hr style={{ borderTop: '1px solid black' }} />

            <Courses
              siteName="Pluralsight"
              courseName="User Experience Tips and Tricks for Developers"
              author="Amber Isrealsen"
              hours={3}
              topics="User Experience"
            />

            <hr style={{ borderTop: '3px solid #95D4A4' }} />

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

            <hr style={{ borderTop: '3px solid #95D4A4' }} />

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
            <hr style={{ borderTop: '3px solid #95D4A4' }} />

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

            <hr style={{ borderTop: '3px solid #95D4A4' }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
