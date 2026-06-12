import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import HomeView from './views/homeView/HomeView';
import WorkshopsView from './views/WorkshopsView';
import TrainingsView from './views/TrainingsView';
import Upcoming from './views/Upcoming';
import ContactView from './views/ContactView';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={
          isHome ? 'fixed top-0 left-0 z-50 w-full' : 'relative w-full'
        }
      >
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/workshops" element={<WorkshopsView />} />
          <Route path="/training" element={<TrainingsView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* <footer></footer> */}
    </>
  );
}

export default App;
