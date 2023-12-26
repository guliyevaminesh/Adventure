const featuresproduct = document.getElementById('featuresproduct')
const viewmore = document.getElementById('viewmore')
const proKind = document.getElementById('proKind')
const productform = document.getElementById('productform')
const customerEmail = document.getElementById('customerEmail')
const customerpassword = document.getElementById('customerpassword')


function getProducts(){
    let page = 1
    let limit = 6
    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}`)
    .then(res =>{
        products = res.data
        products.map(item =>{
            let product = document.createElement('div')
            product.className = 'proBox col-sm-12 col-md-6 col-lg-4 col-xl-4'
            product.innerHTML = `
            <img src="${item.image}" alt="">
            <p>"${item.name}"</p>
            <p>"${item.price}"</p>
            <button onclick="addtoBaskett(${item.id})">Add to cart</button>
            `
            featuresproduct.appendChild(product)
        })
        page++
    })
}

getProducts();
viewmore.addEventListener('click',getProducts)

function addtoBaskett(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(products.find(item => item.id == id))
    localStorage.setItem('cart',JSON.stringify(cart))
}

function sortedProduct(){
featuresproduct.innerHTML = ''
let selectvalue = proKind.value

if(selectvalue === "1"){
    let page = 1
    let limit = 6
    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}`)
    .then(res =>{
        products = res.data
        let sortedProduct = products.sort((a,b) => a.price - b.price)
        sortedProduct.map(item =>{
            let product = document.createElement('div')
            product.className = 'proBox col-sm-12 col-md-6 col-lg-4 col-xl-4'
            product.innerHTML = `
            <img src="${item.image}" alt="">
            <p>"${item.name}"</p>
            <p>"${item.price}"</p>
            <button onclick="addtoBaskett(${item.id})">Add to cart</button>
            `
            featuresproduct.appendChild(product)
        })
        page++
    })
}
}
proKind.addEventListener('change',sortedProduct)

function sortedProducts(){
    featuresproduct.innerHTML = ''
    let selectvalue = proKind.value
    
    if(selectvalue === "2"){
        let page = 1
        let limit = 6
        axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}`)
        .then(res =>{
            products = res.data
            let sortedProduct = products.sort((a,b) => b.price - a.price)
            sortedProduct.map(item =>{
                let product = document.createElement('div')
                product.className = 'proBox col-sm-12 col-md-6 col-lg-4 col-xl-4'
                product.innerHTML = `
                <img src="${item.image}" alt="">
                <p>"${item.name}"</p>
                <p>"${item.price}"</p>
                <button onclick="addtoBaskett(${item.id})">Add to cart</button>
                `
                featuresproduct.appendChild(product)
            })
            page++
        })
    }
    }
    proKind.addEventListener('change',sortedProducts)

productform.addEventListener('submit',function(event){
    event.preventDefault();
    axios.post('https://65680f2a9927836bd97406ef.mockapi.io/food/products',{
        customerEmail:customerEmail.value,
        customerpassword:customerpassword.value
    })
})



