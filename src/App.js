import './App.css';
import {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            newTask: "",
            tasks: []
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

    addTask(e) {
        const newTask = {
            id: 1 + Math.random(),
            value: this.state.newTask.slice()
        };

        const tasks = [...this.state.tasks];

        tasks.push(newTask);

        this.setState({
            tasks,
            newTask: ""
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


    render() {
        return (
            <div className="AppBackground">
                <header className="Header">
                    <h1>Task Tracker</h1>
                </header>
                <main className="BodyWrapper">
                    <div className="TaskCount">
                        <h5>You have {this.state.tasks.length} un-started task(s)</h5>
                    </div>
                    <form className="NewTaskForm" onSubmit={this.submitPrevent}>
                        <div className="TaskFormHeader">
                            <h2>Add A New Task</h2>
                        </div>
                        <div className="NewTaskInputs">
                            <input type="text" placeholder="Enter a title" className="FormTitle" aria-label="Title"
                                   value={this.state.newTask}
                                   onChange={e => this.updateInput("newTask", e.target.value)}/>
                            {/*<textarea placeholder="Add a description" aria-label="Description"/>*/}
                        <button type="submit" className="TaskSubmitButton" onClick={() => this.addTask()}>Create New
                            Task
                        </button>
                        </div>
                    </form>
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
                                            <button onClick={() => this.deleteTask(task.id)} className="Delete">X</button>
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
        )
    }
}


export default App;
