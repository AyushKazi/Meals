import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onHideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      {cartIsShown && <Cart onClose={onHideCartHandler} />}
      <Header onShowCart={onShowCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
