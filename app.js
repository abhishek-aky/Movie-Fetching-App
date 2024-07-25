let input = document.querySelector('input')
let btn = document.querySelector('button')
let list = document.querySelector('#list')



btn.addEventListener('click', function(){
    let searchText = input.value; // text ki value bol
    let data = fetchData(searchText); // api se bol jo text aaya hai usse matching data de
    input.value = ""; // input ko khali kr de
})

function fetchData(searchText){ // search kiye huye data ki value ko api se match krega
    //fetch
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        // console.log(data);
        manipulateDom(data);
    })








    // axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`) // axios
    // .then(function(response){
    //     console.log(response.data);
    //     manipulateDom(response.data);
    // })

}

function manipulateDom(allthedata){
    //to remove the already present movies
    while(list.firstChild){
        list.firstChild.remove();
    }

    for(let data of allthedata){
        let figure = document.createElement('figure');
        figure.innerHTML= `
        <img src=${data.show.image.medium} />
        <h2>${data.show.name}</h2>
        <h5> Language : ${data.show.language}</h5>
        `

        list.appendChild(figure);
    }
}