import {Card} from "./card/card";
import css from './column.module.scss';

export const Column = (props) => {
    return (
        <div className={css.column}

             onDragOver={(e) => e.preventDefault()}
             onDrop={(e) => {
                 props.onMoveCard(+e.dataTransfer.getData('text/plain'))
             }
        }>
            <div><span>{props.name}</span></div>
            {props.tasks.map(
                (task) => {
                    return <Card key={task.id}
                                 id={task.id}
                                 name={task.name}
                                 onEdit={() => props.onEditCard(task.id)}
                                 onRemove={() => props.onCardRemove(task.id)}
                    />
                })}
            <div>
                <button onClick={() => props.onAddCard()}>Add Task</button>
            </div>
        </div>
    )
}