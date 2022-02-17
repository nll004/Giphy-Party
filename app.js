$("form").click(function(e) { e.preventDefault() } );
const searchBtn = document.querySelector('#searchBtn');

async function getGif(searchKey){
    const gifRes = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=yKGIz9fuMAMJWJMb1ucUxCvRQR4HLDqL&q=${searchKey}&limit=1&offset=0&rating=g&lang=en`)
    return gifRes.data.data[0].images.original.url;
}

async function postGif(value){
    const gif = await getGif(value);
    $('<img>').attr('src', `${gif}`).attr('class', 'gif').appendTo($('#gifContainer'))
}

searchBtn.addEventListener('click', function(e){
    const $searchBar = $('input').val();
    postGif($searchBar);
    $('input').val("");
})

$('#removeBtn').click(function(){ $('#gifContainer').empty()})
