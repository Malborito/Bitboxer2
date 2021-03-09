export const getItems = async() => {

    const url = 'http://localhost:8080/shop/items';
    const resp = await fetch( url );
    const data = await resp.json();

    const items = data.map(item => {
        return {
            id : item.id_item,
            code : item.code_product,
            description : item.description,
            price : item.price,
            state : item.state,
            suppliers : item.suppliers
            .map( sp => {
                    return {
                        id_supplier : sp.id_supplier,
                        name: sp.name ,
                        country: sp.country,
                    }
                }),
            pricereductions : item.pricereductions,
            creation : item.creation,
            creator : item.creator
        }
    })
    return (items);
}