import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Courses extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <h4><em><strong>{this.props.siteName}</strong></em></h4>
                    <h5>{this.props.courseName}</h5>
                    <h6>{this.props.author}</h6>
                    </Cell> 
                <Cell col={8}>
                    <h4 style={{marginTop: "0px"}}>
                        {this.props.hours} Hour Course
                    </h4>
                    <h5><strong>Topics Covered:</strong> {this.props.topics}</h5>
                </Cell>
            </Grid>
        )
    }
}

export default Courses;