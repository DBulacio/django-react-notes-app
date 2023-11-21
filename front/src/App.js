import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <NotesListPage />
    </div>
  )
}

export default App;
