import {Card} from "./card/card";

export const Column = (props) => {
    return (
        <div>
            <div><span>{props.name}</span></div>
            {props.tasks.map(
                (task) => {
                    return <Card key={task.id}
                                 id={task.id}
                                 name={task.name}
                                 onEdit={() => props.onEditTask(task.id)}
                    />
                })}
            <div>
                <button onClick={() => props.onAddTask()}>Add Task</button>
            </div>
        </div>
    )
}