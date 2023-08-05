import './App.css';
import { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

const images = [
  "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/11013334/pexels-photo-11013334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/16962051/pexels-photo-16962051/free-photo-of-silhouette-of-a-mountain-against-evening-sky-with-the-moon-and-illuminated-cityscape.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/17836255/pexels-photo-17836255/free-photo-of-neblina-en-kuelap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/17815159/pexels-photo-17815159/free-photo-of-gruner-salamander-am-baum-bokeh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/17827715/pexels-photo-17827715/free-photo-of-ijsland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/13618658/pexels-photo-13618658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

function App() {

  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className="App">
      <h2 className='title'>Project 1 Carousel</h2>
      <div className='slider'>
        <div className='arrow' onClick={prevSlide}>
          <KeyboardBackspaceIcon/>
        </div>
        {images.map((image, index) => current === index && (
          <div key={image} className='slide'>
            <img src={image} alt='images'/>
          </div>
        ))}
        <div className='arrow' onClick={nextSlide}>
          <EastIcon/>
        </div>
      </div>
    </div>
  );
}

export default App;
