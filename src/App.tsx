import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import HomeView from "./views/homeView/HomeView";
import WorkshopsView from "./views/WorkshopsView";
import TrainingsView from "./views/TrainingsView";
import ContactView from "./views/ContactView";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/workshops" element={<WorkshopsView />} />
          <Route path="/training" element={<TrainingsView />} />
          <Route path="/contact" element={<ContactView />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* <footer></footer> */}
    </>
  );
}

export default App;
