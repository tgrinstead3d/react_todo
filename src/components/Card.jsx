import '../Card.css'

function Card({task, moveTask, completeTask, removeTasks}) {
    return (
        <div className="TaskCard">
            <div className="TitleDiv">
                <h3 className="TitleText">Title:</h3>
                <h4 className="Title">{task.name}</h4>
            </div>
            <div className="DueDiv">
                <span className="DueText">Due: </span><p className="DateText">{task.date}</p>
            </div>
            <div className="Buttons">
                <button onClick={() => moveTask(task)}>Move Task</button>
                <button onClick={() => completeTask(task)}>Done</button>
                <button onClick={() => removeTasks(task)}>Delete</button>
            </div>
        </div>
    );
}

export default Card;
