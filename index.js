

//  let outcome =document.getElementById("outcome");
//  let searchButton = document.getElementById("searchbtn");
//  let url ="https://api.npoint.io/87c45ca63ee422e2ccee/drinks"
//  let userText = document.getElementById("user-text").value;

//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data)
       
//  
console.info("cocktails loaded");  
// document.addEventListener("prechange",function(event){
//     document.querySelector("")
//     .innerHTML = event.tabItem.getAttribute("label");
// });
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
let instructions = document.createElement("i");
instructions.innerHTML = cocktail.drinks[0].strInstructions;

ingredients.appendChild(instructions);

}


