
import * as S from "./Main.styled";
import { Container } from "../../App.styled";
import Column from "../Column/Column";
const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
]
function Main ( {cards = []} ) {
    return(
        <S.Main>
			<Container>
				<S.MainBlock>
					<MainContent>
                        {statusList.map((status) => (
                            <Column 
                        key={status}
                        title={status}
                        cardList={cards.filter((card) => card.status === status)}
                        />
                        ))}
						
					</MainContent>
				
				</S.MainBlock>
			</Container>
		</S.Main>
    )
}
export default Main