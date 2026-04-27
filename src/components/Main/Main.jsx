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
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
                        {statusList.map((status) => (
                            <Column 
                        key={status}
                        title={status}
                        cardList={cards.filter((card) => card.status === status)}
                        />
                        ))}
						
					</div>
				
				</div>
			</div>
		</main>
    )
}
export default Main