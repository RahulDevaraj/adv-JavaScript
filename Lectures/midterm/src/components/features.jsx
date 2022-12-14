import AddEmployee from "./addEmployee";

const Features = ({ onAdd }) => {
  return (
    <div>
      <h6>You can add new employee information on this page</h6>
      <AddEmployee onAdd={onAdd} />
    </div>
  );
};

export default Features;
