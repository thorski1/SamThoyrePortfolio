import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";


class Tools extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div>
                        <h4 style={{fontWeight: "bold"}}>
                            {this.props.tool}
                        </h4>
                        <ProgressBar style={{margin: "auto", width: "75%"}}
                        progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Tools;