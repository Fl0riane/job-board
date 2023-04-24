import "./App.css";
import Job from "./assets/components/Job";

const App = () => {
  return (
    <>
      <header>
        <div className=" title container">
          <h1 className="container">The Job Board</h1>
        </div>
      </header>
      <div className="jobs container">
        <div>
          <Job
            className="border-red"
            title="Full Time Sales Associate - Sydney Boutique"
            contratType="CDI"
            country="Australia"
            city="Sydney"
          />
        </div>
        <div>
          <Job
            className="border-green"
            title="Agent de sécurité-Pantin"
            contratType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
        <div>
          <Job
            className="border-yellow"
            title="Responsable d'Atelier"
            contratType="CDD"
            country="France"
            city="Paris"
          />
        </div>
        <div>
          <Job
            className="border-blue"
            title="Chef de Projets"
            contratType="CDD"
            country="France"
            city="Paris"
          />
        </div>
        <div>
          <Job
            className="border-pink"
            title="Develloppeur"
            contratType="CDI"
            country="France"
            city="Paris"
          />
        </div>
        <div>
          <Job
            className="border-red"
            title="Sales Associate Sctockholm"
            contratType="CDI"
            country="Suède"
            city="Sctockholm"
          />
        </div>
        <div>
          <Job
            className="border-green"
            title="Vendeur/se- Crans Montana"
            contratType="CDI"
            country="Suisse"
            city="Crans-Montana"
          />
        </div>
        <div>
          <Job
            className="border-yellow"
            title="CRM & Data Quality Analyst"
            contratType="CDI"
            country="USA"
            city="New York"
          />
        </div>
        <div>
          <Job
            className="border-blue"
            title="Infirmière"
            contratType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
      </div>
      <footer className="container">
        <h3>Made with React at le Reacteur By Floriane </h3>
      </footer>
    </>
  );
};

export default App;
