import { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApi";

function Search({ currency, setCurrency }) {

    const [text, setText] = useState("");
    const [coins, setCoins] = useState([]);

    useEffect( () => {

        const controller = new AbortController();

        const search = async () => {

            try {

                if(!text) return;
    
                const res = await fetch(searchCoin(text), {signal: controller.signal});
                const json = await res.json();
                if(json.coins) {setCoins(json.coins)} else {

                    alert(json.status.error_message);

                };
                console.log(coins);
    
            } catch (err) {

                if(err.name !== "AbortError") {

                    alert(err.message);

                }
            
            }

        }

        search();

        return () => controller.abort();

    }, [text] )

    return(

        <div>

            <input type="text" placeholder="Search" value={text} onChange={e => setText(e.target.value)} />
            <select value={currency} onChange={e => setCurrency(e.target.value)}>

                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>

            </select>

        </div>

    )

}

export default Search;