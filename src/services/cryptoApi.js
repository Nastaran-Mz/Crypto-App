
const BASE_URL = "https://api.coingecko.com/api/v3"
const API_LEY = "CG-53sb6M8EEhHpTNaCnM3ncsKY"
const getCoinList = (page , currency) => {
   return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&local=en&x_cg_demo_api_key=${API_LEY}`
};
export {getCoinList};