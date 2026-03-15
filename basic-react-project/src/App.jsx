
import './App.css'
import Title from './Title.jsx';
import ProductTab from "./ProductTab";
import UserTab from "./UserTab.jsx"
import Button from "./Button"
import Form from "./Form.jsx"



function App() {

  return (
    //with fragment  for removing extra node
    
    <div>
    <h1>this is app component</h1>
    <p>inside a app component</p>
      <Title/>
      
      <p>2*2={2*2} here curlybraces  is used  for returning pure javascript</p>
      <p>using product tab</p>
      <ProductTab/>
      <h1>activity</h1>
      <UserTab/>
       <Button/>
       <p><b>OBJECT HANDLING</b></p>
       <Form/>
      </div>
    
    )
    
      
    
    
      
  }

  export default App
