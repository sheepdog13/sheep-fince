const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
export function fetchConinsgecko() {
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
  ).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false`
  ).then((response) => response.json());
}

export function fetchCoinTickers(coinId: string, day: any) {
  return fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=${day}
  `).then((response) => response.json());
}

export function fetchCoinHistory(coinId: string) {
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 24 * 7;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((response) => response.json());
}
