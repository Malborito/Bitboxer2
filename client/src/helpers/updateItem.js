export const updateItem = async(item) => {
    
    const url = 'http://localhost:8080/shop/item';

    const bodyRaw= JSON.stringify({ 
        id_item: item.id,
        code_product: String(item.code),
        description: item.description,
        price: Number(item.price),
        state: item.state,
        suppliers: item.suppliers,
        priceReductions: [],
        creation: item.creation,
        creator: item.creator 
    });

    const resp = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: bodyRaw // body data type must match "Content-Type" header
      });

    return (resp.ok);
}