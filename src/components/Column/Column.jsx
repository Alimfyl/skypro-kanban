import * as S from "./Column.styled";
import Card from "../Card/Card";

function Column( {title, cardList} ) {
    return (
        <S.MainColumn>
							<S.ColumnTitle>
								<p>{title}</p>
							</S.ColumnTitle>
							<Cards>
								{cardList.map((card) => (
									<Card 
									key={card.id}
									theme={card.theme}
									title={card.title}
									date={card.date}
									/>
								))
								}
								
							</Cards>
						</S.MainColumn>
    )
}
export default Column