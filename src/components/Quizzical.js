import { Container, Image } from "react-bootstrap";

const Quizzical = () => {
    return (
<Container className="quizical my-5 text-dark">
<div className="quizical-container">
    <div className="text-center mb-5">
        <h1 className="fw-bold fs-2">Quizzical</h1>
        <p className="text-muted lead">create a quiz app based on quiz-api using react</p>
    </div>
    <div className="mb-5">
        <div className="links">
            <a href="https://quizzical-react-app.herokuapp.com" className="link-text text-decoration-none text-dark d-block p-1">Website</a>
            <a href="https://github.com/hishamkhattab/Quizzical-App" className="link-text text-decoration-none text-dark d-block p-1">Git-hub Repo</a>
        </div>
        <div className="tech ms-2">
        <p className="text-muted lead mb-0">Project Built with:</p>
            <ul>
                <li>React Js</li>
            </ul>
        </div>
    </div>
</div>
<div className="d-flex align-items-center">
    <div className="justify-content-start">
        <p>A very simple quiz-application that uses (Trivia-API) to get the questions.</p>
    </div>
    <div className="justify-content-end">
<Image src="/image/Quizical/quiz.png" alt="quiz" fluid/>
    </div>
</div>

<div className="feature mt-3 bg-light">
    <h5 className="text-center fw-bold text-capitalize">Choose the category and the diffeculty</h5>
    <div className="d-flex flex-row-reverse align-items-center">
        <div className="feature-text">
            <p>Before starting you can choose the category you like from varius options, also you can choose the diffeculty you want the quiz to be.</p>
        </div>
        <div className="image-container d-flex flex-column align-items-center">
            <Image src="/image/Quizical/front.png" alt="front"  fluid/>
        </div>
    </div>
</div>

    
<div className="feature mt-3 bg-light">
    <h5 className="text-center fw-bold text-capitalize">Complete the quiz</h5>
    <div className="d-flex flex-row-reverse align-items-center">
        <div className="feature-text">
                <p>When completing the quiz, the app will show you the right answeres, and the answer you picked.</p>
            </div>
        <div className="image-container">
            <Image src="/image/Quizical/completed.png" alt="completed" fluid/>
        </div>
    </div>
</div>

<div className="feature mt-3">
    <h5 className="text-center fw-bold text-capitalize">Raise an error if you didn't completed it</h5>
    <div className="d-flex align-items-center">
        <div className="feature-text">
                <p>You must answere the 5 quistions before completing the quiz.</p>
            </div>
        <div className="image-container">
            <Image src="/image/Quizical/not-completed.png" alt="not-completed" fluid/>
        </div>
    </div>
</div>
</Container>
    );
}
 
export default Quizzical;

