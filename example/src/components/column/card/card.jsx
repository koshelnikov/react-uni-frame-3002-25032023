import css from './card.module.scss';

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
        </div>
    )
}