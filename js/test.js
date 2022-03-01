const phoneSearch = (name) => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=${name}`
    fetch(URL)
        .then(res => res.json())
        .then(data => test( data.data))
        console.log(data.data)
}   
const test = (x) =>{
    console.log(x);
    return x 
}
phoneSearch('oppo')
