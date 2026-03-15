function submit(event){
    event.preventDefault()
    console.log("subbmitted");
}



export default  function Form(){
    return (
        <form onSubmit={submit}>
         <input></input>
         <button>click</button>
        </form>

    )
}