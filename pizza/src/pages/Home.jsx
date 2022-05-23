import React, { useCallback, useEffect, useState } from "react";
import {
  Categorie,
  SortPopup,
  PizzaBlock,
  LoadingPizzaBlock,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categories = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "цене", type: "price", order: "asc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const { items, isLoaded, category, sortBy } = useSelector(
    ({ pizzas, filters }) => {
      return {
        items: pizzas.items,
        isLoaded: pizzas.isLoaded,
        category: filters.category,
        sortBy: filters.sortBy,
      };
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categorie
          activeCategory={category}
          onClick={onSelectCategory}
          items={categories}
        />
        <SortPopup
          onChangeSort={onSelectSortType}
          activeSortType={sortBy.type}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })
          : Array(items.length)
              .fill(1)
              .map((_, index) => <LoadingPizzaBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
