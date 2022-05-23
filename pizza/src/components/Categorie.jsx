import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import propTypes from 'prop-types';
import { BulletList } from "react-content-loader";

const Categorie = memo(function Categorie({ items, onClick, activeCategory }) {


  let onSelectItem = (index) => {
    onClick(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => {
            onSelectItem(null);
          }}
        >
          Все
        </li>
        {items &&
          items.map((text, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => {
                onSelectItem(index);
              }}
              key={`${index}_${text}`}
            >
              {text}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categorie.propTypes = {
  activeCategory : propTypes.number,
  items : propTypes.array
}

Categorie.defaultProps = {
  activeCategory : BulletList,
  items : []
}

export default Categorie;
