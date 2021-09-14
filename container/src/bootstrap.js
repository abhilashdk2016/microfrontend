import { mount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';
mount(document.querySelector("#products-prod"));
cartMount(document.querySelector('#cart-prod'));