const products = [
    {
        id: "1",
        name: "RLC Silver",
        price: 420,
        category: "Sabanas",
        img: 'https://www.lionrollingcircus.com/img_grandes/20210119180413-4.jpg',
        stock: 25,
        description: "Sabanas blanqueadas",
    },
    {
        id: "2",
        name: "RLC Blunt",
        price: 550,
        category: "Blunts",
        img: 'https://www.lionrollingcircus.com/img_grandes/20220124162209-34.jpg',
        stock: 25,
        description: "Blunts con sabor",
    },
    {
        id: "3",
        name: "Charola",
        price: 150,
        category: "Otros",
        img: 'https://m.media-amazon.com/images/I/81H9Z57UaqL._AC_UF1000,1000_QL80_.jpg',
        stock: 25,
        description: "Charola con tapa magnetica",
    },
]

export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}