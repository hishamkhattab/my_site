import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const HomePage = () => {
    return (
        <>
            <Header />
            <Container className='header-container'>
                <div className="page-header__container d-flex flex-column justify-content-center ps-5">
                    <div className="page-header__title container">
                        <h1>Hi, my <br />name is <span>Hisham</span>.</h1>
                        <div className="subtext text-light">
                        <p>I'm a <span>front-end develpoer</span> from cairo, Egypt.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <section className="bg-light mt-5">
                <Container>
                    <h2 className="text-dark fs-1 text-center">Projects</h2>

                    <Row className="my-5 align-items-center justify-content-center g-3">
                        {/* <div className="col-9 col-lg-4 text-center"> */}
                            <Card className="card border-0" style={{ width: '100%' }}>
                                <Card.Img src="image/moviedb/front.png" alt="moviedb" variant="top"/>
                                <Card.Body className="text-center py-4">
                                    <Card.Title>Movies and Tv shows</Card.Title>
                                    <Card.Text className="d-none d-lg-block text-muted">creating a movie data-base clone as imdb by using tmdb api with react</Card.Text>
                                    <Button variant="outline-dark">
                                        <Link to='/Movie-DB' className="text-decoration-none text-muted text-uppercase">Details</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        {/* </div> */}
                    

                    
                        <Card className="card border-0" style={{ width: '50%' }}>
                                <Card.Img src="image/weather/front.png" alt="weather" variant="top"/>
                                <Card.Body className="text-center py-4">
                                    <Card.Title>Weather-App</Card.Title>
                                    <Card.Text className="d-none d-lg-block text-muted">small and simple weather application using weathercast-api</Card.Text>
                                    <Button variant="outline-dark">
                                        <Link to='/Weather-App' className="text-decoration-none text-muted text-uppercase">Details</Link>
                                    </Button>
                                </Card.Body>
                        </Card>


                        <Card className="card border-0" style={{ width: '18rem' }}>
                                <Card.Img src="image/Quizical/front.png" alt="quizical" variant="top"/>
                                <Card.Body className="text-center py-4">
                                    <Card.Title>Quizzical</Card.Title>
                                    <Card.Text className="d-none d-lg-block text-muted">reate a quiz app based on quiz-api using react</Card.Text>
                                    <Button variant="outline-dark">
                                        <Link to='/Quizzical' className="text-decoration-none text-muted text-uppercase">Details</Link>
                                    </Button>
                                </Card.Body>
                        </Card>


                        <Card className="card border-0" style={{ width: '18rem' }}>
                                <Card.Img src="image/Tenzies/front.png" alt="Tenzies" variant="top"/>
                                <Card.Body className="text-center py-4">
                                    <Card.Title>Tenzies</Card.Title>
                                    <Card.Text className="d-none d-lg-block text-muted">based on tenzie game</Card.Text>
                                    <Button variant="outline-dark">
                                        <Link to='/Tenzies' className="text-decoration-none text-muted text-uppercase">Details</Link>
                                    </Button>
                                </Card.Body>
                        </Card>



                        <Card className="card border-0" style={{ width: '18rem' }}>
                                <Card.Img src="image/to-do/front.png" alt="To-Do" variant="top"/>
                                <Card.Body className="text-center py-4">
                                    <Card.Title>To Do</Card.Title>
                                    <Card.Text className="d-none d-lg-block text-muted">a really simply but effice to do list</Card.Text>
                                    <Button variant="outline-dark">
                                        <Link to='/To-Do' className="text-decoration-none text-muted text-uppercase">Details</Link>
                                    </Button>
                                </Card.Body>
                        </Card>

                        <Card className="card border-0" style={{ width: '100%' }}>
                                <Card.Img src="image/my-blog/front.png" alt="blog" variant="top"/>
                                <Card.Body className="text-center py-4">
                                    <Card.Title>Blog</Card.Title>
                                    <Card.Text className="d-none d-lg-block text-muted">simply blog that is connected to the firebase that allows you to write your thoughts and to save them in secure place</Card.Text>
                                    <Button variant="outline-dark">
                                        <Link to='/My-Blog' className="text-decoration-none text-muted text-uppercase">Details</Link>
                                    </Button>
                                </Card.Body>
                        </Card>

                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    );
}
 
export default HomePage;