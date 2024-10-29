// Fetch a quote from Ninja-API
function getQuote() {
  fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
      'X-Api-Key': '2GSbkhrXIVJneFC6ZqhFLg==Lsv2Trh48ZLiTg4C',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        const fetchedQuote = data[0];

        // Update HTML elements with fetched quote
        document.getElementById('author').textContent = fetchedQuote.author;
        document.querySelector('.category').textContent = fetchedQuote.category;
        document.getElementById('quote').textContent = `"${fetchedQuote.quote}"`;
      } else {
        console.error('No quote received');
      }
    })
    .catch(error => {
      console.error('Error fetching quotes:', error);
    });
}

// To generate a new quote on page load 
getQuote();

// Copy the quote to clipboard
function copyQuote() {
  navigator.clipboard.writeText(`"${document.getElementById('quote').textContent}" 
- ${document.getElementById('author').textContent}`);
}
