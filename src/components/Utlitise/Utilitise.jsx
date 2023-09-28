// save data to local storage

const addToDB=()=>{

    let shoppingCart= getShoppingCart();
    const quantity= shoppingCart[id]
    if (!quantity){
        shoppingCart[id]=1
    }
    else{
        const newQuantity= quantity+1
        shoppingCart[id]= newQuantity;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart) )

}

export default addToDB 