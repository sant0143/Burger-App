import './App.css';
import CreateBurger from './Burger/CreateBurger';
import { BurgerComponentEnum } from './Resources';

function App() {
  return (
    <div className="App">
      <CreateBurger
      burgerStack = {[
        BurgerComponentEnum.LETTUCE,
        BurgerComponentEnum.TOMOTOES,
        BurgerComponentEnum.CHEESE,
        BurgerComponentEnum.TOMOTOES,
        BurgerComponentEnum.TOMOTOES,
        BurgerComponentEnum.LETTUCE,

      ]}
      />

      {/* <BreadLower/>
      <BreadUpper/>
      <Cheese/>
      <Lettuce/>
      <Tomatoes/> */}


    </div>
  );
}

export default App;
