import {Button} from "../../../shared/button/button";
import {IconRemove} from "../../../shared/icons/icon-remove";
import css from './card.module.scss';

export const Card = (props) => {
    return (
        <div className={css.card}
             draggable={true}
             onDragStart={(e) => {
                 e.dataTransfer.setData('text/plain', props.id)
             }}
             onClick={(e) => {
                 props.onEdit(props.id);
             }}
        >
            <span>{props.name}</span>
            <Button className={css.buttonRemove}
                    onClick={(e) => {
                        props.onRemove(props.id);
                        e.stopPropagation();
                    }}
            >
                <IconRemove/>
            </Button>
        </div>
    )
}