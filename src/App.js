
import { useState } from 'react';
import './App.css';


function App() {
  const [result,setResult] = useState("")
  console.log(result)

  const handleOnclick =(event)=>{
    setResult(result.concat(event.target.value))
  }

  const handleBackspace = () => {
    if (result.length > 0) {
     
      setResult(result.slice(0, -1));
    }
  };

  const handleToggleSign = () => {
    if (result !== '') {
      if (result[0] === '-') {  
        setResult(result.slice(1));
      } else {   
        setResult('-' + result);
      }
    }
  };



  const calc =()=>{
setResult(eval(result).toString())
  }
  const clearDisplay=()=>{
    setResult("")
  }
  return (
    <>

<div className="main">
    <input  value={result} className="display" type="text" placeholder='0'/>
    <input className='button grey' type="button" onClick={clearDisplay} value={"AC"}/>
    <button className='button grey fnt' onClick={handleBackspace}><i className="fnt fas fa-backspace"></i></button>
    <input className='button grey'type='button' onClick={handleToggleSign} value={"+/-"}/>
    <input className='button yellow' type='button' onClick={handleOnclick} value={"/"}/>

    <input className='button'type='button' onClick={handleOnclick} value={"7"}/>
    <input className='button'type='button' onClick={handleOnclick} value={"8"}/>
    <input className='button'type='button' onClick={handleOnclick} value={"9"}/>
    <input className='button yellow'type='button' onClick={handleOnclick} value={"*"}/>

    <input className='button'type='button' onClick={handleOnclick} value={"4"}/>
    <input className='button'type='button' onClick={handleOnclick} value={"5"}/>
    <input className='button'type='button' onClick={handleOnclick} value={"6"}/>
    <input className='button yellow'type='button' onClick={handleOnclick} value={"+"}/>

    <input className='button'type='button' onClick={handleOnclick} value={"1"}/>
    <input className='button'type='button' onClick={handleOnclick} value={"2"}/>
    <input className='button'type='button' onClick={handleOnclick} value={"3"}/>
    <input className='button yellow'type='button' onClick={handleOnclick} value={"-"}/>

    <input className='button equal'type='button' onClick={handleOnclick} value={"0"}/>
    <input className='button'type='button' onClick={handleOnclick} value={"."}/>
    <input className='button  white'type='button' onClick={calc} value={"="}/>
    
    </div>
    </>
  );
}

export default App;
