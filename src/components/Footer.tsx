"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [openAccordions, setOpenAccordions] = useState<{
    [key: string]: boolean;
  }>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleAccordion = (section: string) => {
    if (isMobile) {
      setOpenAccordions((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    }
  };

  return (
    <footer className="footer">
      {/* Payment Methods */}
      <div className="payment-methods">
        <div className="payment-icons">
          <div className="payment-icon">
            <img
              src="/images/payment-methods/visa.png"
              alt="Visa"
              className="payment-logo visa-logo"
            />
          </div>
          <div className="payment-icon">
            <img
              src="/images/payment-methods/mastercard.svg"
              alt="Mastercard"
              className="payment-logo mastercard-logo"
            />
          </div>
          <div className="payment-icon">
            <img
              src="/images/payment-methods/american-express.png"
              alt="American Express"
              className="payment-logo amex-logo"
            />
          </div>
          <div className="payment-icon">
            <img
              src="/images/payment-methods/skrill.png"
              alt="Skrill"
              className="payment-logo skrill-logo"
            />
          </div>
          <div className="payment-icon crypto">
            <div className="crypto-icons">
              <img
                src="/images/payment-methods/bitcoin-green.svg"
                alt="Bitcoin Green"
                className="crypto-logo crypto-btc-green-logo"
              />
              <img
                src="/images/payment-methods/ethereum.svg"
                alt="Ethereum"
                className="crypto-logo crypto-eth-logo"
              />
              <img
                src="/images/payment-methods/bitcoin-yellow.svg"
                alt="Bitcoin Yellow"
                className="crypto-logo crypto-btc-yellow-logo"
              />
              <img
                src="/images/payment-methods/litecoin.svg"
                alt="Litecoin"
                className="crypto-logo crypto-ltc-logo"
              />
            </div>
          </div>
          <span className="more-text">and 50+ more</span>
        </div>
      </div>

      {/* Social Media */}
      <div className="social-media">
        <a href="#" className="social-icon facebook" aria-label="Facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a href="#" className="social-icon instagram" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              ry="5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="17.5"
              y1="6.5"
              x2="17.51"
              y2="6.5"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>
        <a href="#" className="social-icon twitter" aria-label="Twitter">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a href="#" className="social-icon discord" aria-label="Discord">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      {/* Separator Line */}
      <div className="footer-line"></div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img
                src="/chicks-logo.svg"
                alt="Chicks Gold"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-email">support@chicksgold.com</p>
          </div>

          {/* Chicks Gold */}
          <div className="footer-section">
            <h3
              className="footer-title"
              onClick={() => toggleAccordion("chicksGold")}
            >
              Chicks Gold
              {isMobile && (
                <svg
                  className={`dropdown-icon ${
                    openAccordions["chicksGold"] ? "rotate" : ""
                  }`}
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
              )}
            </h3>
            <ul
              className={`footer-links ${
                isMobile && openAccordions["chicksGold"] ? "open" : ""
              }`}
            >
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3
              className="footer-title"
              onClick={() => toggleAccordion("support")}
            >
              Support
              {isMobile && (
                <svg
                  className={`dropdown-icon ${
                    openAccordions["support"] ? "rotate" : ""
                  }`}
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
              )}
            </h3>
            <ul
              className={`footer-links ${
                isMobile && openAccordions["support"] ? "open" : ""
              }`}
            >
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h3
              className="footer-title"
              onClick={() => toggleAccordion("legal")}
            >
              Legal
              {isMobile && (
                <svg
                  className={`dropdown-icon ${
                    openAccordions["legal"] ? "rotate" : ""
                  }`}
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
              )}
            </h3>
            <ul
              className={`footer-links ${
                isMobile && openAccordions["legal"] ? "open" : ""
              }`}
            >
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Copyright Policy</a>
              </li>
            </ul>
          </div>

          {/* Trustpilot Reviews */}
          <div className="footer-section trustpilot">
            <div className="trustpilot-stars">
              <div className="trustpilot-star-square">
                <svg
                  className="trustpilot-star-icon"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="white"
                  strokeWidth="0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="trustpilot-star-square">
                <svg
                  className="trustpilot-star-icon"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="white"
                  strokeWidth="0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="trustpilot-star-square">
                <svg
                  className="trustpilot-star-icon"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="white"
                  strokeWidth="0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="trustpilot-star-square">
                <svg
                  className="trustpilot-star-icon"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="white"
                  strokeWidth="0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="trustpilot-star-square">
                <svg
                  className="trustpilot-star-icon"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="white"
                  strokeWidth="0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
            <p className="trustpilot-text">Trustpilot Reviews</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2017 - 2020 Chicksgold.com. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
