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
                            onMoveTask={(id) => props.onMoveTask(id, column.id)}
                            onEditTask={(id) => props.onEditTask(id)}
                            onAddTask={() => props.onAddTask(column.id)} />
                )
            }
        </div>
    )
}