import './App.css'
import LoginForm from './components/LoginForm';
import PostMovieForm from './components/PostMovieForm';
import RegForm from './components/regForm';

function App() {
  return (
    <div className="app">
      <RegForm />
      <LoginForm />
      <PostMovieForm />
    </div>
  )
}

export default App
