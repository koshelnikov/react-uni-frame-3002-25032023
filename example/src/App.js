import './App.css';
import {Layout} from "./components/layout/layout";
import {useState} from "react";
import {CardDialog} from "./components/card-dialog/card-dialog";

function App() {
    const [openedTaskId, setOpenedTaskId] = useState();
    const [columns, setColumns] = useState([
        {id: 'TODO', name: 'TODO'},
        {id: 'IN_PROGRESS', name: 'In Progress'}
    ])
    const [tasks, setTasks] = useState([]);
    const [taskCardWindowOpen, setTaskCardWindowOpen] = useState(false);
    const [columnId, setColumnId] = useState('');

    const getNextTaskId = () => {
        const values = [].concat(...tasks.map((task) => task.id))
        return 1 + (values.length === 0
            ? 0
            : values.reduce((val, cur) => Math.max(val, cur)))
    }

    const getTaskNameById = (id) => {
        const task = tasks.find((task) => task.id === id);
        return task ? task.name : ''
    }

    return (
        <div className="App">
            <Layout columns={columns}
                    tasks={tasks}
                    onEditTask={(id) => {
                        setOpenedTaskId(id);
                        setTaskCardWindowOpen(true);
                    }}
                    onAddTask={(columnId) => {
                        setColumnId(columnId);
                        setTaskCardWindowOpen(true)
                    }}/>

            {taskCardWindowOpen &&

            <CardDialog
                id={openedTaskId}
                name={getTaskNameById(openedTaskId)}
                onSave={(id, name) => {
                    if (id) {
                        const task = tasks.find((task) => task.id === id);
                        console.log(task);
                        task.name = name;
                    } else {
                        tasks.push({id: getNextTaskId(), name, columnId: columnId});
                    }
                    setTasks([...tasks]);
                    setTaskCardWindowOpen(false);
                }}
                onClose={() => {
                    setTaskCardWindowOpen(false);
                    setOpenedTaskId(undefined);
                }}
            />}
        </div>
    );
}

export default App;
