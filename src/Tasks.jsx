import Column from "./components/Column";
import AddTask from "./components/AddTask";
import "./Tasks.css";
import { useState } from 'react';

function Tasks() {
    const [newTasks, setNewTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const addEntryToNewTasks = task => {
        const tasks = [...newTasks];
        tasks.push(task);
        setNewTasks(tasks);
        console.log('Submitted to new tasks');
        console.log(task);
        console.log(newTasks);
    };

    const moveTask = task => {
        const tasks = [...inProgressTasks];
        setNewTasks([...newTasks].filter(current => current.id !== task.id));
        tasks.push(task);
        setInProgressTasks(tasks);
        console.log('Submitted to in progress tasks');
        console.log(task);
        console.log(inProgressTasks);
    }

    const completeTask = task => {
        const tasks = [...completedTasks];
        setInProgressTasks([...inProgressTasks].filter(current => current.id !== task.id));
        tasks.push(task);
        setCompletedTasks(tasks);
        console.log('Submitted to completed tasks');
        console.log(task);
        console.log(completedTasks);
    }

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
                    <Column title={'New Tasks'} tasks={newTasks} moveTask={moveTask}/>
                    <Column title={'In Progress Tasks'} tasks={inProgressTasks} moveTask={moveTask} completeTask={completeTask}/>
                    <Column title={'Completed Tasks'} tasks={completedTasks} moveTask={moveTask} completeTask={completeTask}/>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
