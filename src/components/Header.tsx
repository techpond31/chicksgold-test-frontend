"use client";

import type React from "react";

import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  const handleNavClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Mobile Menu Button - Left side on mobile */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <div className="logo">
          <img
            src="/chicks-logo.svg"
            alt="Chicks Gold"
            className="logo-image"
          />
        </div>

        {/* Separator Line */}
        <div className="separator"></div>

        {/* Navigation */}
        <nav
          className={`nav ${isMenuOpen ? "nav-open" : ""}`}
          onClick={handleNavClick}
        >
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                CURRENCY
                <svg
                  className="dropdown-icon"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                ITEMS
                <svg
                  className="dropdown-icon"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                ACCOUNTS
                <svg
                  className="dropdown-icon"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                SERVICES
                <svg
                  className="dropdown-icon"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                SWAP
                <svg
                  className="dropdown-icon"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                SELL
                <svg
                  className="dropdown-icon"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>

          {/* Mobile Currency Selector - Inside hamburger menu */}
          <div className="mobile-currency-selector" onClick={closeMenu}>
            <div className="currency-text">
              <span>Currency</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span>USD</span>
              <svg
                className="dropdown-icon"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          <div className="currency-selector">
            <span>USD</span>
            <svg
              className="dropdown-icon"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="cart">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3.33333 3.33333H5L7.4 11.4C7.47056 11.6947 7.62842 11.9596 7.85376 12.1504C8.0791 12.3412 8.36233 12.4462 8.65333 12.4467H15.1533C15.4443 12.4462 15.7276 12.3412 15.9529 12.1504C16.1783 11.9596 16.3361 11.6947 16.4067 11.4L17.8333 5.83333H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="9.16667"
                cy="16.6667"
                r="0.833333"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="15"
                cy="16.6667"
                r="0.833333"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="cart-text">CART (5)</span>
          </div>

          <button className="sign-in-btn">
            SIGN IN
            <svg
              className="user-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
