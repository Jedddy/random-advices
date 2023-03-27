import './App.css'
import NavBar from './components/NavBar/NavBar'
import AdvicePanel from './components/AdvicePanel/AdvicePanel'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <AdvicePanel />
      </div>
    </div>
  )
}

export default App
