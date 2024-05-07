export const Task = (props) => {
    return <div className="container">
        <h1  style={{color: props.completed ? 'green' : 'white'}} className="task">{props.taskName}</h1>
        <button id="botonTarea" onClick={() => props.deleteTask(props.id)}>X</button>
        <button id="botonTareaComplete" onClick={() => props.completeTask(props.id)}>Complete</button>
    </div>
}