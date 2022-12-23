import { Link } from "react-router-dom";
import { FaCartPlus, FaEdit, FaTrash } from "react-icons/fa";

const Home = ({ recipeList, onDelete }) => {
  return (
    <div className="recipes">
      {recipeList.map((recipe) => {
        return (
          <div className="recipe" key={recipe._id}>
            <img
              src={recipe.imageURL}
              style={{ width: "100px", height: "100px" }}
              alt="recipe"
            />

            <h3>{recipe.label}</h3>
            <h4>{recipe.cuisineType}</h4>
            <h5>{recipe.calories}</h5>

            <FaCartPlus>
              <sup>{recipe.numberOfIngredients}</sup>
            </FaCartPlus>
            <h3>{recipe.numberOfIngredients}</h3>
            <p>{recipe.siteURL}</p>
            <Link to={"/updateRecipe/" + recipe._id}>
              <FaEdit />
            </Link>
            <Link>
              <FaTrash onClick={() => onDelete(recipe._id)} />
            </Link>

            {/* //   <div className="restaurant" key={restaurant._id}>
        //     <p>{restaurant.restid}</p>
        //     <h2>{restaurant.name}</h2>
            
        //     <h3>{restaurant.location}</h3>
        //     <h6>{restaurant.reviews}</h6>
        //     <StarRating selectedStars={restaurant.rating} />
        //     <Link to={"/updateRestaurant/" + restaurant._id}>
        //       <FaEdit />
        //     </Link>
        //     <FaTrash onClick={() => onDelete(restaurant._id)} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
