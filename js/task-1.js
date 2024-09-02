const categories = document.querySelectorAll('li.item');
const catLength = categories.length;
console.log("Number of categories:", catLength);


categories.forEach(element => {
    const categoryTitle = element.querySelector('h2').textContent;

    const elementsCount = element.querySelectorAll("ul>li").length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsCount}`);
})


