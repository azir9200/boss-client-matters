import dessImg from '../../../../assets/menu/dessert-bg.jpeg'
import soapImg from '../../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import useMenu from "../../../../Hook/useMenu";
import MenuCategory from '../MenuCategory/MenuCategory'

const Menu = () => {
  const [menus] = useMenu();
  const dessert = menus.filter(item => item.category === 'dessert');
  const soap = menus.filter(item => item.category === 'soup');
  const salad = menus.filter(item => item.category === 'salad');
  const pizza = menus.filter(item => item.category === 'pizza');


  return (
    <div>

      {/* <Cover img={menuImg} title={"Our Menu"} ></Cover> */}

      <MenuCategory items={dessert} title="Dessert" img={dessImg} ></MenuCategory>
      <MenuCategory items={soap} title="Soap" img={soapImg} ></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladImg} ></MenuCategory>
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg} ></MenuCategory>

    </div>
  );
};

export default Menu;