import './App.css';
import Navbar from './components/Navbar'
import data from './data'
import Pic from './components/Pic'


function App() {
  const pics = data.map(x => 
    <Pic title={x.title} source={x.source}/>)
  return (
    <div> 
      <Navbar />
      <section className="piclist">
        {pics}
      </section>
    </div>
  );
}

export default App;
