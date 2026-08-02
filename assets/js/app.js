products.forEach(item => {

container.innerHTML += `

<div class="card">

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

<p style="margin-top:20px">

<a href="tel:${site.phone}">
📞 استعلام قیمت
</a>

</p>

</div>

`;

});
