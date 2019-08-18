import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sam Thoyre</h2>
            <img
              src="https://lh3.googleusercontent.com/xo8E7DP_lbyW95YPIJ5BivabS-y5POOpygQjVrLW6yEfVL6ktoY7ofleCpe3UN6woUPhAk22cpR-l1uxm06SP6gtpYHmm5udVNo2YP3xEB9eJxiLtA3VsyHnDaWD2A7MQsMRy75LsMy17jl-8P9WI5oUjtfqIwcxf_VzSWIzpERLJc9yb9z1u-gyK4qszV4YJ-VL8Z1kJUmQAUNuDFB6ec8lcM_fEpYky9hWoWBIVdQHWzbM0gd7P8P2SV63ZfwOmeug_mmiyGVaIYnYZVOS-HvVvviqB7wHuOW_YFoRXuftxjJuj6dsPlEJXwtPRx3xcCc8MqsnVH34L0XOCrxPW5lyNSgFB0mskFgVv1_dzQk0y1uOMBUDfsRSZ7RMpLzVurN6ZJTBQhHqjEZFSa8bOgYuj6bxKaRwjElZcEazezQVlqNdtTrPLWsUJCcLsp0mqNASyWulZhz-H0LOnm9T0nAcz2znQ6QbYtQ2v2EvGshb0D7PGnDuckPRfQRAzdkphMDuTxNFpKORGb6qvRYv6Odd32wdfpwKvxutKVMg3s-MadaF4fOacS8MIvv7notNGBK8yweCbOiUe1M2SpuzY1bMYHaop_JId_9iRoJ9HKPRg7WhHP5PJaHAXmEj6nZfubGDXYIWl-cMkRVhunIWlIwhxUD6pKI=w374-h454-no"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              I am available for hire! If you would like to add a
              self-motivated, hard-working son-of-a-gun, there are several ways
              to get in touch with me. Look over to the right!
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '2rem', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (919)605-4298
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '2rem', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    sthoyre@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '2rem', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <a href="https://www.linkedin.com/in/sam-thoyre-19829031">
                      My LinkedIn Profile
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '2rem', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                    <a href="https://github.com/thorski1">My Github Profile</a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
