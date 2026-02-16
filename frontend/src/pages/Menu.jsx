import { useEffect, useState } from "react";
import { fetchMenu } from "../services/api";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu().then(res => setMenu(res.data));
  }, []);

  return (
    <>
      <div className="header">
        <h1>Indian Restaurant</h1>
        <p>Authentic Indian Cuisine</p>
      </div>

      <h2>Our Menu</h2>

      <div className="menu-grid">
        {menu.map(item => (
          <div className="card" key={item._id}>
            <img
              src={`/assets/${item.image}`}
              alt={item.name}
              className="menu-img"
            />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <strong>₹{item.price}</strong>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
