import "./App.css";
import "./assets/components/Job";

const App = () => {
  return (
    <>
      <header>
        <title>
          <h1>The Job Board</h1>
        </title>
      </header>
      <jobs>
        <Job
          className="border-red"
          title="Full Time Sales Associate - Sydney Boutique"
          contratType="CDI"
          country="Australia"
          city="Sydney"
        />
      </jobs>
    </>
  );
};

export default App;
