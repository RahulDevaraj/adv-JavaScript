import Employee from "./employee";

const About = ({ employees, onDelete }) => {
  const employeeCount = employees.length;

  const nonActiveEmployees = employees.filter(
    (employee) => !employee.active
  ).length;

  if (employeeCount - nonActiveEmployees === 0) {
    return <h1>There are no employees to render</h1>;
  } else
    return (
      <div>
        <h6>About Page</h6>
        <p>
          Members of our team are Intermediate and/or Basic Rope Access skills
          which include IRATA* certified technicians. Making safety and training
          our #1 priority.
        </p>

        {employees
          .filter((employee) => employee.active)
          .map((employee) => {
            return (
              <Employee
                key={employee.id}
                name={employee.name}
                title={employee.title}
                city={employee.city}
                img={employee.img}
                onClick={() => onDelete(employee.id)}
              />
            );
          })}
      </div>
    );
};

export default About;
