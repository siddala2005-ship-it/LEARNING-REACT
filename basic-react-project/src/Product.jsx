import './Product.css'
/*function Product({title,price=1}){
//let disk=price>10000 ? "discount of 5%": "";
//dynamic styling 
let styles={backgroundColor:"pink"};
    return(
        <div className="Product" style={styles}>
    <h2>{title}</h2>
    <h5>Price: {price}</h5>
    
    {price>10000 && <p>discount of 5%</p>}
    </div>
    )
}*/
/*
//for paticular line
function Product({title,price=1}){
//let disk=price>10000 ? "discount of 5%": "";
//dynamic styling 
let styles={backgroundColor:"pink"};

    return(
        <div className="Product">
    <h2 style={styles}>{title}</h2>
    <h5>Price: {price}</h5>
    
    {price>10000 && <p>discount of 5%</p>}
    </div>
    )
}*/
//type:for condition based
function Product({title,price=1}){
//let disk=price>10000 ? "discount of 5%": "";
//dynamic styling 
let styles={backgroundColor:price>10000? "pink":"yellow"};

    return(
        <div className="Product" style={styles}>
    <h2>{title}</h2>
    <h5>Price: {price}</h5>
    
    {price>10000 && <p>discount of 5%</p>}
    </div>
    )
}


export default Product
