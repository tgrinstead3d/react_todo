import { useState } from 'react';

function AddTask({addTask}) {
    const [task, setTask] = useState('');
    // const [date, setDate] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        addTask(task);
        e.target.reset();
    }

    return (
        <div className="TaskWrapper">
            <form className="NewTaskForm" onSubmit={submitForm}>
                <div className="TaskFormHeader">
                    <h2>Add A New Task</h2>
                </div>
                <div className="NewTaskInputs">
                    <input type="text" placeholder="Enter a title" className="FormTitle" aria-label="Title"
                           onChange={(event) => setTask(event.target.value)}/>
                    {/*<input type="date" placeholder="Set due date" className="FormDate" aria-label="Date"*/}
                    {/*       onChange={(event) => setDate(event.target.value)}/>*/}
                    <button type="submit" className="TaskSubmitButton">Create New Task</button>
                </div>
            </form>
        </div>
    );
}

export default AddTask;
