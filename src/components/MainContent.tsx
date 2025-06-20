"use client";

import { useState } from "react";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { GiBroadsword, GiFeather } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";

export default function MainContent() {
  const [game, setGame] = useState("Select a game");
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState("All");
  const [itemType, setItemType] = useState("All");

  const gameOptions = [
    "Select a game",
    "World of Warcraft",
    "Final Fantasy XIV",
    "Guild Wars 2",
    "Elder Scrolls Online",
    "Lost Ark",
    "New World",
    "Path of Exile",
    "Diablo IV",
    "Destiny 2",
  ];

  const priceOptions = [
    "All",
    "$1 - $10",
    "$10 - $50",
    "$50 - $100",
    "$100 - $500",
    "$500+",
  ];

  const itemTypeOptions = [
    "All",
    "Weapons",
    "Armor",
    "Accessories",
    "Consumables",
    "Materials",
    "Mounts",
    "Pets",
  ];

  return (
    <main className="main-content">
      <div className="main-content-container">
        <h1 className="main-title">Condimentum consectetur</h1>

        <div className="filter-bar">
          <div className="filter-item dropdown">
            <GiBroadsword className="icon" />
            <span className="dropdown-text">{game}</span>
            <FaCaretDown className="dropdown-arrow" />
            <select
              value={game}
              onChange={(e) => setGame(e.target.value)}
              className="dropdown-select-overlay"
              aria-label="Select a game"
            >
              {gameOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="right-filters">
            <div className="filter-item search-input">
              <FaSearch className="icon" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search items"
              />
            </div>

            <div className="filter-separator"></div>

            <div className="filter-item dropdown with-label no-right-border price-item">
              <TbMoneybag className="icon green-icon" />
              <div className="dropdown-content">
                <span className="dropdown-label">Price</span>
                <span className="dropdown-value">{price}</span>
              </div>
              <FaCaretDown className="dropdown-arrow" />
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="dropdown-select-overlay"
                aria-label="Select price range"
              >
                {priceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-separator"></div>

            <div className="filter-item dropdown with-label no-left-border item-type-item">
              <GiFeather className="icon green-icon" />
              <div className="dropdown-content">
                <span className="dropdown-label">Item Type</span>
                <span className="dropdown-value">{itemType}</span>
              </div>
              <FaCaretDown className="dropdown-arrow" />
              <select
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                className="dropdown-select-overlay"
                aria-label="Select item type"
              >
                {itemTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
