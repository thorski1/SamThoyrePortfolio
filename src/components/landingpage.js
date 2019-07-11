import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
    render() {
        return(
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://lh3.googleusercontent.com/uqhF_ZYQEEsnT4suYGE9ommXWmu6c0VrE0cb55yj-UV6MsW_uwarQWKZJ0Q7NGENcCkMQcA6zcyAgSfSWK86VFBFcoyUpf9zOYX-uRt9x_2A7tpq1TY2FfuLUQB9Ix6O7TeO2Gzm5xUIsh-B8ajDcSXHa1Cmx4hXLt5a8Ibz3-wqnalXCbiEoX53at6ZCauREowKo9px4aBG6Gfc1SLmESCd-KhuQrs5IeLRaSwEqZaZFl98bUoVLA5ePwrwK6lqU-27i3YTUFoIA5CftZSld8-WJjb41o2cZp0woiL5iRaKzpXud-jLiObwSMbuU1DBe-cvIGgAa6a-VxcsOKnyg9O0mMjXE4lvdxs0G317lrzXDm13TD2-0JdKSNfIABh-J0p-onAqu2i18lFu-5sz2GSyww3FA_p6_r_bRYfU47BqlZzRsIGyy2FewNlBPohg1a4PDnmJqrYEpQYos88H90AOje4xzAabeuU-loQSudwdwRwGkrYv921yDmM5apzHC7J_tRLkwJ1HqplsbEPxsSartcTt-gjRgW1lKTELuw5CDP_OnkA7z3WnV16emjcKy-hkhgqFIzrS7pXhZi6opP7DnDW32vU-Ve7Pj3p3ht_wNRMio2KxP4OEjcCG0OohBL_l5vSrb2W0QFeJNoKSHsyBGtnt94A=s504-no"
                            alt="avatar"
                            className="avatar-img"
                            />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | NodeJS | Express | MongoDB</p>

                        <div className="social-links">

                            {/*LinkedIn */}
                            <a href="https://google.com" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/*Github */}
                            <a href="https://google.com" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                        </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;