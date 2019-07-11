import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton, Chip } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

    if(this.state.activeTab === 0) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                <CardTitle style={{color: "white", height: "176px", background: 
                    "url(https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png) center /cover"}} >
                    Bootstrap 4 Website
                </CardTitle>
                <CardText>
                    This was a website I created as a compilation of the assignments
                    through the first few sections in the Web Developer's Bootcamp, by
                    Colt Steele.
                </CardText>
                <div>
                    <Chip>HTML</Chip>
                    <Chip>CSS</Chip>
                    <Chip>Bootstrap 4</Chip>
                </div>
                <CardActions border>
                    <Button href="https://thorski1.github.io/MySolutions/" colored>Live Demo</Button>
                    <Button href="https://github.com/thorski1/MySolutions" colored>GitHub</Button>
                </CardActions>
            </Card>

            </div>
            )
        } else if(this.state.activeTab === 1) {
        return (
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                <CardTitle style={{color: "white", height: "176px", background: 
                    "url(https://images8.alphacoders.com/380/380534.png) center /cover"}} >
                    YelpCamp
                </CardTitle>
                <CardText>
                    This is the final project of the Web Developer Bootcamp, 
                    by Colt Steele, on Udemy.
                </CardText>
                <div>
                    <Chip>HTML</Chip>
                    <Chip>CSS</Chip>
                    <Chip>JavaScript</Chip>
                    <Chip>Bootstrap 3</Chip>
                    <Chip>Express</Chip>
                    <Chip>NodeJS</Chip>
                    <Chip>MongoDB</Chip>
                </div>
                <CardActions border>
                    <Button href="https://still-chamber-95832.herokuapp.com" colored>Live Demo</Button>
                    <Button href="https://github.com/thorski1/yelpcamp" colored>GitHub</Button>
                </CardActions>
            </Card>
        </div>
        )
        } else if(this.state.activeTab === 2) {
        return (
            console.log("")
        )
        }
        
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML/CSS/JavaScript</Tab>
                    <Tab>MEN Stack</Tab>
                    <Tab>MERN Stack</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
            </div>
        )
    }
}

export default Projects;