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
    item.scrollLeft -= containerWidth;
    })
})
/* Home scroll button end  */
const crateFooter = () =>  {
    let footer = document.querySelector('footer');
    footer.innerHTML = '  <div class="fotter-content">
    <img src="84-Rock.png"  class="logo2" alt="">
    <div class="footer-ul-container">
    <ul class="category">
      <li class="category-title">Men</li>
    <li> <a href="#" class="footer-link"> T-Shirt </a></li>
    <li> <a href="#" class="footer-link"> SweatShirts </a></li>
    <li> <a href="#" class="footer-link"> Shirts</a></li>
    <li> <a href="#" class="footer-link"> jeans </a></li>
    <li> <a href="#" class="footer-link"> trousers </a></li>
    <li> <a href="#" class="footer-link"> casual</a></li>
    <li> <a href="#" class="footer-link">  formal</a></li>
    <li> <a href="#" class="footer-link"> sports </a></li>
    <li> <a href="#" class="footer-link"> watch </a></li>
    </ul>
    <ul class="category">
      <li class="category-title ">woman</li>
    <li> <a href="#" class="footer-link"> T-Shirt </a></li>
    <li> <a href="#" class="footer-link"> SweatShirts </a></li>
    <li> <a href="#" class="footer-link"> Shirts</a></li>
    <li> <a href="#" class="footer-link"> jeans </a></li>
    <li> <a href="#" class="footer-link"> trousers </a></li>
    <li> <a href="#" class="footer-link"> casual</a></li>
    <li> <a href="#" class="footer-link">  formal</a></li>
    <li> <a href="#" class="footer-link"> sports </a></li>
    <li> <a href="#" class="footer-link"> watch </a></li>
    </ul>
    </div>
      </div>
      <><p class="footer-title"> About Company</p><p class="info">www.84-rock.com is operated by 84-rock.com UK Limited (“We”).
              We are a company registered in England and Wales under company number 05724554 and with our registered office at 49/91 Dale Street,
              Manchester, England M1 2HF. Our UK VAT number is 185 1274 61. Our email address is customerservices@84-rock.com.
          </p><p class="info">Support email -help@clothing.com, customerSupport@clothing.com
              </p><p class="info"> Tel: 1800 111 222</p><div class="footer-social-container">
                  <div>
                      <a href="#" class="socual-link"> Terms & services</a>
                      <a href="#" class="socual-link"> Privacy Pages</a>
                  </div>
                  <div>
                      <a href="#" class="socual-link"> Instagram</a>
                      <a href="#" class="socual-link"> Facebook</a>
                      <a href="#" class="socual-link"> Twitter</a>
                  </div>
              </div><p class="footer-credit"> Clothing, Best apparels online store</p></>';
'; 
}
/* toogle size button */
const productImages = document.querySelectorAll(".product-image img");
const productImagesSlide = document.querySelector(".image-slider");
let activeImageSlide = 0;
productImages.forEach((item, i) =>{
  item.addEventListener('click',() =>{
productImages[activeImageSlide].classList.remove('active');
item.classList.add('active');
productImagesSlide.style.bacgroundImage = `url ('${item.src}')`;
activeImageSlide =i;
  })  
})
/* toggle size button */

/* s to xxl buttons*/
const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;
sizeBtns.forEach((item,i) =>{
    item.addEventListener('click', () => {
        sizeBtns[checkBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = 1;
    })
})

/*  s to xxl buttons end*/
