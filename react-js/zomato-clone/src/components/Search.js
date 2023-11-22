import { useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let navigate = useNavigate();
  let { meal_id, meal_type_name } = useParams();
  let [locations, setLocations] = useState([]);
  let [restaurantList, setRestaurantList] = useState([]);
  let [filterOptions, setFilterOptions] = useState({
    meal_type: meal_id,
  });
  let getLocationList = async () => {
    try {
      let url = `http://localhost:3030/api/get-locations-list`;
      let response = await fetch(url, { method: "GET" });
      //get data
      let data = await response.json();
      setLocations(data.result);
    } catch (error) {}
  };
  const getFilterData = async () => {
    let url = "http://localhost:3030/api/filter";
    let { data } = await axios.post(url, { ...filterOptions });
    setRestaurantList(data.result);
    console.log(data.result);
  };
  const filter = async (type, event) => {
    let { value } = event.target;
    switch (type) {
      case "loc":
        if (value === "") {
          delete filterOptions.location;
        } else {
          filterOptions["location"] = value;
        }
        break;

      case "sort":
        filterOptions["sort"] = value;
        break;

      case "cuisine":
        if (event.target.checked === true) {
          if (filterOptions["cuisine_id"] !== undefined) {
            let isIncluded = filterOptions["cuisine_id"].includes(
              Number(value)
            );
            if (isIncluded === false) {
              filterOptions["cuisine_id"] = [
                ...filterOptions["cuisine_id"],
                Number(value),
              ];
            }
          } else {
            filterOptions["cuisine_id"] = [Number(value)];
          }
        } else {
          let cuisine = filterOptions["cuisine_id"].filter(
            (id) => Number(value) !== id
          );
          if (cuisine.length === 0) {
            delete filterOptions.cuisine;
          } else {
            filterOptions["cuisine_id"] = [...cuisine];
          }
        }

        break;
      default:
        break;
    }
    setFilterOptions({ ...filterOptions });
  };
  useEffect(() => {
    getLocationList();
  }, []);

  useEffect(() => {
    getFilterData();
  }, [filterOptions]);
  return (
    <>
      <div className="row bg-danger justify-content-center">
        <Header bgColor="bg-danger" />
      </div>
      {/* <!-- section --> */}
      <div className="row">
        <div className="col-12 px-5 pt-4">
          <p className="h3">{meal_type_name} Places Near-By</p>
        </div>
        {/* <!-- food item --> */}
        <div className="col-12 d-flex flex-wrap px-lg-5 px-md-5 pt-4">
          <div className="food-shadow col-12 col-lg-3 col-md-4 me-5 p-3 mb-4">
            <div className="d-flex justify-content-between">
              <p className="fw-bold m-0">Filter</p>
              <button
                className="d-lg-none d-md-none btn"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFilter"
                aria-controls="collapseFilter"
              >
                <span className="fa fa-eye"></span>
              </button>
            </div>
            {/* <!-- Collapse start  --> */}
            <div className="collapse show" id="collapseFilter">
              <div>
                <label htmlFor="" className="form-label">
                  Select Location
                </label>
                <select
                  className="form-select form-select-sm"
                  onChange={(event) => filter("loc", event)}
                >
                  <option value="">Select</option>
                  {locations.map((loc) => {
                    return (
                      <option key={loc._id} value={loc.location_id}>
                        {loc.name}, {loc.city}
                      </option>
                    );
                  })}
                </select>
              </div>
              <p className="mt-4 mb-2 fw-bold">Cuisine</p>
              <div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    value={1}
                    onChange={(event) => filter("cuisine", event)}
                    className="form-check-input"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    North Indian
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    value={2}
                    className="form-check-input"
                    onChange={(event) => filter("cuisine", event)}
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    South Indian
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    value={3}
                    className="form-check-input"
                    onChange={(event) => filter("cuisine", event)}
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Chinese
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    value={4}
                    className="form-check-input"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Fast Food
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    value={5}
                    className="form-check-input"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Street Food
                  </label>
                </div>
              </div>
              <p className="mt-4 mb-2 fw-bold">Cost For Two</p>
              <div>
                <div className="ms-1">
                  <input
                    type="radio"
                    name="costForTwo"
                    className="form-check-input"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    less then 500
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="radio"
                    name="costForTwo"
                    className="form-check-input"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    500 to 1000
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="radio"
                    name="costForTwo"
                    className="form-check-input"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    1000 to 1500
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="radio"
                    name="costForTwo"
                    className="form-check-input"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    1500 to 2000
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="radio"
                    name="costForTwo"
                    className="form-check-input"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    2000+
                  </label>
                </div>
              </div>
              <p className="mt-4 mb-2 fw-bold">Sort</p>
              <div>
                <div className="ms-1">
                  <input
                    type="radio"
                    name="sort"
                    className="form-check-input"
                    value="1"
                    onChange={(event) => filter("sort", event)}
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Price low to high
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="radio"
                    name="sort"
                    className="form-check-input"
                    onChange={(event) => filter("sort", event)}
                    value="-1"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Price high to low
                  </label>
                </div>
              </div>
            </div>
            {/* <!-- Collapse end --> */}
          </div>
          {/* <!-- search result --> */}
          <div className="col-12 col-lg-8 col-md-7">
            {restaurantList.map((restaurant, index) => {
              return (
                <div
                  className="col-12 food-shadow p-4 mb-4"
                  key={restaurant._id}
                  onClick={() => navigate("/restaurant/" + restaurant._id)}
                >
                  <div className="d-flex align-items-center">
                    <img src="/images/food-item.png" className="food-item" />
                    <div className="ms-5">
                      <p className="h4 fw-bold">{restaurant.name}</p>
                      <span className="fw-bold text-muted">
                        {restaurant.locality}
                      </span>
                      <p className="m-0 text-muted">
                        <i
                          className="fa fa-map-marker fa-2x text-danger"
                          aria-hidden="true"
                        ></i>
                        {restaurant.locality}, {restaurant.city}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <div>
                      <p className="m-0">CUISINES:</p>
                      <p className="m-0">COST FOR TWO:</p>
                    </div>
                    <div className="ms-5">
                      <p className="m-0 fw-bold">
                        {restaurant.cuisine
                          .map((value, index) => {
                            return value.name;
                          })
                          .join(", ")}
                      </p>
                      <p className="m-0 fw-bold">
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        {restaurant.min_price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-12 pagination d-flex justify-content-center">
              <ul className="pages">
                <li>&lt;</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>&gt;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
