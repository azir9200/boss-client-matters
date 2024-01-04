import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios';

const FoodCard = ({ item }) => {

  const { _id, name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();



  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log(user)

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axios.post('http://localhost:5000/carts', cartItem)
        .then(res => {
          console.log(res.data)
        })
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} added to your cart`,
        showConfirmButton: false,
        timer: 1500
      });

    }
    else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      })

        .then((result) => {
          if (result.isConfirmed) {
            navigate('/login', { state: { from: location } })
          }
        });

    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className="absolute bg-yellow-400  font-extrabold rounded-lg text-xl mr-4 right-0  px-6 mt-6 " >$ {price} </p>
      <div className="card-body">
        <h2 className="card-title">{name} </h2>
        <p>{recipe} </p>


        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-b-8 border-x-sky-500 text-green-400-700 font-bold" >Add Cart</button>

        </div>


      </div>
    </div>
  );
};

export default FoodCard;