import React from "react";

function Navbar({ showItems, menuList }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((item, index) => {
            return (
              <button
                key={index}
                className="btn-group__item"
                onClick={() => showItems(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
