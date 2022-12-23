document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();

//displaying the login ang sign up form while hidding the app itself
const signup = document.getElementById("signup")
const login = document.getElementById("login")
const app = document.getElementById("app")
const btnsignup = document.getElementById("btnsignup")
const btnlogin = document.getElementById("btnlogin")
const homepage = document.getElementById("homepage")
const register = document.getElementById("register")
const contactus = document.getElementById("contactus")
const contact = document.getElementById("contact")
const feedback = document.getElementById("feedback")
const aboutus = document.getElementById("aboutus")
const about = document.getElementById("about")
const homeid = document.getElementById("homeid")
const home = document.getElementById("home")
const clicks = document.getElementById("clicks")
const counter =document.getElementById("counter")
var btnvar = document.getElementById("like"),
  count = 0;

//event listener for the like button, on click to change color to red
btnvar.addEventListener('click',(e)=>{
    e.preventDefault()
   

        if(btnvar.style.color == "red"){
            btnvar.style.color = "grey"
            if(btnvar.style.color = "red"){
                count += 1;
                counter.innerHTML = "LIKES: " + count;
            }    
    }
    else {
        btnvar.style.color = "red"
        }
})
//the home link onclick event listener
home.addEventListener('click',(event)=>{
    event.preventDefault()
    homeid.style.display = "flex"
    about.style.display = "none"
})
//the about us link on click event listener
aboutus.addEventListener('click',(event)=>{
    event.preventDefault()
    about.removeAttribute("hidden")
    about.style.display = "block"
    homeid.style.display = "none"

})
//the dummy feedback form to fet user views 
feedback.addEventListener('click',(event)=>{
    event.preventDefault()
    contactus.style.display = "none"
    
})
//the contact link on click event listener
contact.addEventListener('click',(e)=>{
e.preventDefault() 

contactus.removeAttribute("hidden")
contactus.style.display = "block"

})


//homepage buttons
register.addEventListener('click',(e)=>{
    e.preventDefault()
homepage.style.display = "none" 
signup.removeAttribute("hidden")
signup.style.display = "block"
})


//sign up form displaying first
btnsignup.addEventListener('click',(event)=>{
    event.preventDefault()
    login.removeAttribute('hidden')
    login.style.display = "block"
    app.style.display = "none"
    signup.style.display = "none"
    homepage.style.display = "none"
    
})
//login form displaying second
btnlogin.addEventListener('click',(event)=>{
    event.preventDefault()
    login.style.display ="none"
    signup.style.display = "none"
    app.style.display = "block"
    app.removeAttribute('hidden')

})
//displaying random images on click of the load to view more images button
const loadimages = document.getElementById("loadimages")
loadimages.addEventListener('click',(event)=>{
event.preventDefault()
 btnvar.style.color = "grey"
 const counter= document.getElementById("counter");
 counter.innerHTML = "LIKES: 0"
 count = 0;

 getInfo()

const ingredients = document.getElementById("ingredients")
ingredients.innerHTML = "<h2>INGREDIENTS & INSTRUCTIONS.</h2>"
const drinkSection = document.getElementById("drink-section")
drinkSection.innerHTML = "" 

})

//adding serching function to the search drink button
const search = document.getElementById("searchButton")
const usertext = document.getElementById("user-text")
search.addEventListener('click',(event)=>{
    event.preventDefault()
    const value = usertext.value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
    .then((response)=>response.json())
    .then((item)=>{
        const ingredients = document.getElementById("ingredients")
ingredients.innerHTML = "<h2>INGREDIENTS & INSTRUCTIONS.</h2>"
const drinkSection = document.getElementById("drink-section")
drinkSection.innerHTML = ""
    item.drinks.forEach(newItem=>{
        
        const drinkSection = document.querySelector("#drink-section")
        const drinkName = document.createElement("h2");
        drinkName.innerHTML = newItem.strDrink;
        drinkSection.appendChild(drinkName);
       
        const img = document.createElement("img")
        img.src = newItem.strDrinkThumb;
       
        drinkSection.appendChild(img);
        for(let i=1; i<16; i++){
           console.log();
           if(newItem[`strIngredient${i}`] == null || newItem[`strIngredient${i}`]==""){
               break;
           }
           
           const ingredients = document.querySelector("#ingredients")
           const ingredient = document.createElement("li")
           ingredient.innerHTML = newItem[`strMeasure${i}`] +":" + newItem[`strIngredient${i}`]
       
           ingredients.appendChild(ingredient)
           
       }  
       const instructions = document.createElement("h5");
       instructions.innerHTML = newItem.strInstructions;
       
       ingredients.appendChild(instructions);
       
    

        })
    })
})
//fetching api for the images, the ingredients and instructions
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

// window.addEventListener("load", getInfo);
getInfo()

});
