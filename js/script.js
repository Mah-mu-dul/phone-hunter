const phoneSearch = (name) =>{
    const URL = `https://openapi.programming-hero.com/api/phones?search=${name}`
    fetch(URL)
    .then(res => res.json())
    .then(data => brand(data))
}   


const brand = (data) =>{
    const arrayOfData = data.data
    main.innerHTML = ''
    console.log( );
    // checking wrong names

    if (arrayOfData.length >0){
        // loop for name finder
        for (const name of arrayOfData) {
            const main = document.getElementById('main')
            const div = document.createElement('div')
            div.className = 'col-lg-4 col-sm-12 align-item-center g-2 d-flex justify-content-around'
            div.innerHTML = `

            
            <div class="card mx-auto " style="width: 18rem;">
                <div class="">
                    <img src="${name.image}" img class="card-img-top" alt="...">
                    <div class="card-body ">
                        <h5 class="card-title">${name.phone_name}</h5>
                        <a class="btn btn-primary">details</a>
                    </div>
                </div>
            
            </div>
            <div>
            
            </div>
            <a href="#" ><h2 class="fixed-bottom">^</h2></a>
      

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


