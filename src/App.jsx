import Navbar from './components/Navbar'
import Card from './components/Card'
const App = () => {
  const a = 10
  const name = "Umaima Zainab"

  return (
    <>
      <div>
        <h1>Hello Umii {a}, {name}</h1>
        <button>Submit</button>
      </div>

      <Navbar />
    </>
  )
}

export default App
