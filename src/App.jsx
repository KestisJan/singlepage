import './App.css';
import SmallHeader from '../src/Components/SmallHeader';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Vision from './Components/Vision';
import Innovation from './Components/Innovation';
import Aluminium from './Components/Aluminium';
import Iconbar from './Components/Iconbar';


function App() {


  return (
    <div className="App">
      <SmallHeader/>
      <Navbar/>
      <Content/>
      <Vision/>
      <Innovation/>
      <Aluminium/>
      <Iconbar/>
    </div>
  );
}

export default App;
