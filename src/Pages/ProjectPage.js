import { useParams } from "react-router-dom";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Quizzical from "../components/Quizzical";
import Tenzies from "../components/Tenzies";
import TODO from "../components/TODO";
import WeatherApp from "../components/WeatherApp";
import data from "../data"
const ProjectPage = () => {
    const { project } = useParams()


    const projectDetails = () => {
        const [details] = data.filter(item => item.title === project);
        
        return (
            <div className="container mt-4 d-flex flex-column">
                
                <h1 className="align-self-center">{details.title}</h1>
                <h1 className="align-self-center">{details.concept}</h1>
                <a href={details.website} target='_blank' rel="noreferrer">website</a>
                <a href={details.repo} target='_blank' rel="noreferrer">Git-hub repo</a>
                
            </div>
        )
    }

    
    return (
        <>
            <Header/>
            {/* {projectDetails()} */}
            {project === "Movie-DB" && <Movies/>}
            {project === "My-Blog" && <Blog/>}
            {project === "To-Do" && <TODO/>}
            {project === "Tenzies" && <Tenzies/>}
            {project === "Weather-App" && <WeatherApp/>}
            {project === "Quizzical" && <Quizzical/>}
            <Footer/>
    </>
        );
}

export default ProjectPage;