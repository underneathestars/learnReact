import "./cards.css"

function Card(props) {
    const title = props.title;
    const desc = props.desc;
        return (
            <div className="card">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        );
}

export default Card;