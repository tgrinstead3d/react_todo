import Card from "./Card";
import '../Card.css';

function Column({tasks}) {
    return (
        <div className="Column">
            <h1>I'm a Column!</h1>
            {tasks.map(task => <Card task={task} />)}
        </div>
    );
}

export default Column;
