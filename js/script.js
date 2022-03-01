const phoneSearch = () =>{
    fetch('https://openapi.programming-hero.com/api/phones?search=samsung')
    .then(res => res.json())
    .then(data => brand(data))
}   
phoneSearch()

const brand = (data) =>{
    console.log(data.data[0].brand);
}


const searchValue = document.getElementById('searchBox').value 
const searchBtn = document.getElementById('searchBtn') 
searchBtn.addEventListener('click', function(){
    const searchValue = document.getElementById('searchBox').value 
    console.log( searchValue)
})