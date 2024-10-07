const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-XNoZsUzmC8REw3E2piQXv7V1";

const getCoinList = () => {

    return `${BASE_URL}/coins/markets?vs_currency=usd&per_page=20&page=1&x_cg_demo_api_key=${API_KEY}`

}

export { getCoinList };