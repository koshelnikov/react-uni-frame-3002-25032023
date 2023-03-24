import {useState} from "react";

export const CardDialog = (props) => {
    const [name, setName] = useState(props.name ?? '');
    return (
        <div>
            <input value={name}
                   onChange={(e) => setName(e.target.value)} />
            <div>
                <button onClick={() => props.onSave(props.id, name)}>Save</button>
                <button onClick={() => props.onClose()}>Close</button>
            </div>
        </div>
    )
}