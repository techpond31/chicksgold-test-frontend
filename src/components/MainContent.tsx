"use client";

import { useState } from "react";
import {
  FaSearch,
  FaCaretDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GiBroadsword, GiFeather } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import ProductCard from "./ProductCard";

export default function MainContent() {
  const [game, setGame] = useState("Select a game");
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState("All");
  const [itemType, setItemType] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

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

  const sortByOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
    "Oldest",
  ];

  const products = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    image: `/treasure-2.webp`,
    name: "Blue Partyhat",
    currentPrice: "$450.00",
    oldPrice: "$522.50",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    gameIcon:
      i % 3 === 0
        ? "/chicks-logo.svg"
        : i % 3 === 1
        ? "/globe.svg"
        : "/window.svg",
    gameIconAlt: i % 3 === 0 ? "RS3" : i % 3 === 1 ? "WoW" : "GW2",
    onSale: i % 2 === 0,
    inStock: true,
  }));

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

        <div className="results-count-bar">
          <span className="results-count">Showing 20 - from 125</span>
          <div className="filter-item dropdown sort-by-dropdown">
            <span className="dropdown-text">Sort By: {sortBy}</span>
            <FaCaretDown className="dropdown-arrow" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="dropdown-select-overlay"
              aria-label="Sort by"
            >
              {sortByOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="product-grid-wrapper">
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        <div className="pagination">
          <button className="pagination-arrow prev" aria-label="Previous page">
            <FaChevronLeft className="pagination-icon" />
          </button>
          <div className="page-numbers">
            <button className="page-number active">1</button>
            <button className="page-number">2</button>
            <button className="page-number">3</button>
            <button className="page-number">4</button>
            <span className="pagination-ellipsis">...</span>
            <button className="page-number">11</button>
          </div>
          <button className="pagination-arrow next" aria-label="Next page">
            <FaChevronRight className="pagination-icon" />
          </button>
        </div>
      </div>
    </main>
  );
}
