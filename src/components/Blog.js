import { Container, Image } from "react-bootstrap";

const Blog = () => {
    return (
<Container className="blog my-5 text-dark">
<div className="blog-container">
    <div className="text-center mb-5">
        <h1 className="fw-bold fs-2">Blog Application</h1>
        <p className="text-muted lead">simply blog that is connected to the firebase that allows you to write your thoughts and to save them in secure place</p>
    </div>
    <div className="mb-5">
        <div className="links">
            <a href="https://github.com/hishamkhattab/my_blog" className="link-text text-decoration-none text-dark d-block p-1">Git-hub Repo</a>
        </div>
        <div className="tech ms-2">
            <p className="text-muted lead mb-0">Project Built with:</p>
            <ul>
                <li>React Js</li>
                <li>React Route</li>
                <li>*Bootstrap 5</li>
                <li>Firebase Database</li>
            </ul>
        </div>
    </div>
</div>
<div className="d-flex align-items-center">
    <div className="justify-content-start">
        <p>A blog application that uses React and Firesbase database to save your blogs. The app helps you write and save your knowledge, experiences or stories. create your own unique blog.</p>
    </div>
    <div className="justify-content-end">
<Image src="/image/my-blog/front.png"  alt="front" fluid/>
    </div>
</div>

<div className="feature mt-3 bg-light">
    <h5 className="text-center fw-bold text-capitalize">Create your blog</h5>
    <div className="d-flex flex-row-reverse align-items-center">
        <div className="feature-text">
            <p>Simple way to create your own blog.</p>
        </div>
        <div className="image-container d-flex flex-column align-items-center">
            <Image src="/image/my-blog/create.png" alt="create" fluid/>
        </div>
    </div>
</div>

    
<div className="feature mt-3 bg-light">
    <h5 className="text-center fw-bold text-capitalize">display your blog</h5>
    <div className="d-flex flex-row-reverse align-items-center">
        <div className="feature-text">
                <p>Display your blog.</p>
            </div>
        <div className="image-container">
            <Image src="/image/my-blog/display.png" alt="display" fluid/>
        </div>
    </div>
</div>

<div className="feature mt-3">
    <h5 className="text-center fw-bold text-capitalize">Edit your old blog.</h5>
    <div className="d-flex align-items-center">
        <div className="feature-text">
                <p>Simple way for you to edit your blog.</p>
            </div>
        <div className="image-container">
            <Image src="/image/my-blog/edit.png" alt="edit" fluid/>
        </div>
    </div>
</div>
</Container>
    );
}
 
export default Blog;

