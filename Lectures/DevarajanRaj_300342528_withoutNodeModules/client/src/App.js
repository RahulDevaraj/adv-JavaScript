import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import "./styles.css";
import NavBar from "./components/navBar";
import Header from "./components/header";
import Footer from "./components/footer";
import UpdateRecipe from "./components/updateRecipe";
import SearchBar from "./components/searchBar";

function App() {
  const [dataInit, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&q=veg&app_id=b9ab32f9&app_key=9c6a054dc99da72e097fa247635cd913&mealType=Lunch&diet=low-carb&ingr=2-5&imageSize=SMALL"
      )
      .then((res) => {
        // console.log(res.data.hits);
        const data = res.data.hits;
        // console.log(data);

        const dataArr = data.map((item) => {
          return {
            label: item.recipe.label,
            imageURL: item.recipe.images.SMALL.url,
            calories: item.recipe.calories,
            cuisineType: item.recipe.cuisineType[0],
            numberOfIngredients: item.recipe.ingredients.length,
            siteURL: item.recipe.url,
          };
        });

        axios.delete("http://localhost:5000/deleteAll").then((res) => {
          console.log("deleted all data");
        });
        //  console.log(dataArr);
        //add data to db

        axios.post("http://localhost:5000/addAll", dataArr).then((res) => {
          console.log("data added to db");
          console.log(res.data);
          setData(res.data);
          console.log(dataInit);
        });
      });
  }, []);

  const handleDelete = async (id) => {
    const url = "http://localhost:5000/api/deleteOne/" + id;
    await axios.delete(url);

    const newData = dataInit.filter((each) => {
      return each._id !== id;
    });
    setData(newData);
    console.log("Deleted");
  };
  const handleUpdate = async (obj) => {
    // console.log(obj);

    const url = "http://localhost:5000/api/updateRecipe/" + obj._id;
    await axios.put(url, obj);
    const newRecipes = await dataInit.map((recipe) => {
      if (recipe._id === obj._id) {
        //console.log(obj.rating);
        return obj;
      } else {
        return recipe;
      }
    });
    setData(newRecipes);
  };
  const handleSearch = (searchTerm) => {
    let newData;

    if (searchTerm.type === "ANY") {
      newData = dataInit.filter((each) => {
        if (Number(each.numberOfIngredients) === Number(searchTerm.noi)) {
          console.log(true);
          return each;
        }
      });
    } else {
      newData = dataInit.filter((each) => {
        if (
          each.numberOfIngredients === Number(searchTerm.noi) &&
          each.cuisineType === searchTerm.type
        )
          return each;
      });
    }
    setData(newData);
  };
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SearchBar doSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={<Home recipeList={dataInit} onDelete={handleDelete} />}
        />
        <Route
          path="/updateRecipe/:_id"
          element={<UpdateRecipe onUpdate={handleUpdate} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
