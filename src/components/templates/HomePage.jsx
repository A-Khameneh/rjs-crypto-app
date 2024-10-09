import { useEffect, useState } from "react";

import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {

    const [coins, setCoins] = useState([]);
    const [isLoding, setIsLoading] = useState(true);

    useEffect( () => {

        const options = {method: 'GET', headers: {accept: 'application/json'}};

        // fetch( getCoinList(), options )
        //     .then( response => response.json() )
        //     .then( response => setCoins(response) )
        //     .catch( err => console.error(err) );

        const getData = async () => {

            const res = await fetch( getCoinList(), options );
            const json = await res.json();
            setCoins( json );
            console.log(json);
            setIsLoading( false );

        }

        getData();

    }, [] );

    return (

        <div> 
            
            <Pagination />
            <TableCoin coins={ coins } isLoading={ isLoding } /> 
        
        </div>)

}

export default HomePage;