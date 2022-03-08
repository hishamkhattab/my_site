import './App.css';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:project' element={<ProjectPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
