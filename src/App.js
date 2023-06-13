
import './App.css';
import { useState } from 'react';
import Axios  from 'axios';
import Tile from './Tile';
import { useEffect } from 'react';

function App() {
  const [card,setCard] = useState([])
  const [query, setQuery] = useState("")
  const [attr, setAttr] = useState("dark")
  const [error, setErrorMessage] = useState("")
  const [sort, setSort] = useState("new")
  const [loading,setLoading] = useState(false)

   //type=
  //https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=10&offset=0
  // &num=10&offset=0
  useEffect(()=>{
    async function getCards(){
      var url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?attribute=${attr}&fname=${query}&sort=${sort}&num=12&offset=0`
      await Axios.get(url)
      .then((result)=>{
        setErrorMessage("")
        setCard(result.data.data)
        
        setLoading(true)
      })
      .catch((error)=>{
        
        setErrorMessage(error)
      })
      
      
  }getCards();
    },[attr,query,sort]);
  

  return (
    <div className="App">
      <h1>Yi-Gi-Oh! Cards</h1>
      <form className='app_searchForm' key={card.id} >

        <input 
        key={card.id}
        className='app_input'
        type="text" 
        placeholder='Search Cards (for e.g. magician)'
        value={query} 
        onChange={(e) => setQuery(e.target.value)} onSubmit={(e) => e.preventDefault()}/>

        
        {/* <input 
        className='app_submit'
        type="submit" 
        value="Search" /> */}
        
        <select 
        className='drop'
        key={card.id}
        value={attr}
        onChange={ (e) => {
          const selectedValue = e.target.value;
          setAttr(selectedValue)
        }}>
          
          <option value="dark"> Dark</option>
          <option value="earth">Earth</option>
          <option value="fire">Fire</option>
          <option value="light">Light</option>
          <option value="water">Water</option>
          <option value="wind">Wind</option>
          <option value="divine">Divine</option>
        </select>
        <div className='sortbox'>
        <h1 className='sortb' >Sort By :</h1>
        <select 
        className='sort'
        key={card.id}
        value={sort}
        onChange={ (e) => {
          const selectedSort = e.target.value;
          setSort(selectedSort)
        }}>
          
          
          <option value="new">Newest</option>
          <option value="atk"> Atk (ascending) </option>
          <option value="level">Level</option>
          <option value="def">Def</option>
        </select>
        </div>
        </form>
      
      <div className='tile' key={card.id}>
        { !error && card.map((cards)=>{
              return <Tile cards={cards}/>
})}
<div>
{error !== ""&&<h2 className='results'>No Results Found!</h2>}
      </div>
      {loading !== true && <h2>Loading...</h2>}
    
    </div>
    </div>
  );
}

export default App;
//onSubmit={onSubmit} on app_input onchange