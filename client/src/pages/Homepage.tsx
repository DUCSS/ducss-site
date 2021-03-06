import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import hamiltonEntrance from '../assets/images/hamilton.jpg';
import hamiltonDoor from '../assets/images/door.jpg';
import inaugural from '../assets/images/inaugural_lecture.jpg';
import jonRomeroLecture from '../assets/images/jon_romero_lecture.jpg';
import jonRomeroGroup from '../assets/images/jon_romero_group_photo.jpg';
import marioKartTourney from '../assets/images/mariokart_tournament.jpg';
import smashTournament from '../assets/images/smash_tournament.jpg';
import smashWeeklies from '../assets/images/smash.jpg';

const Homepage: React.FC = () => {
  return (
    <>
      <Jumbotron className="my-4 bg-ducss-dark text-white text-center">
        <h1>Dublin University Computer Science Society</h1>
        <hr className="my-4 bg-ducss-primary" />
        <p className="lead">A community in Trinity College Dublin.</p>
      </Jumbotron>
      <Row className="justify-content-center">
        <Col lg="4" md="6" className="mb-3">
          <Card className="h-100" border="ducss-primary">
            <Carousel>
              <Carousel.Item>
                <img
                  className="w-100"
                  src={hamiltonEntrance}
                  alt="Hamilton entrance"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src={hamiltonDoor}
                  alt="Hamilton door to DUCSS room"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="text-muted">Hamilton Room</Card.Title>
              <Card.Text>
                Visit the DUCSS room in Trinity&#39;s Hamilton building, where
                there&#39;s a TV connected to a variety of consoles, 5 gaming
                oriented PC&#39;s,and a well-stocked library of books on maths,
                games dev, hardware and general CS.
              </Card.Text>
              <Button
                variant="ducss-primary"
                href="https://goo.gl/maps/NTiuKXRv4NaQq6XF9"
                target="_blank"
              >
                Show On Map
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" className="mb-3">
          <Card className="h-100" border="ducss-primary">
            <Carousel>
              <Carousel.Item>
                <img
                  className="w-100"
                  src={inaugural}
                  alt="DUCSS inaugural lecture"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src={jonRomeroLecture}
                  alt="Jon Romero giving a lecture"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src={jonRomeroGroup}
                  alt="Jon Romero in DUCSS room"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="text-muted">
                Events and Competitions
              </Card.Title>
              <Card.Text>
                Collaborations with organisations such as Google, Microsoft, and
                many others allows DUCSS members to take part in coding
                competitions, tech talks, career/coding workshops, and drink!
                Follow DUCSS Facebook and Instagram for events, information, and
                regular updates.
              </Card.Text>
              <Button
                variant="ducss-primary"
                href="https://www.facebook.com/ducss.ie"
                target="_blank"
                className="mr-1"
              >
                Facebook
              </Button>
              <Button
                variant="ducss-primary"
                href="https://www.instagram.com/ducss_/"
                target="_blank"
                className="mr-1"
              >
                Instagram
              </Button>
              <Button
                variant="ducss-primary"
                href="https://discord.gg/NUZGYT4"
                target="_blank"
                className="mr-1"
              >
                Discord
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" className="mb-3">
          <Card className="h-100" border="ducss-primary">
            <Carousel>
              <Carousel.Item>
                <img
                  className="w-100"
                  src={marioKartTourney}
                  alt="Mario Kart tournament"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src={smashTournament}
                  alt="Smash tournament in the DUCSS room"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src={smashWeeklies}
                  alt="Smash weeklies in the DUCSS room"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="text-muted">
                Games, Tournaments, and eSports
              </Card.Title>
              <Card.Text>
                DUCSS have multiple active gaming communities whos interests
                vary from competition to just de-stressing and enjoying a match
                after a lecture, the most promintent partakers include League,
                Smash and FIFA players. The PCs with up to date components
                allows anyone to download a game of their choice.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
