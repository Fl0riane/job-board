import "./App.css";

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Jobs from "./assets/components/Jobs";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Jobs />
      <Footer />
    </div>
  );
};

export default App;
