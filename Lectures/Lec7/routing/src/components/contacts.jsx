import { useParams } from "react-router-dom";
const Contacts = () => {
  const params = useParams();
  return (
    <div>
      <h1>Contacts</h1>
      <p>{params.name}</p>
      <p>{params.email}</p>
    </div>
  );
};

export default Contacts;
