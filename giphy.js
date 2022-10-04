let newImage = document.getElementById('displayed-image');
let userInput = document.getElementById('search-bar');

async function imageDisplay(){
    try {
        let grabImage = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=yDXfjbKebwePSACrzkdJUNXNJLyuTJvL&s=${userInput.value}`, {mode: 'cors'});
        let response = await grabImage.json();
        console.log(response);
        newImage.src = response.data.images.original.url;
    }
    catch {
        alert('Please input a valid search')
    }
}