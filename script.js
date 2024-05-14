document.addEventListener('DOMContentLoaded', function() {
    fetchChuckNorrisJoke();
});

function fetchChuckNorrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayJoke(data.value);
            updateButton();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayJoke(joke) {
    const dataContainer = document.querySelector('.data-container');
    const jokeElement = document.createElement('div');
    jokeElement.classList.add('joke');
    jokeElement.textContent = joke;
    dataContainer.innerHTML = ''; // Clear previous joke
    dataContainer.appendChild(jokeElement);
}

function updateButton() {
    const button = document.querySelector('.btn-primary');
    button.textContent = 'Get Another Joke';
}
