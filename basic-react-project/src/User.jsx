

function User({user,color}){
    let styles={color:color}
    
    return (
        <div className="user" style={styles}>
        <h1>{user}</h1>
        
        </div>
    )
};
export default User