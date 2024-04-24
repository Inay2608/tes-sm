import { useEffect, useState } from "react";
import { getResto, searchResto } from "../api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listResto, setlistResto] = useState([]);
  const [visible, setVisible] = useState(8);

  const navigate = useNavigate();

  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const showLess = () => {
    setVisible((prevValue) => prevValue - 4);
  };

  const searchNama = async (q) => {
    const query = await searchResto(q);
    setlistResto(query.restaurants);
  };

  useEffect(() => {
    getResto().then((data) => {
      setlistResto(data);
    });
  }, []);

  console.log(listResto);

  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-blue-950 w-full h-full">
          <div className="p-8">
            <h1 className="pb-3 text-white text-4xl text-center">Restaurant</h1>
            <p className="text-white text-sm text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <form className="max-w-lg mx-auto">
            <div className="flex">
              <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg    dark:bg-gray-500  dark:text-white dark:border-gray-600">
                Filter By
              </div>

              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Name"
                  onChange={({ target }) => searchNama(target.value)}
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="w-5 h-5"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 px-10">
            {listResto.slice(0, visible).map((item, i) => {
              console.log(item);
              return (
                <div
                  className="mt-20 mx-5 bg-white rounded-lg border border-gray-500 content-center"
                  key={i}
                >
                  <img
                    className="rounded-t-lg h-48"
                    alt=""
                    src={`https://restaurant-api.dicoding.dev/images/small/${item.pictureId}`}
                  />
                  <div className="px-5 pt-3 pb-5 bg-white text-black rounded-b-lg">
                    <h1 className="mb-2 text-xl font-bold">{item.name}</h1>
                    <h1 className="mb-3 font-normal truncate ...">
                      {item.description}
                    </h1>
                    <div className="mb-3 font-normal flex">
                      <svg
                        class="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.rating}
                      </p>
                    </div>
                    <p className="mb-3 font-normal">{item.city}</p>
                    <div className="flex justify-end ">
                      <button
                        href="#"
                        onClick={(e) => {
                          navigate(`/detail-resto/${item.id}`);
                        }}
                        className="px-3 py-1 rounded-full bg-blue-950 text-white font-bold border border-white"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-10">
            <button
              className="py-3 px-8 my-12 bg-red-400 rounded-full text-white text-md"
              onClick={showLess}
            >
              Load Less
            </button>
            <button
              className="py-3 px-8 my-12 bg-teal-600 rounded-full text-white text-md"
              onClick={showMore}
            >
              Load More
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
