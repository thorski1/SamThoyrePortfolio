import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";


class Soft extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{display: "flex"}}>
                    <h5>{this.props.skill}</h5>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Soft;