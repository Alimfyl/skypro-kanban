import Card from "../Card/Card";

function Column(props) {
    return (
        <div className="main__column column">
							<div className="column__title">
								<p>{props.title}</p>
							</div>
							<div className="cards">
								<Card theme="_orange" category="Web Design" title="Название задачи" date="30.10.23" />
								<Card theme="_purple" category="Copywriting" title="Название задачи" date="30.10.23" />
								<Card theme="_green" category="Research" title="Название задачи" date="30.10.23" />
							</div>
						</div>
    )
}
export default Column