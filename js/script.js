const phoneSearch = (name) =>{
    const URL = `https://openapi.programming-hero.com/api/phones?search=${name}`
    fetch(URL)
    .then(res => res.json())
    .then(data => brand(data))
}   
const returnPhoneSearchData = (data) =>{
    return data
}

const brand = (data) =>{
    const arrayOfData = data.data
    
    const main = document.getElementById('main')

    main.innerHTML = ''

    // checking wrong names
    if (arrayOfData.length >0){

        // loop for name finder
        
        for (const name of arrayOfData) {
            
            // details(name)
            const main = document.getElementById('main')
            const div = document.createElement('div')
            div.className = ' card '

            
            div.innerHTML = `
                
                <div class="mx-auto">
                    <img class="img rounded" src="${name.image}" onclick="details('${name.slug}')" width="200px" alt="">
                    <div class=" detailsHolder container">
                        <h2>${name.phone_name}</h2>
                        <li>Brand: ${name.brand}</li>
                        <li>2</li>
                        <li>3</li>
                        <button class="btn btn-primary" onclick="details('${name.slug}'),blockDisplay()">Details</button>
                        
                    </div>
                </div>
           

            
            `
            
            
            main.appendChild(div)
        }
    }
    else{
        //console.log('please enter a valid phone name ');
    }
}


    

// get value frm search box
const searchValue = document.getElementById('searchBox').value 
const searchBtn = document.getElementById('searchBtn') 
searchBtn.addEventListener('click', function(){
    const searchValue = document.getElementById('searchBox')
    phoneSearch(searchValue.value)
    searchValue.innerText = ''
    
})

// details

const details = (id) => {
    const URL = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
}
const displayDetails = (data) =>{
    const display = document.getElementById('display')
    //console.log(data.releaseDate);


   

    display.innerHTML= `
    <img src="${data.image}"><br>
    <h1>${data.name}</h1>
    <h4>${data.releaseDate}</h4>
    <div class="detailsWhole"
        <div class="features1">
        <div>
            <p>Main Features</p>
            <li>storage : ${data.mainFeatures.storage}</li>
            <li>displaySize : ${data.mainFeatures.displaySize}</li>
            <li> chipSet : ${data.mainFeatures.chipSet}</li>
            <li> memory : ${data.mainFeatures.memory}</li>
        </div>
        
        <div class="sensor"
            <div class="">
                <ul id="itemSensor">
                Sensors
                </ul>
            </div>     
        </div>


    </div>
    <button id="done" class="btn btn-primary" onclick="noneDisplay()">Done</button>

    `
        // for loop for sensor 

    for (const sensor of data.mainFeatures.sensors) {
        //console.log(sensor);
        const sensorHolder = document.getElementById("itemSensor")
        const li = document.createElement("li")
        li.innerHTML = `<p>${sensor}</p>`
        sensorHolder.appendChild(li)

    }
    
}
    
const noneDisplay = () => {
    document.getElementById("display").style.display = "none";
}
const blockDisplay =()=> {
    document.getElementById("display").style.display = "block";
}


