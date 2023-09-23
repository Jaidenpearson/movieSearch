let submit = document.getElementById('searchContainer')
    submit.addEventListener('submit', (e) => e.preventDefault())
    submit.addEventListener('submit', () => getMovieTitle())
let searchQuery = document.getElementById('search')
let movieContainer = document.getElementById('movieContainer')

function handleQuery(query) {
    if(query == '') {
        return 'everything+everywhere+all+at+once'
    } else {
    let string = query.toString()
    let replaced = string.replaceAll(' ', '+')
    let handledQuery = replaced.toLowerCase()
    console.log(handledQuery)
    return handledQuery
    }
}

function getMovieTitle() {
    movieContainer.innerHTML = ``
    let handledQuery = handleQuery(searchQuery.value)
    let apiKey = `4317fc94`
    let url = `http://www.omdbapi.com/?t=${handledQuery}&apikey=${apiKey}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.Poster)
            movieContainer.innerHTML = 
            `<div class="movie">
                <img id="poster" src="${data.Poster}" alt="">
                <div id="title">${data.Title}</div>
                <div id="year">${data.Year}</div>
                <div id="rating">${data.Rated}</div>
                <div id="runtime">${data.Runtime}</div>
                <div id="plot">${data.Plot}</div>
                <div id="ratingContainer">
                    <div class="infoContainer">
                        <div class="rating">${data.imdbRating}</div>
                        <div class="webTitle">Imdb</div>
                    </div>
                    <div class="infoContainer">
                        <div class="rating">${data.Metascore}</div>
                        <div class="webTitle">Metascore</div>
                    </div>
                </div>
            </div>`
        }
    )
    searchQuery.value = ''
}


getMovieTitle()


//Search bar logic

