import "./App.css";

function App() {
  return (
    <div className="pin-container h-full w-screen">
      <section className="sticky top-0 h-screen bg-blue-500">
        First Page
      </section>
      <section className="sticky top-0 h-screen bg-black text-white">
        Second Page
      </section>
      <section className="sticky top-0 h-screen bg-yellow-500">
        Third Page
      </section>
    </div>
  );
}

export default App;
