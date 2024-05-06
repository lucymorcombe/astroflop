const HoroscopeApi = (sign, timeframe) => {
  return fetch(
    `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}/`
  )
    .then((response) => response.json())
    .then(({ horoscope }) => horoscope);
};

export default HoroscopeApi;
