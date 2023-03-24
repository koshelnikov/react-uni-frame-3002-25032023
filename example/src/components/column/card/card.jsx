export const Card = (props) => {
    return (
        <div onClick={() => props.onEdit()}>
            <span>id: {props.id}</span>
            <span>name: {props.name}</span>
        </div>
    )
}