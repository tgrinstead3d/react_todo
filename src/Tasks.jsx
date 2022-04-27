import Column from "./components/Column";
import AddTask from "./components/AddTask";
import "./Tasks.css";
import { useState } from 'react';

function Tasks() {
    const [newTasks, setNewTasks] = useState([]);
    const [currentTasks, setCurrentTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const addEntryToNewTasks = task => {
        const tasks = [...newTasks];
        tasks.push(task);
        setNewTasks(tasks);
    };
    const toCurrentTasks = task => {
        setNewTasks([...newTasks].filter(current => current.id !== task.id))
        setCompletedTasks([...completedTasks].filter(current => current.id !== task.id))
        currentTasks.push(task);

    };
    const toCompletedTasks = task => {
        setNewTasks([...newTasks].filter(current => current.id !== task.id))
        setCurrentTasks([...currentTasks].filter(current => current.id !== task.id))
        completedTasks.push(task);
        setCompletedTasks(completedTasks);
    };

    return (
        <div className="TasksWrapper">
            <div>
                <h1>Task Tracker</h1>
                <AddTask addTask={addEntryToNewTasks}/>
                <div className="ColumnDiv">
                    <Column title={'New Tasks'} tasks={newTasks} moveTask={toCurrentTasks} completeTask={toCompletedTasks}/>
                    <Column title={'Current Tasks'} tasks={currentTasks} moveTask={toCompletedTasks} completeTask={toCompletedTasks}/>
                    <Column title={'Completed Tasks'} tasks={completedTasks} moveTask={toCurrentTasks}/>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
