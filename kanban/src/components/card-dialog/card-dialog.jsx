import {useState} from "react";
import css from './card-dialog.module.scss'

export const CardDialog = (props) => {
    const [name, setName] = useState( props.card ? props.card.name : '');
    return (
        <div className={css.cardDialog}>
            <div className={css.cardBackdrop}/>
            <div className={css.cardDialogContainer}>
                <div className={css.cardDialogBody}>
                    <input value={name}
                           onChange={(e) => setName(e.target.value)} />
                    <div>
                        <button onClick={() => props.onSave(name)}>Save</button>
                        <button onClick={() => props.onClose()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}