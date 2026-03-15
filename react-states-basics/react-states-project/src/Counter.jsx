
export default function Counter(){
     let count=0;
    function Count(count){
             count+=1;
             return console.log(count);
}

    return(
        
        <div>
        <p>count={count}</p>
        <button onclick={Count}>increase</button>
        </div>
    )
}