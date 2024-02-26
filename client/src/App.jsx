import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Header } from './components/Header/Header';
import { Search } from './components/Search'; 
import { Main } from './components/Main/Main'; 

function App() {

  return (
    <body>
      <div className='dashboard'>
        <Search />
        <Header />
        <Main />
      </div>
    </body>
  )
}

export default App
