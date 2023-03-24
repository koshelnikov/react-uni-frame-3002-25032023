import {Column} from "../column/column";
import css from './layout.module.scss';

export const Layout = (props) => {
    return (
        <div className={css.layout}>
            {
                props.columns.map((column) =>
                    <Column key={column.id}
                            name={column.name}
                            tasks={props.tasks.filter((task) => task.columnId === column.id)}
                            onMoveCard={(id) => props.onMoveTask(id, column.id)}
                            onEditCard={(id) => props.onEditTask(id)}
                            onAddCard={() => props.onAddTask(column.id)}
                            onCardRemove={(id) => props.onTaskRemove(id)}
                    />
                )
            }
        </div>
    )
}