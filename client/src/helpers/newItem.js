export const newItem = async(item) => {
    
    const url = 'http://localhost:8080/shop/item';
    const resp = await fetch( url );
    const data = await resp.json();


}