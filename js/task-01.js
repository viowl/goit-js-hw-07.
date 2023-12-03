const categories = document.getElementById('categories');

const arry = [...categories.children];

console.log(`Number of categories: ${arry.length}`);

arry.forEach((item) => {
    const categoryTitle = item.querySelector('h2').textContent;

    const categoryElements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryTitle}`);
    
    console.log(`Elements: ${categoryElements}`);
}
)

