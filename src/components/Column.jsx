import Card from "./Card";
import '../Column.css';

function Column({tasks, moveTask, title, completeTask, removeTasks}) {
    return (
        <div className="Column">
            <h1>{title}</h1>
            {tasks.map(task => <Card key={task.id} task={task} moveTask={moveTask} completeTask={completeTask} removeTask={removeTasks}/>)}
        </div>
    );
}

export default Column;
