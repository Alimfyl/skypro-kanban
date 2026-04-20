import Card from "../Card/Card";

function Column(props) {
    return (
        <div className="main__column">
							<div className="column__title">
								<p>{props.title}</p>
							</div>
							<div className="cards">
								<Card />
							</div>
						</div>
    )
}
export default Column