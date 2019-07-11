import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";


class Languages extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div>
                        <h4 style={{fontWeight: "bold"}}>{this.props.language}</h4> 
                    <ProgressBar style={{margin: "auto", width: "75%"}}
                    progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Languages;