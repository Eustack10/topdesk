import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
export default function Jackpot() {
        const { category } = useParams();
    const [games, setGames] = useState([]);
    const formatMoneyWithPoundEnd = (amount) => {
  if (typeof amount !== 'number') {
    amount = parseFloat(amount);
  }

  const formatted = amount.toLocaleString('en-GB', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return `${formatted} £`;
}
useEffect(() => {
    axios.get("https://stage.whgstage.com/front-end-test/jackpots.php")
      .then((res) => {
        setGames(res.data);
    });
  }, [category]);
  return (
    <div className='jackpot'>
        {
            games.map(val => (
                    <div className='content' key={val.gsame}>
                        <p><b>Game Name:</b> {val.game}</p>
                        |
                        <p><b>Amount:</b> {formatMoneyWithPoundEnd(val.amount)}</p>
                    </div>
                ))
        }
    </div>
  )
}
