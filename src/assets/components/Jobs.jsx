import Job from "./Job";

const Jobs = () => {
  return (
    <div className="jobs">
      <Job
        className="red"
        title="Full Time Sales Associate - Sydney Boutique"
        contratType="CDI"
        country="Australia"
        city="Sydney"
      />

      <Job
        className="green"
        title="Agent de sécurité-Pantin"
        contratType="CDI"
        country="France"
        city="Pantin"
      />

      <Job
        className="yellow"
        title="Responsable d'Atelier"
        contratType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        className="blue"
        title="Chef de Projets"
        contratType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        className="pink"
        title="Develloppeur"
        contratType="CDI"
        country="France"
        city="Paris"
      />

      <Job
        className="red"
        title="Sales Associate Sctockholm"
        contratType="CDI"
        country="Suède"
        city="Sctockholm"
      />

      <Job
        className="green"
        title="Vendeur/se- Crans Montana"
        contratType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />

      <Job
        className="yellow"
        title="CRM & Data Quality Analyst"
        contratType="CDI"
        country="USA"
        city="New York"
      />

      <Job
        className="blue"
        title="Infirmière"
        contratType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  );
};

export default Jobs;
