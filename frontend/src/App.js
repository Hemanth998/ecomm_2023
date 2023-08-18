import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>App component</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
