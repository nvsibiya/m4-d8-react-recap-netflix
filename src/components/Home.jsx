import React, { Component } from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import Gallery from "./Gallery";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transformers: [],
      spiderMan: [],
      matrix: [],
      error: false,
      laoding: true,
      comments: [],
    };
  }

  // url = "http://www.omdbapi.com/?apikey=fbcf9bfb";

  componentDidMount() {
    Promise.all([
    fetch ("http://www.omdbapi.com/?apikey=fbcf9bfb" + "&s=transformers")
      .then((response) => response.json())
      .then((responseObject) =>
        this.setState({ transformers: responseObject.Search})
        ),
    
    fetch ("http://www.omdbapi.com/?apikey=fbcf9bfb" + "&s=spider%20man")
      .then((response) => response.json())
      .then((responseObject) =>
        this.setState({ spiderMan: responseObject.Search})
        ),

    fetch ("http://www.omdbapi.com/?apikey=fbcf9bfb" + "&s=matrix")
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ matrix: responseObject.Search})
          ),
      ])
        .then(()  => this.setState ({ laoding: false}))
        .catch((err) => {
          this.setState({error: true})
          console.log("An error has occured:", err)
        }
        );

    // console.log("componentDidMount");
  }

  fetchComments = async (movieID) => {
    const commentsUrl = "https://striveshool.herokuapp.com/api/comments/";
    const comments = await fetch(commentsUrl + movieID, {
      headers: new Headers({
        Authorization: "Basic dXN1cjc6M1VVNWRnZ1b1J1U1A3RQ==",
      }),
  }).then((resp) => resp.json());
  this.setState ({comments}); 
 

}


  render() {
    // console.log("render method");
    return (
      <Container fluid className="px-4">
        <Row className="justify-content-between mb-4">
          <Col className="d-flex align-items-center">
            <h2 className="mb-0">TV Shows</h2>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="btn btn-sm dropdown-toggle rounded-0 ml-3"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <div className="d-none d-md-block">
            <i className="fa fa-th-large icons mr-2"></i>
            <i className="fa fa-th icons mr-4"></i>
          </div>
        </Row>

        {/* <Gallery title={title} imageSrc={"/assets/image.jpg"}>

            <h4>{props.title}</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">

                <Movies title={props.title} imageSrc={props.imageSrc}>
                    <Image src={props.imageSrc} alt={props.title}></Image>
                </Movies>
                
            </Row>

        <Gallery /> */}
        {this.state.error && (
          <alert variant="danger">
            An error has occured, please try again later.
          </alert>
        )}
        {!this.state.error && !this.state.laoding && (
          <div>
            {/* This Gallery will not receive props.title inside, only props.imageSrc */}
            <Gallery 
            title="Transformers"
            loading={this.state.loading}
            movies={this.state.transformers.slice(0, 6)} 
            comments={this.state.comments}
            />
            <Gallery 
            title="Spider Man"
            loading={this.state.loading}
            movies={this.state.spiderMan.slice(0, 6)} 
            comments={this.state.comments}
            />
            <Gallery 
            title="Matrix"
            loading={this.state.loading}
            movies={this.state.matrix.slice(0, 6)} 
            comments={this.state.comments}
            />
          </div>
        )}
      </Container>
    );
  }
}

export default Home;
