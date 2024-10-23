const url = 'https://api.api-ninjas.com/v1/quotes';
fetch(url, {
  method: 'GET',
  headers: {
    'X-Api-Key': '2GSbkhrXIVJneFC6ZqhFLg==Lsv2Trh48ZLiTg4C',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const randomQuote = data[0];  // because the response was given in array by api-ninja, and the first one is our data

    document.getElementById('author').textContent = randomQuote.author;
    document.querySelector('.category').textContent = randomQuote.category;
    document.getElementById('quote').textContent = randomQuote.quote;
  })
  .catch(error => {
    console.error('Error fetching quotes:', error);
  });
