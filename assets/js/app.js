async function loadWebsite() {

    const response = await fetch("data/products.json");

    const products = await response.json();

    console.log(products);
    console.log(Array.isArray(products));

}

loadWebsite();
