function mouseOver(){//the  function leeter should be small
    console.log("the mouse hover");
}



export default function Button(){
    return (
        
        <div>
        
       <p onMouseOver={mouseOver}>mouse hoverred check</p>
       </div>
    )
}
