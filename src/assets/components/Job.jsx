const Job = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <p>
        {props.contratType} - {props.country} - {props.city}
      </p>
    </div>
  );
};
export default Job;
