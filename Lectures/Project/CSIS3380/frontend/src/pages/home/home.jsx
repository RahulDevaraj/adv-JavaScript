import LayoutApp from "../../components/Layout";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Col, Row } from "antd";
import Product from "../../components/Product";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Pizza");
  const categories = [
    {
      name: "Pizza",
      imageUrl:
        "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=1060&t=st=1670271828~exp=1670272428~hmac=0b8677ff23d5fcde6ba2bd13a3b36ae63ccddfe81ee7ba2297a577beaaae3207",
    },
    {
      name: "Burger",
      imageUrl:
        "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?w=1060&t=st=1670271853~exp=1670272453~hmac=be75a79bf4097d035e9eca6ba719f3f158741493a9ed205d187eee9b94e979fe",
    },
    {
      name: "Drink",
      imageUrl:
        "https://img.freepik.com/free-photo/fresh-watermelon-juice-glass_123827-22123.jpg?w=1060&t=st=1670271876~exp=1670272476~hmac=c8db9d887e7f26899dcb10053fbfe3954fe73c42aeacb5be166b8077ea3caa52",
    },
  ];

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        dispatch({ type: "SHOW_LOAD" });
        const { data } = await axios.get("/api/products/getproducts");
        setProductData(data);
        dispatch({ type: "HIDE_LOAD" });
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, [dispatch]);
  return (
    <LayoutApp>
      <div className="category">
        {categories.map((category) => (
          <div
            className={`categoryFlex ${
              selectedCategory === category.name && `category-active`
            }`}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
          >
            <h3 className="categoryName">{category.name}</h3>
            <img
              src={category.imageUrl}
              alt={category.name}
              height={70}
              width={70}
            />
          </div>
        ))}
      </div>
      <Row>
        {productData
          .filter((item) => item.category === selectedCategory)
          .map((product) => {
            return (
              <Col xs={24} sm={6} md={12} lg={6}>
                <Product product={product} key={product.id} />
              </Col>
            );
          })}
      </Row>
    </LayoutApp>
  );
};

export default Home;
