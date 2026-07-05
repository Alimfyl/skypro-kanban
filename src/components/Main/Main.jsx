import * as S from "./Main.styled";
import { Container } from "../../CommonStyles.styled";
import Column from "../Column/Column";

import { useTasks } from "../../contexts/TaskContext";

const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

function Main() {
    
    const { tasks, isLoading } = useTasks();

    return (
        <S.Main>
			<Container>
				<S.MainBlock>
					<S.MainContent>
                        
                        {isLoading ? (
                                      <S.LoaderWrapper>
                                        <S.Loader />
                                      </S.LoaderWrapper>
                                    ) : tasks.length === 0 ? (
                                      <S.EmptyTasks>
                                        Новых задач нет
                                      </S.EmptyTasks>
                                    ) : (
                                      statusList.map((status) => (
                                        <Column
                                          key={status}
                                          title={status}
                                          cardList={tasks.filter((card) => card.status === status)}
                                        />
                                      ))
                                    )}
					</S.MainContent>
				</S.MainBlock>
			</Container>
		</S.Main>
    );
}

export default Main;
