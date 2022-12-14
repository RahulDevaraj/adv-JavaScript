const Employee = ({ name, title, city, img, onClick }) => {
  return (
    <div className="employee">
      <h1>{name}</h1>
      <button onClick={onClick}>Delete</button>
      <p>{title}</p>
      <p>{city}</p>
      <img src={img} width="200px" height="150px" />
    </div>
  );
};

export default Employee;
