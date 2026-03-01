
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries' 


const countriesPromise =fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())


function App() {
  // const [count, setCount] = useState(0)
function handleClick (){
  alert("I am")
}


  return (
    <>
      <Suspense fallback={<p>On The Goo.....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
