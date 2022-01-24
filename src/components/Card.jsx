// import {useState} from "react";

function Card({task, moveToNext}) {
    return (
        <div className="TaskCard">
            <h4>{task.name}</h4>
            <p>{task.date}</p>
            <button onClick={moveToNext}>Move Task</button>
        </div>
    );
}

export default Card;
