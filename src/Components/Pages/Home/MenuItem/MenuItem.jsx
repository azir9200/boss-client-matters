


const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex space-x-2 ">

      <img style={{ borderRadius: '200px 0 0 0' }} className="w-[150px]" src={image} alt="" />
      <div>
        <h3 className="uppercase">  {name}........ </h3>
        <p>{recipe} </p>
      </div>
      <p className="text-orange-600">Price: {price} </p>
      <button className="btn btn-outline border-b-8 border-x-sky-500 text-green-400-700 font-bold" >Add to Cart</button>

    </div>
  );
};

export default MenuItem;