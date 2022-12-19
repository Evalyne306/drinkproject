document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();


const container = document.getElementById("container");
const signup = document.getElementById("signup")
const login = document.getElementById("login")
const app = document.getElementById("app")
const btnsignup = document.getElementById("btnsignup")
const btnlogin = document.getElementById("btnlogin")

btnsignup.addEventListener('click',(event)=>{
    event.preventDefault()
    login.removeAttribute('hidden')
    login.style.display = "block"
    app.style.display = "none"
    signup.style.display = "none"
    
})
btnlogin.addEventListener('click',(event)=>{
    event.preventDefault()
    login.style.display ="none"
    signup.style.display = "none"
    app.style.display = "block"
    app.removeAttribute('hidden')

})

const loadimages = document.getElementById("loadimages")
loadimages.addEventListener('click',(event)=>{
event.preventDefault()
getInfo()
const ingredients = document.getElementById("ingredients")
ingredients.innerHTML = ""
const drinkSection = document.getElementById("drink-section")
drinkSection.innerHTML = ""
})

const getInfo = ()=>{








function getRandomCocktails(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
    function(response) {


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

 const drinkSection = document.querySelector("#drink-section")
 const drinkName = document.createElement("h2");
 drinkName.innerHTML = cocktail.drinks[0].strDrink;
 drinkSection.appendChild(drinkName);

 const img = document.createElement("img")
 img.src = cocktail.drinks[0].strDrinkThumb;

 drinkSection.appendChild(img);
 for(let i=1; i<16; i++){
    console.log();
    if(cocktail.drinks[0][`strIngredient${i}`] == null || cocktail.drinks[0][`strIngredient${i}`]==""){
        break;
    }
    
    const ingredients = document.querySelector("#ingredients")
    const ingredient = document.createElement("li")
    ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] +":" + cocktail.drinks[0][`strIngredient${i}`]

    ingredients.appendChild(ingredient)
    
}  
const instructions = document.createElement("h5");
instructions.innerHTML = cocktail.drinks[0].strInstructions;

ingredients.appendChild(instructions);

}


};

window.addEventListener("load", getInfo);


});