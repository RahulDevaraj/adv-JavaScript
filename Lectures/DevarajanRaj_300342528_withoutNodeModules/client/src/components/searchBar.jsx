import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ doSearch }) => {
  const [types, setTypes] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    //  console.log(title);
    //   bookSearch(title);
    //find seach is number or string
    //find type from select
    let search = {
      type: document.getElementById("cuisines").value,
      noi: document.getElementById("noi").value,
    };

    doSearch(search);
    document.getElementById("cuisines").selectedIndex = 0;
    document.getElementById("noi").selectedIndex = 0;
    navigate("/");

    // doSearch(search);

    // setSearch("");
  };

  return (
    <>
      <form onSubmit={submit}>
        <label for="cars">Select a cuisine Type:</label>

        <select name="types" id="cuisines">
          <option value="ANY">ANY</option>
          <option value="italian">italian</option>
          <option value="mexican">mexican</option>
          <option value="american">american</option>
          <option value="nordic">nordic</option>
          <option value="french">french</option>
          <option value="mediterranean">mediterranean</option>
          <option value="asian">asian</option>
        </select>
        <select name="noi" id="noi">
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
