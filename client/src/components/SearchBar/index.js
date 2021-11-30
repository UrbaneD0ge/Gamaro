import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStore } from "../../utils/globalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
// import Select from "react-select";
import "../../styles/search.css";

function Search() {
  const [state, dispatch] = useStore();

  const { categories } = state;

  const { loading, error, data: categoryData } = useQuery(QUERY_CATEGORIES);
  console.log(categoryData);
  console.log(error);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  // const options = [
  //   { value: "Sega", label: "Sega" },
  //   { value: "Nintendo", label: "Nintendo" },
  //   { value: "Xbox", label: "Xbox" },
  //   { value: "PlayStation", label: "PlayStation" },
  //   { value: "Atari", label: "Atari" },
  // ];

  return (
    <div>
      {categories.map((category) => (
        <button
          className="search-btn"
          key={category._id}
          onClick={() => {
            handleClick(category._id);
          }}
        >
          {category.name}
        </button>
      ))}
      {/* <h5>Console</h5>
      <Select options={options} /> */}
    </div>
  );
}

export default Search;
