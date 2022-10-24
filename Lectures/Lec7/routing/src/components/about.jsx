import { Outlet } from "react-router-dom";
//use outlet for routing to the inner nested pages
const About = () => {
  return (
    <div>
      <h1>About the Company</h1>
      <Outlet />
    </div>
  );
};

export default About;
