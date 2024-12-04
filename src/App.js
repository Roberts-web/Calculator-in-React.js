
import { useState } from 'react';
import './App.scss';
import MyButton from './Components/MyButton';

function App() {

  // colors
  const number = "rgb(0, 0, 0)"
  const symbols = "rgb(55, 55, 55)"
  const dels = "rgb(55, 55, 55)"

  const [newText, setNewText] = useState("")
  const [newResult, setNewResult] = useState("")

  const opt = ['/', '+', '-', '*']

  const handleChange = (e) => {
    setNewText(e.target.value)
  }

  //adding new symbols

  const addNew = (symbol) => {
    if(newText.length === 0 && opt.includes(symbol)){
      return
    } else if (opt.includes(symbol) && opt.includes(newText.slice(-1))){
      return
    }
    setNewText((prevText) => prevText + symbol)
  }

  // make result

  const makeResult = () => {
    if(newText.length === 0) {
      return 
    } 
      setNewText(eval(newText).toString())
      setNewResult(eval(newText).toString())

    
  }

  const delAll = () => {
    setNewText("")
    setNewResult("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='calcWrapper'>
          <div className='inputs'>
            <input type="text" value={newResult}/>
            <input type="text" value={newText} onChange={handleChange} />

          </div>
          <div className='calculator'>
            <div className='row'>
              <MyButton symbol={7} handleClick={addNew} colored={number}/>
              <MyButton symbol={8} handleClick={addNew} colored={number}/>
              <MyButton symbol={9} handleClick={addNew} colored={number}/>
              <MyButton symbol={"/"} handleClick={addNew} colored={symbols}/>
            </div>
            <div className='row'>
              <MyButton symbol={4} handleClick={addNew} colored={number}/>
              <MyButton symbol={5} handleClick={addNew} colored={number}/>
              <MyButton symbol={6} handleClick={addNew} colored={number}/>
              <MyButton symbol={"*"} handleClick={addNew}colored={symbols}/>
            </div>
            <div className='row'>
              <MyButton symbol={1} handleClick={addNew} colored={number}/>
              <MyButton symbol={2} handleClick={addNew} colored={number}/>
              <MyButton symbol={3} handleClick={addNew} colored={number}/>
              <MyButton symbol={"+"} handleClick={addNew}colored={symbols}/>
            </div>
            <div className='row'>
              <MyButton symbol={0} handleClick={addNew} colored={number}/>
              <MyButton symbol={"."} handleClick={addNew} colored={number}/>
              <MyButton symbol={"="} handleClick={makeResult} colored={symbols}/>
              <MyButton symbol={"-"} handleClick={addNew} colored={symbols}/>
            </div>
            <div className='row'>
              <MyButton symbol={"DEL"} handleClick={delAll} colored={dels}/>
              <MyButton symbol={"<-"} colored={dels}/>
              
            </div>
            
          </div>

        </div>
      
      </header>
    </div>
  );
}

export default App;
