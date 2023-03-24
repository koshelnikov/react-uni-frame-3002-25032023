import {Column} from "../column/column";

export const Layout = (props) => {
    return (
        <div>
            {
                props.columns.map((column) =>
                    <Column key={column.id}
                            name={column.name}
                            tasks={props.tasks.filter((task) => task.columnId === column.id)}
                            onEditTask={(id) => props.onEditTask(id)}
                            onAddTask={() => props.onAddTask(column.id)} />
                )
            }
        </div>
    )
}