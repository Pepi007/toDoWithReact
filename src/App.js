import "./App.css";
import { useState } from 'react'
import { Task } from './Task'

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [completed, setCompleted] = useState(false);

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        }
        setTodoList([...todoList, task])
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id))
    }

    const completeTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: true };
                } else {
                    return task;
                }
            })
        )
    }

    return (
        <div className="App" id="card">
            <div className="addTask">
                <input placeholder="Hacer la cama" onChange={handleChange} type="text" />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask} completed={task.completed} />
                })}
            </div>
        </div>
    )
}

export default App;
