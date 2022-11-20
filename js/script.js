const doc = document;
const productsEl = doc.querySelector('.products');
const cartEl = doc.querySelector('.cart');
const cartCountEl = doc.querySelector('.cart__count');
const cartProdList = [];
let cartCount = cartProdList.length;
// --------------------------------------

cartCountEl.innerText = cartCount != 0 ? `(${cartCount})` : ' EMPTY';
cartEl.onclick = showCart;

renderProducts(productsEl, products);

// FUNCTIONS -----------------------------
function renderProducts(parent, productList) {
    for (let product of productList) {
        renderProduct(parent, product);
    }
}

function renderProduct(parent, prodObj) {
    const product = doc.createElement('div');

    const productImgBlock = doc.createElement('div');
    const productImg = doc.createElement('img');

    const productTitle = doc.createElement('h3');

    const productPriceBlock = doc.createElement('div');
    const productPrice = doc.createElement('span');
    const addCartBtn = doc.createElement('button');

    product.className = 'product';
    product.dataset.id = prodObj.id;

    productImgBlock.className = 'product__img';
    productImg.setAttribute('src', `${IMG_PATH}/${prodObj.img}`);
    productImgBlock.append(productImg);

    productTitle.className = 'product__title';
    productTitle.innerText = prodObj.title;

    productPriceBlock.className = 'product__price-block';
    productPrice.className = 'product__price';
    productPrice.innerText = prodObj.price;
    addCartBtn.className = 'add-cart';
    addCartBtn.innerText = 'add to cart';
    addCartBtn.onclick = addProdToCart;
    productPriceBlock.append(productPrice, addCartBtn);

    product.append(
        productImgBlock,
        productTitle,
        productPriceBlock
    );

    parent.append(product);
}

function addProdToCart(e) {
    const id = e.target.closest('.product').dataset.id;

    cartProdList.push(id);
    cartCount = cartProdList.length;
    cartCountEl.innerText = `(${cartCount})`;
}

function showCart() {
    const cartPopup = doc.createElement('div');
    const cartPopupContentBlock = doc.createElement('div');
    const cartPopupContent = doc.createElement('div');

    cartPopup.className = 'cart-popup';

    cartPopupContentBlock.className = 'cart-popup__content-block';
    cartPopupContent.className = 'cart-popup__content';
    cartPopupContent.innerText = cartCount;

    cartPopupContentBlock.append(cartPopupContent);
    renderCloseBtn(cartPopupContentBlock, '.cart-popup');
    cartPopup.append(cartPopupContentBlock);

    doc.body.append(cartPopup);

    console.log(cartProdList);
}
function closeCart() {}

function renderCloseBtn(parent, closeParentSelector) {
    const closeBtn = doc.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&#x2715';
    parent.append(closeBtn);
    closeBtn.onclick = function() {
        const closeEl = this.closest(closeParentSelector);
        closeEl.remove();
    }
}

/*
cartProdEls = {
    1: 5,
    2: 3,
    3: 8,
    count: 16
};

*/