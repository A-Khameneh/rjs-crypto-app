import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";

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
            setIsLoading( false );

        }

        getData();

    }, [] );

    return (<div> <TableCoin coins={ coins } isLoading={ isLoding } /> </div>)

}

export default HomePage;