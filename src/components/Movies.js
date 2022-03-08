import { Container, Image } from "react-bootstrap";

const Movies = () => {
    return (
        <Container className="movie my-5 text-dark">
            <div className="movie-container">
                <div className="text-center mb-5">
                    <h1 className="fw-bold fs-2">Movies and Tv show</h1>
                    <p className="text-muted lead">creating a movie data-base clone as imdb by using tmdb api with react</p>
                </div>
                <div className="mb-5">
                    <div className="links">
                        <a href="https://netflex-5a669.web.app" className="link-text text-decoration-none text-dark d-block p-1">Website</a>
                        <a href="https://github.com/hishamkhattab/Movies_TV_DB" className="link-text text-decoration-none text-dark d-block p-1">Git-hub Repo</a>
                    </div>
                    <div className="tech ms-2">
                        <p className="text-muted lead mb-0">Project Built with:</p>
                        <ul>
                            <li>React Js</li>
                            <li>React Route</li>
                            <li>Styled component</li>
                            <li>Firebase Auth</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="justify-content-start">
                    <p>This application started as an attempt to clone Netflix homepage, put it growes mush wider. This application uses React, Firebase & styled components. All data are fetched using (themoviedb API). There are multiple pages in this application, some of them are protected with auth listener. I used compound components (this project started when I tried to learn about compound component actully).</p>
                </div>
                <div className="justify-content-end">
            <Image src="/image/moviedb/front.png"  alt="front" fluid/>
                </div>
            </div>
            
            <div className="feature mt-3 bg-light">
                <h5 className="text-center fw-bold text-capitalize">sign-up with firebase auth.</h5>
                <div className="d-flex flex-row-reverse align-items-center">
                    <div className="feature-text">
                        <p>The application is portected, so you need to sign-up with your email and your password so you can browse the app.</p>
                    </div>
                    <div className="image-container d-flex flex-column align-items-center">
                        <Image width={"75%"} className='my-1' src="/image/moviedb/sign-in.png" alt="sign-up" fluid/>
                        <Image width={"75%"} src="/image/moviedb/sign-up.png" alt="sign-in" fluid/>
                    </div>
                </div>
            </div>

            <div className="feature mt-3">
                <h5 className="text-center fw-bold text-capitalize">discover the new movies/tv-shows newly released.</h5>
                <div className="d-flex align-items-center">
                    <div className="feature-text">
                            <p>The browse page has different categories that display movies and Tv shows. categories like netflix original, trending and mush more.</p>
                        </div>
                    <div className="image-container">
                        <Image src="/image/moviedb/browse.png" alt="browse" fluid/>
                    </div>
                </div>
            </div>

            <div className="feature mt-3 bg-light">
                <h5 className="text-center fw-bold text-capitalize">Read movies overviw.</h5>
                <div className="d-flex flex-row-reverse align-items-center">
                    <div className="feature-text">
                            <p>You can read the overview of any movie or tv-show by simply click on it.</p>
                        </div>
                    <div className="image-container">
                        <Image src="/image/moviedb/movie-details.png" alt="details" fluid/>
                    </div>
                </div>
            </div>

            <div className="feature mt-3">
                <h5 className="text-center fw-bold text-capitalize">If you like, you can go to the movie's page.</h5>
                <div className="d-flex align-items-center">
                    <div className="feature-text">
                            <p>Or if you want to know the cast / crew of that movie or tv-show you can go to the movie's page.</p>
                        </div>
                    <div className="image-container">
                        <Image src="/image/moviedb/movie-page.png" alt="move-page" fluid/>
                    </div>
                </div>
            </div>

            <div className="feature mt-3 bg-light">
                <h5 className="text-center fw-bold text-capitalize">You can even see the trailer</h5>
                <div className="d-flex flex-row-reverse align-items-center">
                    <div className="feature-text">
                            <p>you don't have to go to youtube page to see the trailer, it simply embedded inside the application.</p>
                        </div>
                    <div className="image-container">
                        <Image src="/image/moviedb/play.png" alt="play" fluid />
                    </div>
                </div>

            </div>
            <div className="feature mt-3">
                <h5 className="text-center fw-bold text-capitalize">You can see your favourate actor's movies</h5>
                <div className="d-flex flex-row-reverse align-items-center">
                    <div className="feature-text">
                            <p>You can go to your favouirate actor's/actress page to see more of his/her works.</p>
                        </div>
                    <div className="image-container">
                        <Image src="/image/moviedb/actor-page.png" alt="actor" fluid/>
                    </div>
                </div>
            </div>

            <p className="text-danger fs-6">There still alot of functionallity don't work. like (search, add to favouirate).</p>
        </Container>
    );
}
 
export default Movies;