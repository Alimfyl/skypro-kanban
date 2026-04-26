import Card from "../Card/Card";

function Column( {title, cardList} ) {
    return (
        <div className="main__column column">
							<div className="column__title">
								<p>{title}</p>
							</div>
							<div className="cards">
								{cardList
								.filter((card) => card.status === title)
								.map((card) => (
									<Card 
									key={card.id}
									theme={card.theme}
									category={card.theme}
									title={card.title}
									date={card.date}
									/>
								))
								}
								
							</div>
						</div>
    )
}
export default Column