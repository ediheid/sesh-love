import NavBar from "./components/navigation/NavBar";
import HomeView from "./views/homeView/HomeView";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </header>

      <main>
        <HomeView />
      </main>
      {/* <footer></footer> */}
    </>
  );
}

export default App;
