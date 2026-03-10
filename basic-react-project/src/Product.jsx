import './Product.css'
function Product({title,price=1}){
//let disk=price>10000 ? "discount of 5%": "";
    return(
        <div className="Product">
    <h2>{title}</h2>
    <h5>Price: {price}</h5>
    
    {price>10000 && <p>discount of 5%</p>}
    </div>
    )
}



export default Product
