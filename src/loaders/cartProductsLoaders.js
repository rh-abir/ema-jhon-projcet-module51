import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();


    // if cart data is in database, you have to use async awit
    
    const storedCart = getShoppingCart();

    console.log(storedCart);

    const savedCart = [];

    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }

    } 

    // console.log(products);
    // if you need to seed tow things 

    // return [products, savedCart];
    // return {products, savedCart}
    return savedCart;
};


export default cartProductsLoader;;