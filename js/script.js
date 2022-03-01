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
                    <img class="img rounded" src="${name.image}" width="200px" alt="">
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
        console.log('please enter a valid phone name ');
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

    display.innerHTML= `
    <img src="${data.image}"><br>
    <h1>${data.name}</h1>
    <p>Main Features</p>
    <ul>storage : ${data.mainFeatures.storage}</ul>
    <ul>displaySize : ${data.mainFeatures.displaySize}</ul>
    <ul> chipSet : ${data.mainFeatures.chipSet}</ul>
    <ul> memory : ${data.mainFeatures.memory}</ul>

    <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle"   role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Sensors
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li class="dropdown-item"  >Action</li>
    <li class="dropdown-item"  >Another action</li>
    <li class="dropdown-item"  >Something else here</li>
  </ul>
              <button id="done" class="btn btn-primary" onclick="noneDisplay()">Done</button>

</div>

    `
}
    
function noneDisplay() {
    document.getElementById("display").style.display = "none";
    console.log('kicuekta');

}
function blockDisplay() {
    document.getElementById("display").style.display = "block";
    console.log('kicuekta');

}


