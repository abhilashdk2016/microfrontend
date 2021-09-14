import faker from 'faker';

const mount = (el) => {
    let products = '';

    for(let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products;
}

// If this app is running in isolation
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    // Assuming that #dev-products only exists in products while it is running in isolation
    if(el) {
        mount(el);
    }
}

// If we are running this code in  a container, then export the mount function, rather than rendering the app
export { mount };