const featuresproducts = document.getElementById('featuresproducts')

function getPro(){
    featuresproducts.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) => 
       {
        let removeBox = document.createElement('div')
        removeBox.className = 'remBox col-sm-12 col-md-6 col-lg-4 col-xl-4'
        removeBox.innerHTML = `
        <img src="${item.image}" alt="">
        <p>"${item.name}"</p>
        <p>"${item.price}"</p>
        <button onclick="removefrombasket(${index})">Remove from cart</button>
        `
        featuresproducts.appendChild(removeBox)
       }
    
     )
}
getPro();
function removefrombasket(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getPro()
}

