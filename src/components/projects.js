import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  Chip
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '176px',
                background:
                  'url(http://www.businessnewsdaily.com/images/i/000/007/560/original/e-commerce.jpg?1417013448) center /cover'
              }}
            >
              E-Commerce
            </CardTitle>
            <CardText>
              This is the culminating project for "The Complete React Developer
              in 2019" and uses React, Redux, Firebase, Stripe, React-Router,
              and CSS in JS.
            </CardText>

            <CardActions border>
              <Button href="https://sams-crwn-clothing.herokuapp.com/" colored>
                Live Demo
              </Button>
              <Button
                href="https://github.com/thorski1/ECommerceClothingReact"
                colored
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '176px',
                background:
                  'url(https://tse2.mm.bing.net/th?id=OIP.FBt-3EfO6Ey9sPY3EzCQsAHaHa&pid=Api&P=0&w=300&h=300) center /cover'
              }}
            >
              Color Palettes
            </CardTitle>
            <CardText>
              This is the culminating project for "The Modern React Bootcamp"
              and uses React, React Router, Hooks, Context, Drag & Drop and
              Material UI.
            </CardText>

            <CardActions border>
              <Button href="https://objective-borg-49ef3d.netlify.com" colored>
                Live Demo
              </Button>
              <Button
                href="https://github.com/thorski1/ColorPaletteReact"
                colored
              >
                GitHub
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '176px',
                background:
                  'url(http://1.bp.blogspot.com/_oBHdzkPU7p8/S8zBIQN5o6I/AAAAAAAABhU/iYT6wX6BRZY/s1600/Scott+Metzger+sample+1.JPG) center /cover'
              }}
            >
              To-Do List
            </CardTitle>
            <CardText>
              This is a basic todo app with persistent state using local
              storage. I used React to make this with hooks, reducers, and
              context. It's basic, but I actually use it all the time!
            </CardText>

            <CardActions border>
              <Button href="https://hopeful-golick-e9cfeb.netlify.com" colored>
                Live Demo
              </Button>
              <Button
                href="https://github.com/thorski1/TodoReactHooksContextReducers"
                colored
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '176px',
                background:
                  'url(https://images8.alphacoders.com/380/380534.png) center /cover'
              }}
            >
              YelpCamp
            </CardTitle>
            <CardText>
              This is the final project of the Web Developer Bootcamp, by Colt
              Steele, on Udemy.
            </CardText>

            <CardActions border>
              <Button href="https://still-chamber-95832.herokuapp.com" colored>
                Live Demo
              </Button>
              <Button href="https://github.com/thorski1/yelpcamp" colored>
                GitHub
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '176px',
                background:
                  'url(https://i.ytimg.com/vi/SCAqyPfwzcU/maxresdefault.jpg) center /cover'
              }}
            >
              Florida's Breweries
            </CardTitle>
            <CardText>
              This is a map of 20 of Florida's breweries, made using Leaflet,
              Vue, Bootstrap, and OpenBreweryDB.org API
            </CardText>

            <CardActions border>
              <Button href="https://jovial-rosalind-d8799b.netlify.com" colored>
                Live Demo
              </Button>
              <Button
                href="https://github.com/thorski1/FloridasBreweries"
                colored
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '176px',
                background:
                  'url(https://sabe.io/tutorials/getting-started-with-vue-js/hero.png) center /cover'
              }}
            >
              Florida's Breweries
            </CardTitle>
            <CardText>
              This a blog that I post an update everyday about what and how I'm
              learning. I used Vue, NuxtJS, and Storblok CMS to create this
              blog.
            </CardText>

            <CardActions border>
              <Button href="https://thorski1.github.io/ProgressBlog/" colored>
                Live Demo
              </Button>
              <Button
                href="https://github.com/thorski1/ProgressBlog"
                colored
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JavaScript & Node</Tab>
          <Tab>Vue</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
