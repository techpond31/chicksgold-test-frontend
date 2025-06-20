"use client";

import { useState, useEffect } from "react";
import {
  FaSearch,
  FaCaretDown,
  FaChevronLeft,
  FaChevronRight,
  FaSlidersH,
} from "react-icons/fa";
import { GiBroadsword, GiFeather } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import ProductCard from "./ProductCard";

interface ProductItem {
  id: number;
  image: string;
  name: string;
  currentPrice: string;
  oldPrice: string;
  description: string;
  gameType: "rs3" | "wow" | "gw2";
  onSale: boolean;
  inStock: boolean;
}

const ALL_PRODUCTS_DATA: ProductItem[] = Array.from({ length: 45 }).map(
  (_, i) => ({
    id: i,
    image: `/treasure-2.webp`,
    name: "Blue Partyhat",
    currentPrice: "$450.00",
    oldPrice: "$522.50",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    gameType: i % 3 === 0 ? "rs3" : i % 3 === 1 ? "wow" : "gw2",
    onSale: i < 5 ? true : i % 4 !== 0, // First 5 items are always on sale, then apply previous logic
    inStock: true,
  })
);

export default function MainContent() {
  const [game, setGame] = useState("Select a game");
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState("All");
  const [itemType, setItemType] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const [productsPerPage, setProductsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setProductsPerPage(10);
      } else {
        setProductsPerPage(15);
      }
      setCurrentPage(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const filteredAndSortedProducts = ALL_PRODUCTS_DATA;

  const totalProducts = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push("...");
      }
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        end = Math.min(totalPages - 1, maxPagesToShow - 1);
      } else if (currentPage >= totalPages - 2) {
        start = Math.max(2, totalPages - (maxPagesToShow - 2));
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <main className="main-content">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/151542839153536308.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>

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

        <div className="product-grid-wrapper">
          <div className="results-count-bar">
            <span className="results-count">
              Showing {Math.min(endIndex, totalProducts)} - from {totalProducts}
            </span>
            <div className="filter-item dropdown with-label sort-by-dropdown">
              <FaSlidersH className="icon green-icon" />
              <div className="dropdown-content">
                <span className="dropdown-label">Sort By</span>
                <span className="dropdown-value">{sortBy}</span>
              </div>
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

          <div className="product-grid">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="pagination">
            <button
              className="pagination-arrow prev"
              aria-label="Previous page"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <FaChevronLeft className="pagination-icon" />
            </button>
            <div className="page-numbers">
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={index} className="pagination-ellipsis">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    className={`page-number ${
                      currentPage === page ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(page as number)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
            <button
              className="pagination-arrow next"
              aria-label="Next page"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            >
              <FaChevronRight className="pagination-icon" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
