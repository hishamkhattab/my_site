import { Container, Image } from "react-bootstrap";

const Tenzies = () => {
    return ( 
<Container className="tenzies my-5 text-dark">
<div className="tenzies-container">
    <div className="text-center mb-5">
        <h1 className="fw-bold fs-2">Tenzies</h1>
        <p className="text-muted lead">based on tenzie game, six dices and unlimited times to throught, find out which one of you and your frinds can have matched dices faster</p>
    </div>
    <div className="mb-5">
        <div className="links">
            <a href="https://github.com/hishamkhattab/tenzies-game" className="link-text text-decoration-none text-dark d-block p-1">Git-hub Repo</a>
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
        <p>TENZI is the world's fastest dice game! Fast, fun, and engaging, TENZI is perfect for table top beginners and aficionados alike. Every player gets 10 dice. The object of the game is to roll the dice as fast as possible, the player who gets all dice on the same number is the winner.</p>
    </div>
    <div className="justify-content-end">
<Image src="/image/Tenzies/front.png" alt="front" fluid/>
    </div>
</div>

<div className="feature mt-3 bg-light">
    <h5 className="text-center fw-bold text-capitalize">Completed</h5>
    <div className="d-flex flex-row-reverse align-items-center">
        <div className="feature-text">
            <p>The player who gets all dice on the same number is the winner</p>
        </div>
        <div className="image-container d-flex flex-column align-items-center">
            <Image src="/image/Tenzies/completed.png" alt="completed"  fluid/>
        </div>
    </div>
</div>

<div className="feature mt-3">
    <h5 className="text-center fw-bold text-capitalize">Not completed</h5>
    <div className="d-flex align-items-center">
        <div className="feature-text">
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, doloribus!</p> */}
            </div>
        <div className="image-container">
            <Image src="/image/Tenzies/not-completed.png" alt="not-completed" fluid/>
        </div>
    </div>
    </div>
    
<div className="feature mt-3 bg-light">
    <h5 className="text-center fw-bold text-capitalize">Time</h5>
    <div className="d-flex flex-row-reverse align-items-center">
        <div className="feature-text">
                <p>After completing the game the app will show you the time it took you to finish the game.</p>
            </div>
        <div className="image-container">
            <Image src="/image/Tenzies/time.png" alt="time" fluid/>
        </div>
    </div>
</div>

</Container>
    );
}
 
export default Tenzies;

