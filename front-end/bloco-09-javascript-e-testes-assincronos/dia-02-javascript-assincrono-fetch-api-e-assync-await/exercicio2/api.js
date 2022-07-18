const url = 'https://api.coincap.io/v2/assets';
const url2 = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

const getApiInfo = async () => {
  try {
    const getFetch = await fetch(url);
    const getJson = await getFetch.json();
    const array = await getJson.data;
    return array;
  } catch(error) {
    console.log(`Algo deu errado: ${error}`);
  }
};

const getDolls = async () => {
  try {
    const getFetch = await fetch(url2);
    const getJson = await getFetch.json();
    const array = await getJson.usd;
    return array;
  } catch (error) {
    console.log(`Algo deu errado: ${error}`)
  }
};

const putCoin = async () => {
  const apiInfo = await getApiInfo();
  const getUl = document.getElementById('moedas');

  apiInfo.filter((_, index) => index < 10)
    .forEach((element) => {
      const createLi = document.createElement('li');
      createLi.innerText = `${element.id} (${element.symbol}): $USD ${element.priceUsd}`;
      getUl.appendChild(createLi);
    });
};

window.onload = () => putCoin();
