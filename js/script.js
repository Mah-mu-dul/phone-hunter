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
            details(name)
            const main = document.getElementById('main')
            const div = document.createElement('div')
            div.className = ' card'
            div.innerHTML = `
                
                <img class="img rounded" src="img.jpg" width="200px" alt="">
                <div class=" detailsHolder container">
                    <h2>card title</h2>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <div class="button"><button class="btn btn-primary  ">Details</button></div>
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
        const URL = `https://openapi.programming-hero.com/api/phone/${id.slug}`
        fetch(URL)
            .then(res => res.json())
            .then(data => console.log(data.data.mainFeatures.sensors[3]))
    }
    

