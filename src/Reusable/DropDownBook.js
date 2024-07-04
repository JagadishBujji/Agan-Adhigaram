import React, { useEffect, useState } from "react";
import "./DropDownBook.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const DropDownBook = ({ search, selectedItem, setSelectedItem }) => {
  const [isOpen, setOpen] = useState(true);
  const [items, setItem] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "app", "meta");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setItem(["all genre", ...docSnap.data().genre]);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getData();
  }, []);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className="dropdowncatergory">
      <div className="dropdown-header category" onClick={toggleDropdown}>
        {/* {selectedItem ? (
          items.find((item) => item === selectedItem)
        ) : (
          <h1>Categories</h1>
        )} */}
        <h1>Categories</h1>
        <i className={`fa-solid fa-chevron-down icon `}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.slice(0, limit).map((item) => (
          <div
            key={item}
            className="dropdown-item"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item}
          >
            {/* <img src="./images/iconCheck_on.svg" className="iconcheck" /> */}
            {/* <input
              type="radio"
              name="optionsRadios"
              id="optionsRadios1"
            //   value="option1"
            /> */}
            <label class="radio" for="optionsRadios1">
              {item === selectedItem ? (
                <img
                  src={`./images/iconCheck_on.svg`}
                  className="iconcheck"
                  alt="radio-off"
                />
              ) : (
                <img
                  src={`./images/iconCheck_off.svg`}
                  className="iconcheck"
                  alt="radio-off"
                />
              )}
            </label>
            <span
              className={`dropdown-item-dot ${
                item === selectedItem && "selected"
              }`}
            ></span>
            {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
          </div>
        ))}
        {limit < items.length ? (
          <div
            className="Loadmore"
            onClick={() => {
              setLimit(items.length);
            }}
          >
            <i class="fa-solid fa-plus"></i> Load More
          </div>
        ) : null}
        <div className="refine" onClick={search}>
          Refine Search
        </div>
        <div className="filter" onClick={() => setSelectedItem("all genre")}>
          Reset Filter
        </div>
      </div>
    </div>
  );
};

export default DropDownBook;
