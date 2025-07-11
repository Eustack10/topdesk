import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Jackpot from './Jackpot';
export default function Category() {
    const { category } = useParams();
    const [games, setGames] = useState([]);
useEffect(() => {
    axios.get("https://stage.whgstage.com/front-end-test/games.php")
      .then((res) => {
        const topGames = res.data.filter(game =>
            game.categories.includes(category)
        );
        console.log(topGames);
        setGames(topGames);
    });
  }, [category]);
  return (
    <div className='area'>
        <div className='content'>
            {
                games.length >> 0 ? games.map(val => (
                    <div className='card' key={val.id}>
                        {
                            val.categories.find(val => val == 'top' || val == 'new' || val == 'ball' || val == 'virtual' || val == 'fun') && (['top','new'].includes(category) ? <div className='ribbon'>{category}</div> : <></>)
                        }
                        <img src={val.image}/>
                        <button>Play : {val.name}</button>
                    </div>
                )) : 
                   category == 'jackpots' ? <Jackpot></Jackpot> : '-Empty-'
            }
        </div>
    </div>
  )
}
