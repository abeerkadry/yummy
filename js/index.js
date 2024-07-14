let categoryData = [];
let areaData = [];
let ingredientsData = [];
let mealData =[];
let mealId =[];
let meal =[];
////////// Open & close Side //////////
$(".nav-header #iconn").on("click", function () {
    if ($("aside .navv").css("left") == "0px") {
        $("aside .navv").animate({ left: `${$(".nav-menu").innerWidth()}px` }, 1000);
    } else {
        $("aside .navv").animate({ left: `0px` }, 1000);
        // $("nav-header #iconn").removeClass("fa-solid fa-xmark");
        // $("nav-header #iconn").addClass("fa-solid fa-bars");  
        $("nav-header #iconn").removeClass("fa-xmark");
        // $("nav-header #iconn").attr("class","fa-solid fa-bars")
    }
})
///////////// home ////////////
async function getMealId() {
    let resId = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    let finalResId = await resId.json();
    for(var i =0;i<finalResId.meals.length ;i++){
        finalResId.meals[i].idMeal;
        mealId.push(finalResId.meals[i].idMeal)
    }
    getMealData()
    
}
getMealId()
async function getMealData() {
    for (let i = 0; i < mealId.length; i++) {
        let resMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId[i]}`);
        let finalResMeal = await resMeal.json();
        meal = finalResMeal.meals;
        displayMeals()
        console.log(meal);
    }
}
let cartona = ``;
function displayMeals() {
    for (let i = 0; i < meal.length; i++) {
        cartona += `<div class="cardd col-12 col-md-6 col-lg-3">
                        <div class="position-relative">
                            <div class"">
                                <img src="${meal[i].strMealThumb}" class="w-100" alt=""> 
                            </div>
                            <div class="maelName bg-white bg-opacity-75 d-flex align-items-center position-absolute text-center p-3">
                                <h2>${meal[i].strMeal}</h2>
                            </div>
                        </div>
                            
                    </div>`
    }
    document.querySelector("#myData").innerHTML = cartona
}
///////////// Categories ////////////
$(".Categories").on("click", async function getCategoriesData() {
    let resCategories = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let finalResCategories = await resCategories.json();
    categoryData = finalResCategories.categories;
    displayCategory()
})
function displayCategory() {
    let cartona = ``;
    for (let i = 0; i < categoryData.length; i++) {
        cartona += `<div class="cardd col-12 col-md-6 col-lg-3">
                        <div class="p-4 position-relative">
                            <div>
                                <img src="${categoryData[i].strCategoryThumb}" class="w-100" alt=""> 
                            </div>
                            <div class="maelName bg-white bg-opacity-75 position-absolute text-center p-3">
                                <h2>${categoryData[i].strCategory}</h2>
                                <p>${categoryData[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                            </div>
                        </div>
                    </div>`
    }
    document.querySelector("#myData").innerHTML = cartona
}
///////////// Area ////////////
$(".Area").on("click", async function getAreaData() {
    let resArea = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    let finalResArea = await resArea.json();
    areaData = finalResArea.meals;
    displayArea()
})
function displayArea() {
    let cartona = ``;
    for (let i = 0; i < areaData.length; i++) {
        cartona += `<div class="col-12 col-md-6 col-lg-3 text-center text-white">
                        <div>
                            <i class="fa-solid fa-house-laptop fs-1 p-2"></i> 
                            <h3>${areaData[i].strArea}</h3>
                        </div>
                    </div>`
    }
    document.querySelector("#myData").innerHTML = cartona
}
///////////// Ingredients ////////////
$(".Ingredients").on("click", async function getIngredientsData() {
    let resIngredients = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    let finalResIngredients = await resIngredients.json();
    ingredientsData = finalResIngredients.meals;
    console.log(ingredientsData);
    displayIngredients()
})
function displayIngredients() {
    let cartona = ``;
    for (let i = 0; i < ingredientsData.length; i++) {
        cartona += `<div class="col-12 col-md-6 col-lg-3 text-center text-white">
                        <div>
                            <i class="fa-solid fa-drumstick-bite fa-4x"></i> 
                            <h3>${ingredientsData[i].strIngredient}</h3>
                            <p>${ingredientsData[i].strDescription}</p>
                        </div>
                    </div>`
    }
    document.querySelector("#myData").innerHTML = cartona
}
// Display contact form on button click
$(".ContactUs").on("click", function displayContactUs() {
    let cartona = `<div class="min-vh-100 d-flex justify-content-center align-items-center">
                    <div class="w-75 text-center">
                        <div class="row g-4">
                            <div class="col-md-6">
                                <input id="nameInput" type="text" class="form-control" placeholder="Enter Your Name">
                                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                                    Special characters and numbers not allowed
                                </div>
                            </div>
                            <div class="col-md-6">
                                <input id="emailInput" type="email" class="form-control" placeholder="Enter Your Email">
                                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                                    Email not valid (e.g., example@domain.com)
                                </div>
                            </div>
                            <div class="col-md-6">
                                <input id="phoneInput" type="text" class="form-control" placeholder="Enter Your Phone">
                                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                                    Enter valid Phone Number
                                </div>
                            </div>
                            <div class="col-md-6">
                                <input id="ageInput" type="number" class="form-control" placeholder="Enter Your Age">
                                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                                    Enter valid age
                                </div>
                            </div>
                            <div class="col-md-6">
                                <input id="passwordInput" type="password" class="form-control" placeholder="Enter Your Password">
                                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                                    Enter valid password (Minimum eight characters, at least one letter and one number)
                                </div>
                            </div>
                            <div class="col-md-6">
                                <input id="repasswordInput" type="password" class="form-control" placeholder="Re-enter Password">
                                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                                    Passwords do not match
                                </div>
                            </div>
                        </div>
                        <button id="submitBtn" type="submit" class="btn btn-outline-danger px-2 mt-3">Submit</button>
                    </div>
                </div>`;

    $("#myData").html(cartona);
});

// Event listener for form submission using jQuery
$(document).on("click", "#submitBtn", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form
    var isValid = validateForm();

    // If valid, you can proceed with form submission or further processing
    if (isValid) {
        console.log("Form submitted successfully!");
        // Perform further actions like AJAX submission
    } else {
        console.log("Form submission halted due to validation errors.");
    }
});

// Function to validate the entire form
function validateForm() {
    var nameInput = $("#nameInput").val().trim();
    var emailInput = $("#emailInput").val().trim();
    var phoneInput = $("#phoneInput").val().trim();
    var ageInput = $("#ageInput").val().trim();
    var passwordInput = $("#passwordInput").val();
    var repasswordInput = $("#repasswordInput").val();

    var isValid = true;

    // Validate Name
    if (!nameValidation(nameInput)) {
        $("#nameAlert").removeClass("d-none");
        isValid = false;
    } else {
        $("#nameAlert").addClass("d-none");
    }

    // Validate Email
    if (!emailValidation(emailInput)) {
        $("#emailAlert").removeClass("d-none");
        isValid = false;
    } else {
        $("#emailAlert").addClass("d-none");
    }

    // Validate Phone
    if (!phoneValidation(phoneInput)) {
        $("#phoneAlert").removeClass("d-none");
        isValid = false;
    } else {
        $("#phoneAlert").addClass("d-none");
    }

    // Validate Age
    if (!ageValidation(ageInput)) {
        $("#ageAlert").removeClass("d-none");
        isValid = false;
    } else {
        $("#ageAlert").addClass("d-none");
    }

    // Validate Password
    if (!passValidation(passwordInput)) {
        $("#passwordAlert").removeClass("d-none");
        isValid = false;
    } else {
        $("#passwordAlert").addClass("d-none");
    }

    // Validate Re-enter Password
    if (!repassValidation(passwordInput, repasswordInput)) {
        $("#repasswordAlert").removeClass("d-none");
        isValid = false;
    } else {
        $("#repasswordAlert").addClass("d-none");
    }

    return isValid;
}

// Regular expression validation functions (same as before)
function nameValidation(inputValue) {
    var nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    return nameRegex.test(inputValue);
}

function emailValidation(inputValue) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(inputValue);
}

function phoneValidation(inputValue) {
    var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(inputValue);
}

function ageValidation(inputValue) {
    var ageRegex = /^(?:1[0-4][0-9]|[1-9][0-9]|[1-9])$/;
    return ageRegex.test(inputValue);
}

function passValidation(inputValue) {
    var passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passRegex.test(inputValue);
}

function repassValidation(passwordValue, rePasswordValue) {
    return passwordValue === rePasswordValue;
}











$(".Search").on("click",function apearSearch(){

    let cartona = ``;
    cartona+=` <div class="row py-4">
                        <div class="col-md-6">
                            <input  type="text" class="form-control bg-transparent text-white" placeholder="Search By Name">

                            </div>
                            <div class="col-md-6">
                               <input maxlength="1"    type="text" class="form-control bg-transparent text-white" placeholder="Search By letter   ">
                            </div> 
                             </div> `;
                              

              document.querySelector("#myData").innerHTML=cartona              
                           

})



// async function apiSearchByNam(term) {
 
//     document.querySelector("#myData").innerHTML = ""
//     $(".container").fadeIn(300)

//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
//     response = await response.json()

//     response.meals ? displayMeals(response.meals) : displayMeals([])
//     $(".container").fadeOut(300)
    

// }








// $("input").on("input",function validate(element){
//     var regex ={
//         nameInput :/^[a-zA-Z ]+$/,
//         emailInput : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//         phoneInput : /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
//         ageInput : /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
//         passwordInput : /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
//     }
//     if(regex[Element.id].test(element.value)== true){
//         console.log(regex.test($#'phone').val());
//     }
// })




 // Define CSS styles dynamically
 const styles = `
 .result-item {
     display: flex;
     align-items: center;
     margin: 5px 0;
     padding: 10px;
     border: 1px solid #ddd;
 }
 .meal-image {
     max-width: 100px;
     max-height: 100px;
     margin-right: 10px;
 }
`;

// Create a <style> element and append the styles
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

$(".Search").on("click", function() {
 let cartona = `
     <div class="row py-4">
         <div class="col-md-6">
             <input id="searchByName" type="text" class="form-control bg-transparent text-white" placeholder="Search By Name">
         </div>
         <div class="col-md-6">
             <input id="searchByLetter" maxlength="1" type="text" class="form-control bg-transparent text-white" placeholder="Search By Letter">
         </div> 
     </div>`;
 $("#myData").html(cartona);

 $('#searchByName, #searchByLetter').on('keyup', function() {
     const nameQuery = $('#searchByName').val().toLowerCase();
     const letterQuery = $('#searchByLetter').val().toLowerCase();

     if (nameQuery || letterQuery) {
         let url = '';
         if (nameQuery) {
             url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nameQuery}`;
         } else if (letterQuery) {
             url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letterQuery}`;
         }

         // Make AJAX request to fetch data from the API
         $.ajax({
             url: url,
             method: 'GET',
             success: function(response) {
                 if (response.meals) {
                     displayResults(response.meals);
                 } else {
                     $("#resultsContainer").html('<div class="result-item">No results found</div>');
                 }
             },
             error: function(error) {
                 console.error('Error fetching data:', error);
             }
         });
     } else {
         $("#resultsContainer").html('');
     }
 });
});

function displayResults(meals) {
 let resultsHtml = '';
 meals.forEach(meal => {
     resultsHtml += `
         <div class="result-item">
             <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-image">
             <div>${meal.strMeal}</div>
         </div>`;
 });
 $("#resultsContainer").html(resultsHtml);
}


