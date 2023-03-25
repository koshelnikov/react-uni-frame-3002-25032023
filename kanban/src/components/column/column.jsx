import {Card} from "./card/card";
import css from './column.module.scss';

export const Column = (props) => {
    return (
        <div className={css.column}
             onDragOver={(e) => e.preventDefault()}
             onDrop={(e) => {
                 props.onCardMoved(+e.dataTransfer.getData('text/plain'))
             }}
        >
            <div><span>{props.name}</span></div>
            {
                props.cards.map((card) => {
                    return <Card
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        onEdit={(id) => props.onCardEdited(id)}
                        onMove={(id) => props.onCardMoved(id)}
                        onRemove={(id) => props.onCardRemoved(id) }/>
                })
            }
            <div>
                <button onClick={() => props.onCardAdded()}>Add Card</button>
            </div>
        </div>
    )
}