import css from './card.module.scss';
import {IconRemove} from "../../../shared/icons/icon-remove";
import {Button} from "../../../shared/button/button";

export const Card = (props) => {
    return (
        <div className={css.card}
            draggable={true}
            onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', props.id)
            }}
            onClick={() => props.onEdit()}>
            <span>id: {props.id}</span>
            <span>name: {props.name}</span>
            <Button className={css.buttonRemove}
                    onClick={(e) => {
                        e.stopPropagation();
                        props.onRemove();
                    }
                    }><IconRemove/></Button>
        </div>
    )
}