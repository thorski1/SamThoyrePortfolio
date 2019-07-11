import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sam Thoyre</h2>
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-512.png"
                            alt="avatar"
                            style={{height: "250px"}}
                            />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                             do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "2rem", fontFamily: "Anton"}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (919)605-4298
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: "2rem", fontFamily: "Anton"}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        sthoyre@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: "2rem", fontFamily: "Anton"}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href="https://www.linkedin.com/in/sam-thoyre-19829031">
                                            My LinkedIn Profile
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: "2rem", fontFamily: "Anton"}}>
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                        <a href="https://github.com/thorski1">
                                            My Github Profile
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;