const url = "https://rainydays.charlotte366.no/wp-json/wc/store/products"

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");




async function fetchProducts() {


    const response = await fetch(corsFix);

    const results = await response.json();

    const products = results.products;

    resultsContainer.innerHTML = "";

    console.log(results);

    let html = "";

    for (let i = 0; i < products.length; i++) {
        console.log(products[i].strCategory);
        html += `<div class="category">
            <h2><a href="details.html?category=${products[i].strCategory}"> ${products[i].strCategory} </a></h2>
                        <p>id:${products[i].idCategory}</p>
                        <p>Description: ${products[i].strCategoryDescription}</p>
                        </div>
                        `;


        resultsContainer.innerHTML = html;

    }



}

fetchProducts();