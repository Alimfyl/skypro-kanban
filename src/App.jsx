import { useState, useEffect } from 'react'
import { cardList } from './data'
import './App.css'
import PopUser from './components/PopUser/PopUser'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Header from './components/Header/Header';
import Main from'./components/Main/Main'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      setIsLoading(false);
    }, 2000);
  },[] );

  return (
    <>
      
    <div className="wrapper">
		
			<PopUser />

			< PopNewCard />

			<PopBrowse />
		
		

		<Header />

    {isLoading ? (
      <p style={{ textAlign:"center", marginTop:"50px"}}>Данные загружаются...</p>
    ) : (
      <Main cards={cardList} />
    )}
    
    </div>
    </>
  );
}

export default App

