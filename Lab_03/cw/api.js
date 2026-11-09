products = [];

async function getData() {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const res = await response.json();
        products = res.products.slice(0, 30);

        updateProducts(products);

    } catch (error) {
        console.error(error.message);
    }
}

function updateProducts(products) {
    productsContainer = document.getElementsByClassName("productsContainer")[0];

    productsContainer.innerHTML = "";

    products.forEach(product => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("product");

        const title = document.createElement("h3");
        title.innerHTML = product.title;

        const description = document.createElement("p");
        description.innerHTML = product.description;

        const image = document.createElement("img");
        image.src = product.thumbnail;
        image.alt = product.title;

        newDiv.appendChild(image);
        newDiv.appendChild(title);
        newDiv.appendChild(description);

        productsContainer.appendChild(newDiv);
    });
}

function filterAndSortProducts() {
    const filter = document.getElementById("filter").value.toLowerCase();
    const sortOption = document.getElementById("sort").value;

    let displayedProducts = [...products];

    displayedProducts = displayedProducts.filter(product =>
        product.title.toLowerCase().includes(filter) ||
        product.description.toLowerCase().includes(filter)
    );

    switch (sortOption) {
        case "asc":
            displayedProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;

        case "desc":
            displayedProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    updateProducts(displayedProducts);
}

getData();