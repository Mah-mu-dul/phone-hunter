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
        const sliceArrayOfData = arrayOfData.slice(0,20)
        //console.log(sliceArrayOfData);
        // loop for name finder
        
        for (const name of sliceArrayOfData) {
            
            
            // details(name)
            const main = document.getElementById('main')
            const div = document.createElement('div')
            const btn = document.createElement('button')
            div.className = ' card '

           

            //console.log(name);
            div.innerHTML = `
                
                <div class="mx-auto">
                    <img class="img rounded" src="${name.image}" onclick="details('${name.slug}')" width="200px" alt="">
                    <div class=" detailsHolder container">
                        <h2 style="color:tomato;">${name.phone_name}</h2>
                        <ul><h3 style="color:gold;">Brand: ${name.brand}</h3></ul>
                        <button class="btn btn-primary" onclick="details('${name.slug}'),blockDisplay()">Details</button>
                        
                    </div>
                </div>

           

            
            `
            
            
            main.appendChild(div)
            document.getElementById('warning').innerText = '    '

            
        }
    }
    else{
        console.log('please enter a valid phone name ');
        document.getElementById('warning').innerText = `No phone found`
    }
}


    

// get value frm search box
const searchValue = document.getElementById('searchBox').value 
const searchBtn = document.getElementById('searchBtn') 
searchBtn.addEventListener('click', function(){
    const searchValue = document.getElementById('searchBox')
    phoneSearch(searchValue.value)
    clearSearchField()
    
})
const clearSearchField = () =>{
    document.getElementById('searchBox').innerText = ""
} 

// details

const details = (id) => {
    const URL = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
}
const displayDetails = (data) =>{
    const display = document.getElementById('display')


   

    const releaseDate = (data) => {
       const releaseDate = (data.releaseDate);
        if (releaseDate.length > 1){
             return releaseDate
        }
        else{
            return 'No release date'
        }

    }

    display.innerHTML= `
    <img src="${data.image}"><br>
    <h1>${data.name}</h1>
    <h4>${releaseDate(data)}</h4>
    <div class="detailsWhole">

        <div class="features1">
            <div class="MainFeatures">
                <h4>Main Features</h4>
                <li>storage : ${data.mainFeatures.storage}</li>
                <li>displaySize : ${data.mainFeatures.displaySize}</li>
                <li> chipSet : ${data.mainFeatures.chipSet}</li>
                <li> memory : ${data.mainFeatures.memory}</li>
            </div>
    
            <div class="others">
                <ul id="othersItem">
                   <h4> others features</h4>
                    
                </ul>
            </div>

            <div class="sensor">
                <ul id="itemSensor">
                    <h4>Sensors</h4>
                    
                </ul>
            </div>
        </div>
    </div>
    <button id="done" class="btn btn-primary" onclick="noneDisplay()">Done</button>

    `
        // for loop for sensor 

    for (const sensor of data.mainFeatures.sensors) {
        ////console.log(sensor);
        const sensorHolder = document.getElementById("itemSensor")
        const li = document.createElement("li")
        li.innerHTML = `<p>${sensor}</p>`
        sensorHolder.appendChild(li)

    }
        // for loop for others 
    //console.log(data.others);


    for (const other in data.others) {
        const otherHolder = document.getElementById("othersItem")
        const li = document.createElement("li")
        li.innerHTML = `<p>${other}</p>`
        otherHolder.appendChild(li)

    }

    
}
    
const noneDisplay = () => {
    document.getElementById("display").style.display = "none";
}
const blockDisplay =()=> {
    document.getElementById("display").style.display = "block";
}



