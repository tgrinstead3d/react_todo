import './App.css';
import {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            newTask: "",
            tasks: [],
            // progTask: [],
            // completed: []
        }
    }
    setState(state) {
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);
    }
    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }
// Newly added tasks
    addTask(e) {
        const newTask = {
            id: 1 + Math.random(),
            value: this.state.newTask.slice()
        };
        const tasks = [...this.state.tasks];
        tasks.push(newTask);
        this.setState({
            tasks,
            newTask: "",
        });
        e.preventDefault();
    };
    submitPrevent(e) {
        console.log('Submitted!')
        e.preventDefault();
    };
    deleteTask(id) {
        const tasks = [...this.state.tasks];

        const updatedTasks = tasks.filter(tasks => tasks.id !== id);

        this.setState({tasks: updatedTasks})
    };
    // In Progress tasks
    // Completed tasks

    render() {
        return (
            <div className="AppWrapper">
                <h1 className="AppTitle">Task Tracker</h1>
                <>
                    <form className="NewTaskForm" onSubmit={this.submitPrevent}>
                        <div className="TaskFormHeader">
                            <h2>Add A New Task</h2>
                        </div>
                        <div className="NewTaskInputs">
                            <input type="text" placeholder="Enter a title" className="FormTitle" aria-label="Title"
                                   value={this.state.newTask}
                                   onChange={e => this.updateInput("newTask", e.target.value)}/>
                            {/*<textarea placeholder="Add a description" aria-label="Description"/>*/}
                            <button type="submit" className="TaskSubmitButton" onClick={() => this.addTask()}>Create
                                New
                                Task
                            </button>
                        </div>
                    </form>
                </>
                <div className="AppBackground">
                    <div className="TodoColumn">
                        <header className="Header">
                            <h1>Tasks To Do</h1>
                        </header>
                        <main className="BodyWrapper">
                            <div className="TaskCount">
                                <h5>You have {this.state.tasks.length} new tasks</h5>
                            </div>
                            <div className="TaskCard">
                                <ul>
                                    {this.state.tasks.map(task => {
                                        return (
                                            <li key={task.id} className="ListTitle">
                                                <div className="ListLeft">
                                                    {task.value}
                                                </div>
                                                <div className="ListRight">
                                                    {/*<button>Edit</button>*/}
                                                    <button onClick={() => this.deleteTask(task.id)}
                                                            className="Delete">X
                                                    </button>
                                                    {/*<button>Left</button>*/}
                                                    {/*<button onClick={() => this.task(task.id)}>Right</button>*/}
                                                </div>
                                                <div className="TaskCompleteButton">
                                                    {/*<button>Mark Completed</button>*/}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </main>
                    </div>
                    <div className="InProgressColumn">
                        <header className="Header">
                            <h1>In progress</h1>
                        </header>
                        <main className="BodyWrapper">
                            <div className="TaskCount">
                                <h5>You have {this.state.tasks.length} tasks in progress</h5>
                            </div>
                            <div className="TaskCard">
                                <ul>
                                    {this.state.tasks.map(task => {
                                        return (
                                            <li key={task.id} className="ListTitle">
                                                <div className="ListLeft">
                                                    {task.value}
                                                </div>
                                                <div className="ListRight">
                                                    {/*<button>Edit</button>*/}
                                                    <button onClick={() => this.deleteTask(task.id)}
                                                            className="Delete">X
                                                    </button>
                                                    {/*<button>Left</button>*/}
                                                    {/*<button>Right</button>*/}
                                                </div>
                                                <div className="TaskCompleteButton">
                                                    {/*<button>Mark Completed</button>*/}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </main>
                    </div>
                    <div className="CompletedColumn">
                        <header className="Header">
                            <h1>Completed Tasks</h1>
                        </header>
                        <main className="BodyWrapper">
                            <div className="TaskCount">
                                <h5>You have {this.state.tasks.length} completed tasks</h5>
                            </div>
                            <div className="TaskCard">
                                <ul>
                                    {this.state.tasks.map(task => {
                                        return (
                                            <li key={task.id} className="ListTitle">
                                                <div className="ListLeft">
                                                    {task.value}
                                                </div>
                                                <div className="ListRight">
                                                    {/*<button>Edit</button>*/}
                                                    <button onClick={() => this.deleteTask(task.id)}
                                                            className="Delete">X
                                                    </button>
                                                    {/*<button>Left</button>*/}
                                                    {/*<button>Right</button>*/}
                                                </div>
                                                <div className="TaskCompleteButton">
                                                    {/*<button>Mark Completed</button>*/}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
