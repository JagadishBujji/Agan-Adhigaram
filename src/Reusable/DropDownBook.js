import React from "react";
import "./DropDownBook.css";

const { useState, useEffect } = React;

const data = [
  { id: 0, label: "All Genres" },
  { id: 1, label: "Humorous" },
  { id: 2, label: "Cultural" },
  { id: 3, label: "Adventure" },
];

const DropDownBook = () => {
  const [isOpen, setOpen] = useState(true);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className="dropdowncatergory">
      <div className="dropdown-header category" onClick={toggleDropdown}>
        {selectedItem ? (
          items.find((item) => item.id == selectedItem).label
        ) : (
          <h1>Categories</h1>
        )}
        <i className={`fa-solid fa-chevron-down icon `}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            {/* <img src="./images/iconCheck_off.svg" className="iconcheck" /> */}
            {/* <input
              type="radio"
              name="optionsRadios"
              id="optionsRadios1"
            //   value="option1"
            /> */}
            <label class="radio" for="optionsRadios1">
              <img src="./images/iconCheck_off.svg" className="iconcheck" />
            </label>
            <span
              className={`dropdown-item-dot ${
                item.id == selectedItem && "selected"
              }`}
            ></span>
            {item.label}
          </div>
        ))}
        <a href="" className="Loadmore">
          <i class="fa-solid fa-plus"></i> Load More
        </a>
        <a href="" className="refine">
          Refine Search
        </a>
        <a href="" className="filter">
          {" "}
          Reset Filter
        </a>
      </div>
    </div>
  );
};

export default DropDownBook;
