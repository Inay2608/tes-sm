import { useEffect, useState } from "react";
import { getDetailResto } from "../api";

function DetailResto() {
  const [detailResto, setDetailResto] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [menusFood, setMenusFood] = useState([]);
  const [menusDrink, setMenusDrink] = useState([]);

  const id = window.location.pathname.split("/")[2];
  console.log(id);

  useEffect(() => {
    const idResto = async (id) => {
      const query = await getDetailResto(id);
      setDetailResto(query);
      setCategories(query.categories);
      setReviews(query.customerReviews);
      setMenusFood(query.menus.foods);
      setMenusDrink(query.menus.drinks);
      console.log(query);
    };

    idResto(id);
  }, []);

  return (
    <div className="bg-blue-950 w-screen h-full text-white">
      <div className="flex gap-16 justify-between pt-10  px-10">
        <div className="basis-1/3">
          <img
            className="w-96 rounded-md"
            src={`https://restaurant-api.dicoding.dev/images/medium/${detailResto.pictureId}`}
          />
        </div>

        <div className="basis-1/3">
          <h1 className="text-3xl font-semibold text-center">
            {detailResto.name}
          </h1>
          <h1 className="text-center">
            {detailResto.address}, {detailResto.city}
          </h1>

          <h1 className="pt-12 font-bold">Rating : {detailResto.rating}</h1>
          <h1 className="pt-6 font-bold">Categories</h1>
          {categories.map((item, i) => {
            return <h1 className="pl-6">{item.name}</h1>;
          })}
        </div>

        <div className="basis-1/3">
          <h1 className="text-3xl font-semibold text-center">Menu</h1>
          <div className="mt-2 flex flex-col">
            <div className="basis-1/2 flex justify-center">
              <div>
                <h1 className="text-lg font-semibold pb-2 text-center">Food</h1>
                <div className="flex flex-wrap justify-center">
                  {menusFood.map((item, i) => {
                    return (
                      <>
                        <p className="">{item.name} </p>
                        <p>,</p>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center basis-1/2">
              <div>
                <h1 className="text-lg font-semibold text-center mt-3">
                  Drink
                </h1>
                <div className="flex flex-wrap justify-center">
                  {menusDrink.map((item, i) => {
                    return (
                      <>
                        <p className="">{item.name} </p>
                        <p>,</p>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-10 pt-5">
        <p className="text-center text-sm">{detailResto.description}</p>
      </div>

      <div className="py-10">
        <h1 className="text-3xl font-semibold text-center">Reviews Customer</h1>

        <div className="pt-10 flex flex-row justify-center gap-2  p-3">
          {reviews.map((item, i) => {
            return (
              <div className="p-2 border border-white" key={i}>
                <h1 className="font-bold mb-1">{item.name}</h1>
                <h1>{item.review}</h1>
                <h1 className="text-end text-sm mt-2 text-gray-500">
                  {item.date}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailResto;
