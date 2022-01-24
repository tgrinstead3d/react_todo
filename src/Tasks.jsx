import Column from "./components/Column";
import AddTask from "./components/AddTask";
import "./Tasks.css";
import { useState } from 'react';

function Tasks() {
    const [newTasks, setNewTasks] = useState([]);
    // const [inProgressTasks, setInProgressTasks] = useState([]);
    // const [completedTasks, setCompletedTasks] = useState([]);

    const addEntryToNewTasks = task => {
        const tasks = [...newTasks];
        tasks.push(task);
        setNewTasks(tasks);
        console.log('Submitted to new tasks');
    };

    // const moveTask = task => {
    //     const inProgressArray = [...inProgressTasks];
    //     newTasks.filter(task.id);
    //     inProgressArray.push(task.id);
    //     setInProgressTasks(inProgressArray);
    //     console.log('Submitted to in progress tasks');
    // }

    // const addEntryToCompletedTasks = task => {
    //     const completedArray = [...completedTasks];
    //     completedArray.push(task);
    //     setCompletedTasks(completedArray);
    //     console.log('Submitted to completed tasks');
    // }

    return (
        <div className="TasksWrapper">
            <div>
                <h1>Task Tracker</h1>
                <AddTask addTask={addEntryToNewTasks}/>
                <div className="ColumnDiv">
                    <Column tasks={newTasks}/>
                    {/*<Column tasks={inProgressTasks}/>*/}
                    {/*<Column tasks={completedTasks}/>*/}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
