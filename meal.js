const mealLoad = (searchValue) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
    .then (res => res.json())
    .then(data => displayMeal(data.meals))
}
const displayMeal=(data)=>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerText='';
  for(const d of data)
{
    // console.log(d.idMeal);
    const div = document.createElement('div');
   
    div.classList.add('col');
    div.innerHTML = `
                  <div class="card h-100">
                    <img class="img-fluid rounded" src="${d.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${d.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <!-- Button trigger modal -->
                    <button onclick="modalDetail(${d.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Launch demo modal
                    </button>
                  </div>
 
    `
    mealContainer.appendChild(div);
}
}

function modalDetail(idMeal){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(res => res.json())
.then(data => {
    document.getElementById('exampleModalLabel').innerText =data.meals[0].strMeal;
    console.log(data.meals[0])
    document.getElementById('modal-body').innerHTML = `
    <span>Catagory: </span>
    ${data.meals[0].strCategory}
    <br>
    <span>Area: </span>
    ${data.meals[0].strArea}
    `
})
}
function searchMeal(){
    const searchValueid = document.getElementById('search-field');
const searchValue = searchValueid.value;
mealLoad(searchValue);
// console.log(searchValue)
}

