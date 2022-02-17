import React, { useState } from "react";
import "./style.css";
import Menu from "./menu";
import MenuCard from "./menuCard";
import Navbar from "./navbar";

const uniqueList = [
  ...new Set(
    Menu.map((item) => {
      return item.category;
    })
  ),
  "All",
];

// console.log(uniqueList);

function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const showItems = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedMenu = Menu.filter((item) => {
      return item.category === category;
    });
    setMenuData(updatedMenu);
  };

  return (
    <>
      <Navbar showItems={showItems} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Restaurant;
