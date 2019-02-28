function showSlide(slideNumber) {
    const slides = document.querySelector('.slider__inner').children;
    let currentSlideIndex;
    Array.prototype.forEach.call(slides, (slide, i) => {
        if (!slide.classList.contains('hidden')) {
            slide.classList.add('hidden');
            currentSlideIndex = i;
        }
    });
    let nextSlideIndex;
    if (currentSlideIndex >= slides.length-1) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }
    slides[nextSlideIndex].classList.remove('hidden');
}
setInterval(showSlide, 2000);

function fetchData() {
    // fetch('/script/data.json').then((payload)=>{
    //     console.log(payload);
    // })
    return new Promise((resolve, regect) => {
        resolve([
            {
                title: 'test',
                image: 'https://img.tyt.by/552x368c/n/zamirovskiy/03/a/27_ukraina_avtokefaliya_26022019_zam_tutby_phsl.jpg',
                price: 123
            },
            {
                title: 'test2',
                image: 'https://img.tyt.by/552x368c/n/zamirovskiy/03/a/27_ukraina_avtokefaliya_26022019_zam_tutby_phsl.jpg',
                price: 345
            }
        ])
    })
    
}

function onInit() {
    fetchData().then((data) => {
        renderProducts(data)
    })
}

function filterProducts() {
    
}

function renderProducts(products) {
    const productsSection = document.querySelector('.products')
    const productElements = products.map((product)=> {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'product');
        const image = document.createElement('img');
        image.setAttribute('src', product.image);
        const price = document.createElement('span');
        price.innerText = `${product.price}руб.`
        const title = document.createElement('p');
        title.innerText = product.title;

        wrapper.appendChild(image);
        wrapper.appendChild(price);
        wrapper.appendChild(title);

        return wrapper.outerHTML;
    })
    productsSection.innerHTML = productElements.join('');
}
window.onload = onInit;