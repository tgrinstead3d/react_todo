import Card from "./Card";
import '../Column.css';

function Column({tasks}) {
    return (
        <div className="Column">
            <h1>I'm a Column!</h1>
            {tasks.map(task => <Card key={task.id} task={task} />)}
        </div>
    );
}

export default Column;
