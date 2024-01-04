import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className='pt-8'>

      {
        title && <Cover img={img} title={title} ></Cover>
      }
      <h2 className="text-emerald-500 text-2xl text-center border-b-4  my-8 mx-auto  border-rose-700">Check Our Delicious Dishes..</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 m-8 gap-12'>
        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-R-8 border-x-red-500 text-yellow-400-700 font-bold" >Place Order</button>
      </Link>



    </div>
  );
};

export default MenuCategory;