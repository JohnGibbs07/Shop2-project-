
/* Home best selling scroll button */
const productContainer = [...document.querySelectorAll('.product-container')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];

productContainer.forEach((item, i) => {
let containerDimenstions = item.getBoundingClientRect();
let containerWidth = containerDimenstions.width;

nxtBtn [i].addEventListener('click', () => {
item.scrollLeft += containerWidth;
})

preBtn [i].addEventListener('click', () => {
    item.scrollleft -= containerWidth;
    })
})
/* Home scroll button end  */