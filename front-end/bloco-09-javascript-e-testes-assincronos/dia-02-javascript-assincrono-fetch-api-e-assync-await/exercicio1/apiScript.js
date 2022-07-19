const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const result = await fetch(API_URL, myObject);
  const response = await result.json();
  const final = await response.joke;
  const selectId = document.getElementById('jokeContainer'); 
  selectId.innerHTML = final;
};

window.onload = () => fetchJoke();

