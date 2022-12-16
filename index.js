

 let outcome =document.getElementById("outcome");
 let searchButton = document.getElementById("searchbtn");
 
//  let url ="https://www.thecocktaildb.com/api/json/v1/1/random.php"
 let userText = document.getElementById("user-text").value;
let getInfo = ()=>{



//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data)
       
//  
// console.info("cocktails loaded");  



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
searchButton.addEventListener("click",getInfo);
document.querySelector("#drink-section") = cocktail.drinks[0].strDrink;
