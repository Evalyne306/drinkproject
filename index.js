
 let getInfo = ()=>{
const form = document.getElementById("form")
const app = document.getElementById("app")
const btnlogin = document.getElementById("btnlogin")
btnlogin.addEventListener("click",()=>{
    app.removeAttribute('hidden')
    app.style.display = "flex"
    form.style.display = "none"
})
function getRandomCocktails(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
        //console.log(data);
        displayRandomCocktail(data);
        });
    }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });  
}

getRandomCocktails()



function displayRandomCocktail(cocktail){
 console.log(cocktail.drinks[0])

 let drinkSection = document.querySelector("#drink-section")
 let drinkName = document.createElement("h2");
 drinkName.innerHTML = cocktail.drinks[0].strDrink;
 drinkSection.appendChild(drinkName);

 let img = document.createElement("img")
 img.src = cocktail.drinks[0].strDrinkThumb;

 drinkSection.appendChild(img);
 for(let i=1; i<16; i++){
    console.log();
    if(cocktail.drinks[0][`strIngredient${i}`] == null || cocktail.drinks[0][`strIngredient${i}`]==""){
        break;
    }
    
    let ingredients = document.querySelector("#ingredients")
    let ingredient = document.createElement("li")
    ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] +":" + cocktail.drinks[0][`strIngredient${i}`]

    ingredients.appendChild(ingredient)
    
}  
let instructions = document.createElement("h5");
instructions.innerHTML = cocktail.drinks[0].strInstructions;

ingredients.appendChild(instructions);

}

};
window.addEventListener("load", getInfo);
