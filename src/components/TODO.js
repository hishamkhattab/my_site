import { Container, Image } from "react-bootstrap";

const TODO = () => {
    return (
<Container className="todo my-5 text-dark">
<div className="todo-container">
    <div className="text-center mb-5">
        <h1 className="fw-bold fs-2">TO-DO Application</h1>
        <p className="text-muted lead">a really simply but effice to do list</p>
    </div>
    <div className="mb-5">
        <div className="links">
            <a href="https://github.com/hishamkhattab/ToDO_List" className="link-text text-decoration-none text-dark d-block p-1">Git-hub Repo</a>
        </div>
        <div className="tech ms-2">
            <p className="text-muted lead mb-0">Tech</p>
            <ul>
                <li>React JS</li>
            </ul>
        </div>
    </div>
</div>
<div className="d-flex align-items-center">
    <div className="justify-content-start">
        <p>Organize your thoughts and then start the action.</p>
    </div>
    <div className="justify-content-end">
<Image src="/image/to-do/front.png" alt="front"  fluid/>
    </div>
</div>

<div className="feature mt-3 bg-light">
    <h5 className="text-center fw-bold text-capitalize">Add anything to your list</h5>
    <div className="d-flex flex-row-reverse align-items-center">
        <div className="feature-text">
            <p>Add anything that you plan to do.</p>
        </div>
        <div className="image-container d-flex flex-column align-items-center">
            <Image width={"75%"} className='my-1' src="/image/to-do/add-entry.png" alt="add" fluid/>
            <Image width={"75%"} src="/image/to-do/add-entry2.png" alt="add" fluid/>
        </div>
    </div>
</div>

<div className="feature mt-3">
    <h5 className="text-center fw-bold text-capitalize">Edit</h5>
    <div className="d-flex align-items-center">
        <div className="feature-text">
                <p>Change in plan ! No worries, it is simple to edit.</p>
            </div>
            <div className="image-container d-flex flex-column align-items-center">
            <Image width={"75%"} className='my-1' src="/image/to-do/edit.png" alt="edit" fluid/>
            <Image width={"75%"} src="/image/to-do/edited.png" alt="edited" fluid/>
        </div>
    </div>
    </div>
    
<div className="feature mt-3">
    <h5 className="text-center fw-bold text-capitalize">remove anything from your list</h5>
    <div className="d-flex align-items-center">
        <div className="feature-text">
                <p>When Finishing ypur task, remove it from the list.</p>
            </div>
            <div className="image-container d-flex flex-column align-items-center">
            <Image src="/image/to-do/clear-entry.png" alt="clear-entry" fluid/>
        </div>
    </div>
    </div>
    
<div className="feature mt-3">
    <h5 className="text-center fw-bold text-capitalize">remove all</h5>
    <div className="d-flex align-items-center">
        <div className="feature-text">
                <p>You finished all, then remove all.</p>
            </div>
            <div className="image-container d-flex flex-column align-items-center">
            <Image src="/image/to-do/clear-all.png" alt="clear-all" fluid/>
        </div>
    </div>
</div>
    

</Container>
    );
}
 
export default TODO;

