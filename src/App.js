import Header from './header/Header';
import './App.css';
import Main from './main/Main';
import Read from './components/read/Read';

function App() {
  return (
      <div className='parent-container'>
        <Header/>
        <Main/>
        <Read />
        
      </div>
  );
}

export default App;


