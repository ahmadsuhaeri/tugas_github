import { Card, Col, Container, Row, Image } from "react-bootstrap";

const Trending = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/aakjsdahdadhaggdhjag.jpeg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Xmen Days of Future Past</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/nsdnam,dnabdba.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>It Begins Dunc</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/asgdagdjhadgajgdjahdhjagd.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Everything Everywhere all at once</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/kashdkjahdjkahdjahsajkhdadhad.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Joaquin Phoenix Joker</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/jhhjkhajkhfjkahfjakhsakhfa.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Avengers Endgame</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/ajshdjkahdkjahdkajhdlkajsdlaj.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Man Of Steel</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/asjkldjaldjald;ajdk;lajd;jadadjhakh.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Ant-Man</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/jhdsfjkhsfhsfljkhsfjkhskjflsh.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Spiderman No Way Home</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/ljlkjdfkldjflksjklfjsfjsjskhfjskhf.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>The Dark Knight</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Trending;
