import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
function App() {
  return (
    <div style={{overflow:'hidden'}}>
      <h2>Swiggy</h2>
      <NavigationBar />
      <Outlet /> 
    </div>
  )
}

export default App
