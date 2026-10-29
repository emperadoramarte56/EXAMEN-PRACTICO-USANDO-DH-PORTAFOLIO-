import GalaxyBackground from "./components/GalaxyBackground.jsx";
import Hero from "./components/Hero.jsx";
import IDEWindow from "./components/IDEWindow.jsx";

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <GalaxyBackground />
      <Hero />
      <IDEWindow />
      <footer className="px-6 pb-16 text-center font-mono text-[0.78rem] text-slate-400">
        derek@ubuntu:~$ echo "hecho por mí, con curiosidad y muchas terminales abiertas"
      </footer>
    </div>
  );
}

export default App;
