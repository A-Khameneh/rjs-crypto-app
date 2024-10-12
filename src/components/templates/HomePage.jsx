import { useEffect, useState } from "react";

import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function HomePage() {

    const [coins, setCoins] = useState([]);
    const [isLoding, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("usd");

    useEffect( () => {

        const options = {method: 'GET', headers: {accept: 'application/json'}};

        // fetch( getCoinList(), options )
        //     .then( response => response.json() )
        //     .then( response => setCoins(response) )
        //     .catch( err => console.error(err) );

        const getData = async () => {

            try {

                setIsLoading(true);
                const res = await fetch( getCoinList( page, currency ), options );
                const json = await res.json();
                setCoins( json );
                console.log(json);
                setIsLoading( false );

            } catch (err) {

                console.log(err);

            }

        }

        getData();

    }, [page, currency] );

    return (

        <div> 

            <Search currency={currency} setCurrency={setCurrency} />
            <TableCoin coins={ coins } isLoading={ isLoding } /> 
            <Pagination page={page} setPage={setPage} />
        
        </div>)

}

export default HomePage;