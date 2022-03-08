import { Container, Image } from "react-bootstrap";

const WeatherApp = () => {
    return (
<Container className="weather my-5 text-dark">
<div className="weather-container">
    <div className="text-center mb-5">
        <h1 className="fw-bold fs-2">Weather Application</h1>
        <p className="text-muted lead">small and simple weather application</p>
    </div>
    <div className="mb-5">
        <div className="links">
            <a href="https://github.com/hishamkhattab/Babelon_weatherApp" className="link-text text-decoration-none text-dark d-block p-1">Git-hub Repo</a>
        </div>
        <div className="tech ms-2">
        <p className="text-muted lead mb-0">Project Built with:</p>
            <ul>
                <li>WeatherCast API</li>
                <li>Async JS</li>
            </ul>
        </div>
    </div>
</div>
<div className="d-flex align-items-center">
    <div className="justify-content-start">
        <p>Using (weatherAPI) to fetch data of the city's weather.</p>
    </div>
    <div className="justify-content-end">
<Image src="/image/weather/front.png" alt="front" fluid/>
    </div>
</div>

<div className="feature mt-3 bg-light">
    <h5 className="text-center fw-bold text-capitalize">Enter any city to see the temp, responsive to time (day/night)</h5>
    <div className="d-flex flex-row-reverse align-items-center">
        <div className="feature-text">
            <p>When entering the city, the response will defere acording to the time.</p>
        </div>
        <div className="image-container d-flex flex-column align-items-center">
            <Image width={"75%"} className='my-1' src="/image/weather/first-page.png" alt="first" fluid/>
            <Image width={"75%"} src="/image/weather/day.png" alt="day" fluid/>
        </div>
    </div>
</div>

<div className="feature mt-3">
    <h5 className="text-center fw-bold text-capitalize">See more details</h5>
    <div className="d-flex align-items-center">
        <div className="feature-text">
                <p>You can see the main details of the weather, or expand to see more details</p>
            </div>
        <div className="image-container">
            <Image src="/image/weather/more-details.png" alt="more" fluid/>
        </div>
    </div>
    </div>
    

</Container>
    );
}
 
export default WeatherApp;

