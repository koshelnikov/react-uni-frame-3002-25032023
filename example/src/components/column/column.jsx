import {Card} from "./card/card";
import css from './column.module.scss';

export const Column = (props) => {
    return (
        <div className={css.column}

             onDragOver={(e) => e.preventDefault()}
             onDrop={(e) => {
                 props.onMoveTask(+e.dataTransfer.getData('text/plain'))
             }
        }>
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