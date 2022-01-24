// import {useState} from "react";

function Card({task, moveTask, completeTask}) {
    return (
        <div className="TaskCard">
            <h4>{task.name}</h4>
            <p>{task.date}</p>
            <button onClick={() => moveTask(task)}>Move Task</button>
            <button onClick={() => completeTask(task)}>Done</button>
        </div>
    );
}

export default Card;
