import { useParams } from "react-router-dom";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Quizzical from "../components/Quizzical";
import Tenzies from "../components/Tenzies";
import TODO from "../components/TODO";
import WeatherApp from "../components/WeatherApp";
const ProjectPage = () => {
    const { project } = useParams()


    return (
        <>
            <Header/>
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