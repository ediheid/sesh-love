import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import HomeView from "./views/homeView/HomeView";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="/workshops"
            element={<div>this will be workshops view</div>}
          />
          <Route
            path="/training"
            element={<div>this will be training view</div>}
          />
          <Route
            path="/contact"
            element={<div>this will be contact view</div>}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* <footer></footer> */}
    </>
  );
}

export default App;
