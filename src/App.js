import Banner from './components/Banner.js';
import Info from './components/Info.js';
import Fotky from './components/Fotky.js';
import TimelineComp from './components/TimelineComp.js';
import Harmonogram from './components/Harmonogram.js';
import StartList from './components/StartList.js';
import Charakterizace from './components/Charakterizace.js';
import Pravidla from './components/Pravidla.js';
import Kontakt from './components/Kontakt.js';



import Empty from './components/Empty.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <Charakterizace />
      <Pravidla />
      <Info />
      
      <TimelineComp />
      <Harmonogram />
      <StartList />
      <Fotky />
      
      <Empty />
      <Kontakt />
    </div>
  );
}

export default App;
