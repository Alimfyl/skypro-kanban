import Column from "../Column/Column";
function Main ( {cards} ) {
    return(
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
                        <Column title="Без статуса" cardList={cards} />
                        <Column title="Нужно сделать" cardList={cards} />
                        <Column title="В работе" cardList={cards} />
                        <Column title="Тестирование" cardList={cards} />
                        <Column title="Готово" cardList={cards} />
						
					</div>
				
				</div>
			</div>
		</main>
    )
}
export default Main