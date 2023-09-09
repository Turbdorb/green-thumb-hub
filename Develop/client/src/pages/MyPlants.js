import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PlantsCard } from "./PlantsCard";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Plants = () => {

  const plants = [
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name ",
      description: "Plant Description",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="plants" id="plants">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Plants</h2>
                <p>My Garden</p>
                <Tab.Container id="plant-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Outside</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Inside</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          plants.map((plants, index) => {
                            return (
                              <PlantsCard
                                key={index}
                                {...plants}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>shb j sjd</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> inventore de.</p>
                    </Tab.Pane>
                    </Tab.Content>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
