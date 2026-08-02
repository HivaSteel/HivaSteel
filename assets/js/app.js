async function loadWebsite() {

    const site = await fetch("data/site.json")
        .then(r => r.json());

    const products = await fetch("data/products.json")
        .then(r => r.json());

    // Update page title
    document.querySelector("h1").textContent = site.companyName;

    document.querySelector("header p").textContent = site.tagline;

    // Update last update

    document.querySelector("main section p").textContent =
        site.lastUpdate;

    // Update phone

    const buttons = document.querySelectorAll(".buttons a");

    buttons[0].href = "tel:" + site.phone;

    buttons[1].href =
        "https://wa.me/" + site.whatsapp;

    // Products

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    products.forEach(item=>{

        container.innerHTML += `

<div class="card">

<h3>${item.product}</h3>

<p><strong>ضخامت:</strong> ${item.thickness}</p>

<p><strong>نوع:</strong> ${item.type}</p>

<p><strong>ابعاد:</strong> ${item.size}</p>

<p><strong>کارخانه:</strong> ${item.factory}</p>

<p>

<span class="badge">

🟢 ${item.status}

</span>

</p>

<p style="margin-top:18px;">

<a href="tel:${site.phone}">

📞 استعلام قیمت

</a>

</p>

</div>

`;

    });

}

loadWebsite();
