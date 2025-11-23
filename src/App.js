import './App.css';
import Landing from './pages/Landing';
import "font-awesome/css/font-awesome.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <div className="App">
      <Landing></Landing>
    </div>
  );
}

export default App;
