async function loadWebsite() {

    const siteResponse = await fetch("data/site.json");
    const site = await siteResponse.json();


    const productsResponse = await fetch("data/products.json");
    const products = await productsResponse.json();


    console.log("Products:", products);
    console.log("Is array:", Array.isArray(products));


    // Update company information

    document.querySelector("h1").textContent =
        site.companyName;


    document.querySelector("header p").textContent =
        site.tagline;


    document.querySelector(".buttons a:first-child").href =
        "tel:" + site.phone;


    document.querySelector(".buttons a:nth-child(2)").href =
        "https://wa.me/" + site.whatsapp;



    // Update products

    const container = document.getElementById("products");

    container.innerHTML = "";


    products.forEach(item => {


        const card = document.createElement("div");

        card.className = "card";


        card.innerHTML = `

            <h3>
                ${item.category} ${item.grade}
            </h3>


            <p>
            <strong>ضخامت:</strong>
            ${item.thickness} میلی‌متر
            </p>


            <p>
            <strong>نوع:</strong>
            ${item.form}
            </p>


            <p>
            <strong>ابعاد:</strong>
            ${item.dimensions}
            </p>


            <p>
            <strong>کارخانه:</strong>
            ${item.factory}
            </p>


            <span class="badge">
                🟢 موجود
            </span>


            <br><br>


            <a class="price-btn" href="tel:${site.phone}">
    📞 تماس برای استعلام قیمت
</a>

        `;


        container.appendChild(card);


    });


}


loadWebsite();
