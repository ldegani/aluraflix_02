let listMovies = [
  'https://www.themoviedb.org/t/p/original/1ewwtjqAcwZ5abr2X7coGN0UwaI.jpg',
  'https://www.themoviedb.org/t/p/original/eZErsoRjOW7aqTBrxGHoHQ7BeWs.jpg',
  'https://image.tmdb.org/t/p/original/nxAQK652T4QBnmFa4046R0AwULl.jpg',
  'https://image.tmdb.org/t/p/original/lImKHDfExAulp16grYm8zD5eONE.jpg'
];

let listTrailers = [
  'https://www.youtube.com/watch?v=mfmrPu43DF8',
  'https://www.youtube.com/watch?v=EAzGXqJSDJ8',
  'https://www.youtube.com/watch?v=3PkkHsuMrho',
  'https://www.youtube.com/watch?v=n-7K_OjsDCQ'
];

let moviesContainer = document.getElementById('movies-container');

function addInfos() {
  let moviePoster = document.getElementById('movie').value
  let trailerLink = document.getElementById('trailer').value

  if (moviePoster.endsWith('jpg') && trailerLink.includes('youtube.com')) {
    listMovies.push(moviePoster);
    listTrailers.push(trailerLink);
  } else {
    alert(
      'Você inseriu um link não válido! \nUtilize uma imagem com .jpg e um link do youtube!')
  }

  cleanMovies();  
  showMovies();
  cleanFields();
}

function showMovies() {
  for(let i = 0; i < listMovies.length; i++) {
    let div = document.createElement('div');
    let link = document.createElement('a');
    let img = document.createElement('img');
    
    link.href = listTrailers[i];
    link.target = '_blank';
    img.src = listMovies[i];
    div.className = 'movie-card';

    div.appendChild(link);
    link.appendChild(img);
    moviesContainer.appendChild(div);
  }
}

function cleanFields() { 
  document.getElementById('trailer').value = ''
  document.getElementById('movie').value = ''
}

function cleanMovies() {
  moviesContainer.textContent = '';
}

showMovies();