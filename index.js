
//assigning variables to our button and input html elements
/*const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#input");

buttonElement.onclick =function(e){
    e.preventDefault()

    console.log("Hello beautiful")
    const value = inputElement.value;
    console.log("Value:", value)

fetch("https://api.npoint.io/b8d62bffb58f3c1e3754/drinks")
.then((res)=>res.json())
.then((data)=>{


console.log("Data:", data);
    
})
 }
 */
let selectedDrink = null;
 let outcome =document.getElementById("outcome");
 let searchButton = document.getElementById("searchbtn");
 let url ="https://api.npoint.io/b8d62bffb58f3c1e3754/drinks"
 let userText = document.getElementById("user-text").value;
//  if (userText.length == 0){
// outcome.innerHTML=`<h3 class="msg">The field cannot be empty</h3>`
//  }
//  else{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
       
    });



    

// function showDrink(){
//     console.log("fhgfhfj", selectedDrink)
//     const strDrink
//     const strCategory
//     const strIngredient1


