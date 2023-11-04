import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [mealTypes, setMealTypes] = useState([]);
  let [placeHolderText, setPlaceHolderText] = useState("Get a location");
  let [locations, setLocations] = useState([]);
  let [restaurantList, setRestaurantList] = useState([]);
  // create instance of navigate
  let navigate = useNavigate();
  let getMealTypes = async () => {
    try {
      let url = `http://localhost:3030/api/get-meal-type-list`;
      let response = await fetch(url, { method: "GET" });
      //get data
      let data = await response.json();
      setMealTypes(data.result);
    } catch (error) {
      alert("Server Error");
    }
  };

  let getLocationList = async () => {
    try {
      setPlaceHolderText("Getting Location list ...");
      setRestaurantList([]);
      let url = `http://localhost:3030/api/get-locations-list`;
      let response = await fetch(url, { method: "GET" });
      //get data
      let data = await response.json();
      setLocations(data.result);
      setPlaceHolderText("Here is location list");
    } catch (error) {
      setPlaceHolderText("Fail get location, try again");
    }
  };

  let getRestaurantListByLocationId = async (id, name, city) => {
    try {
      let url = `http://localhost:3030/api/get-restaurant-list-by-location-id/${id}`;
      let response = await fetch(url, { method: "GET" });
      //get data
      let data = await response.json();
      console.log(data);
      if (data.result.length === 0) {
        alert("No restaurant available in this location");
      }
      setPlaceHolderText(`${name}, ${city}`);
      setLocations([]);
      setRestaurantList(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  // call api on component load
  // mounting
  useEffect(() => {
    getMealTypes();
  }, []); // [] ==> list od state

  return (
    <>
      <section className="row main-section align-content-start">
        <header className="col-12 py-3">
          <div className="container d-lg-flex justify-content-end d-none">
            <button className="btn text-white me-3">Login</button>
            <button className="btn text-white border border-white">
              Create an account
            </button>
          </div>
        </header>
        <section className="col-12 d-flex flex-column align-items-center justify-content-center">
          <p className="brand-name fw-bold my-lg-2 mb-0">e!</p>
          <p className="h1 text-white my-3 text-center">
            Find the best restaurants, cafés, and bars
          </p>
          <div className="search w-50 d-flex mt-3">
            <section className="w-50 location-list">
              <input
                type="text"
                className="form-control mb-3 mb-lg-0 w-100 me-lg-3 py-2 px-3"
                placeholder={placeHolderText}
                readOnly
                onFocus={getLocationList}
              />
              <ul className="list-group w-100">
                {locations.map((loc) => {
                  return (
                    <li
                      className="list-group-item"
                      onClick={() =>
                        getRestaurantListByLocationId(
                          loc.location_id,
                          loc.name,
                          loc.city
                        )
                      }
                      key={loc._id}
                    >
                      {loc.name}, {loc.city}
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="w-75 location-list">
              <div className="w-100 input-group">
                <span className="input-group-text bg-white">
                  <i className="fa fa-search text-primary"></i>
                </span>
                <input
                  type="text"
                  className="form-control py-2 px-3"
                  placeholder="Search for restaurants"
                  readOnly
                />
              </div>
              <ul className="list-group w-100">
                {restaurantList.map((restaurant) => {
                  return (
                    <li
                      className="list-group-item"
                      key={restaurant._id}
                      onClick={() => navigate("/restaurant/" + restaurant._id)}
                    >
                      <img
                        src={`/images/${restaurant.image}`}
                        alt=""
                        className="me-2"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "20px",
                        }}
                      />
                      {restaurant.name}, {restaurant.city}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </section>
      </section>
      <section className="row justify-content-center">
        <section className="col-10 mt-3">
          <h3 className="fw-bold text-navy">Quick Searches</h3>
          <p className="text-secondary">Discover restaurants by Searches</p>
        </section>
        <section className="col-10">
          <section className="row py-2">
            <section className="col-12 px-0 d-flex justify-content-between flex-wrap">
              {mealTypes.map((value, index) => {
                return (
                  <section
                    onClick={() =>
                      navigate(`/search/${value.meal_type}/${value.name}`)
                    }
                    key={value._id}
                    className="px-0 d-flex border border-1 quick-search-item"
                  >
                    <img
                      src={`/images/${value.image}`}
                      alt=""
                      className="image-item"
                    />
                    <div className="pt-3 px-2">
                      <h4 className="text-navy">{value.name}</h4>
                      <p className="small text-muted">{value.content}</p>
                    </div>
                  </section>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
