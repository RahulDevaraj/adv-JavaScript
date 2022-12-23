import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UpdateRecipe = ({ onUpdate }) => {
  //const { restid, name, location, imageUrl, reviews, rating } = useParams();
  const { _id } = useParams();

  const navigate = useNavigate();

  const [siteURL, setSiteURL] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [numberOfIngredients, setNumberOfIngredients] = useState("");
  const [calories, setCalories] = useState("");
  const [label, setLabel] = useState("");
  const [imageURL, setImageURL] = useState("");
  const getData = async () => {
    const url = "http://localhost:5000/api/getOne/" + _id;
    await axios.get(url).then((response) => {
      //  console.log(response.data);
      const {
        siteURL,
        cuisineType,
        numberOfIngredients,
        calories,
        label,
        imageURL,
      } = response.data;
      // console.log(response.data);

      setSiteURL(siteURL);
      setCuisineType(cuisineType);
      setNumberOfIngredients(numberOfIngredients);
      setCalories(calories);
      setLabel(label);
      setImageURL(imageURL);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    // update in the front end
    const updateObj = {
      _id: _id,
      siteURL: siteURL,
      cuisineType: cuisineType,
      numberOfIngredients: numberOfIngredients,
      calories: calories,
      label: label,
      imageURL: imageURL,
    };
    onUpdate(updateObj);
    setLabel("");
    setSiteURL("");
    setCuisineType("");
    setNumberOfIngredients("");
    setCalories("");
    setImageURL("");
    navigate("/");
  };

  return (
    <>
      <h1>Update details here..</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            id="imageURL"
            value={imageURL}
            readOnly={true}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="label">Recipe Label</label>
          <input
            type="text"
            id="label"
            value={label}
            readOnly={true}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            type="text"
            id="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="cuisinetype">Cuisine Type</label>
          <input
            type="text"
            id="cuisinetype"
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numberOfIngredients">Number of Ingredients</label>
          <input
            type="text"
            id="numberOfIngredients"
            value={numberOfIngredients}
            onChange={(e) => setNumberOfIngredients(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="siteURL">Site URL</label>
          <input
            type="text"
            id="siteURL"
            value={siteURL}
            readOnly={true}
            onChange={(e) => setSiteURL(e.target.value)}
          />
        </div>

        <button type="submit">Update The Recipe</button>
      </form>
    </>
  );
};

export default UpdateRecipe;
