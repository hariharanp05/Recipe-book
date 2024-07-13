function addRecipes(){
    document.getElementById("recipeTab").style.display = 'block';
}

function closeForm(){
    document.getElementById('recipeTab').style.display = 'none';
}

// JavaScript code for handling recipe data and interactions

let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

var recipeImage = document.getElementById("recipeImage")

recipeImage.addEventListener('change',()=>{
    const fr = new FileReader();
    fr.readAsDataURL(recipeImage.files[0]);
    fr.addEventListener('load',()=>{
        const url = fr.result;
        localStorage.setItem("upImage",url)
    })
})


// Function to add new recipe
function addRecipe(event) {
    event.preventDefault();
    
    let recipeName = document.getElementById('recipeName').value;
    let recipeIngredients = document.getElementById('recipeIngredients').value;
    let recipeSteps = document.getElementById('recipeSteps').value;
    let pic = localStorage.getItem("upImage")
    
    // Handle image upload and storage
    // For simplicity, we'll skip image handling in this example
    
    const newRecipe = {
        name: recipeName,
        ingredients: recipeIngredients,
        steps: recipeSteps,
        picture:pic,
        // image: 'path/to/image' // Image path would go here
    };
    
    recipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));




    displayRecipes();
    clearValues();
    closeForm();

}


    


var img = document.getElementsByName("img")
var tit = document.getElementsByName("Rname")
var ings= document.getElementsByName("Ring")
var procd= document.getElementsByName("Rstep")
var views = document.getElementsByName("Rview")
var closeDet = document.getElementsByName("Rclose")



function viewDetail(){
 
    img.classList.add("hidden")
    closeDet.classList.remove("hidden")
    

}

function closeDetail(){
    
    img.classList.remove("hidden")
}
      

// Function to display all recipes
function displayRecipes() {
    const recipeList = document.getElementById('recipeList');
    
    // Clear existing recipes
    recipeList.innerHTML = '';
    
    // Append each recipe to the list
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        
       const img = document.createElement("img")
       img.setAttribute("src",recipe.picture)
      

       const h3 = document.createElement("h3")
       h3.textContent = recipe.name

       const h4 = document.createElement("h4")
       h4.textContent = recipe.ingredients
       h4.classList.add("hidden")
       
       const p = document.createElement("p")
       p.textContent = recipe.steps
       p.classList.add("hidden")

       const viewButton = document.createElement("button")
       viewButton.textContent = "View Details"
       viewButton.setAttribute("name","Rview")

       const closeDetail = document.createElement("button")
       closeDetail.textContent = "Close"
       closeDetail.classList.add("hidden")
       closeDetail.setAttribute("name","Rclose")
            
       recipeElement.appendChild(img)
       recipeElement.appendChild(h3)
       recipeElement.appendChild(h4)
       recipeElement.appendChild(p)
       recipeElement.appendChild(viewButton)
       recipeElement.appendChild(closeDetail)
       
       viewButton.addEventListener('click',function(){
        img.classList.add("hidden")
        h3.classList.add("hidden")
        viewButton.classList.add("hidden")
        h4.classList.remove("hidden")
        p.classList.remove("hidden")
        closeDetail.classList.remove("hidden")
       });

       closeDetail.addEventListener("click",function(){
        img.classList.remove("hidden")
        h3.classList.remove("hidden")
        viewButton.classList.remove("hidden")
        h4.classList.add("hidden")
        p.classList.add("hidden")
        closeDetail.classList.add("hidden")
       });

        
        
        recipeList.appendChild(recipeElement);
    });


}

function clearValues(){

    let recN = document.getElementById('recipeName')
    let recI = document.getElementById('recipeIngredients')
    let recP = document.getElementById('recipeSteps')
    let recIm = document.getElementById('recipeImage')

    recN.value = ""
    recI.value = ""
    recP.value = ""
    recIm = ""
    
    

};



// search funtionality

document.getElementById("searchBox").addEventListener('keyup',keyupfun)

function keyupfun(){
    var a = document.querySelectorAll('h3');

    for(var i=0; i<a.length; i++){
    var val = document.getElementById("searchBox").value.toLowerCase();
   

    if(a[i].innerHTML.toLocaleLowerCase().indexOf(val) != -1){
        a[i].parentElement.style.display = 'block'
    }else{
         a[i].parentElement.style.display = 'none'
        }
    }
}