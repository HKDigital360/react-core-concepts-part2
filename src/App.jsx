
import './App.css'
import Countries from './components/countries/countries' 

function App() {
  // const [count, setCount] = useState(0)
function handleClick (){
  alert("I am")
}


  return (
    <>
      <Countries></Countries>
      
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
