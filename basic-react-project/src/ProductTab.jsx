import Product from "./product.jsx";
function ProductTab(){
    //setiing default values 
     //let options=["durable","strong","efficient"];
    // let options1={a:"hi-tech",b:"new"};
    
    return(
       
        <>
       <Product title="laptop" price={20000} />
       <Product title="pen" price={20000}/>
       
       <Product title="pencil"/>

        </>
    )
}
export default ProductTab