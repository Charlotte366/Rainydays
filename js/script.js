const url ="https://rainydays.charlotte366.no/wp-json/wc/store/products/";

const proxy = "https://noroffcors.herokuapp.com/"; 

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");





async function fetchCategories(){
    
 
        const response = await fetch (corsFix);

        const results = await response.json();

        const categories = results.categories;

        resultsContainer.innerHTML ="";

        console.log(results);

        let html="";

        for (let i = 0; i < categories.length; i++) {
            console.log(categories[i].strCategory);
            html +=  `<div class="category">
            <h2><a href="details.html?category=${categories[i].strCategory}"> ${categories[i].strCategory} </a></h2>
                        <p>id:${categories[i].idCategory}</p>
                        <p>Description: ${categories[i].strCategoryDescription}</p>
                        </div>
                        `;


            resultsContainer.innerHTML = html;

        }
    
        
 
    }

fetchCategories();