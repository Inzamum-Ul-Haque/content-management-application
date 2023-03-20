import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrap">
        <div className="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">About Us</h1>
              <Link className="footer-link">How It works</Link>
              <Link className="footer-link">Testimonials</Link>
              <Link className="footer-link">Careers</Link>
              <Link className="footer-link">Investors</Link>
              <Link className="footer-link">Terms of Service</Link>
            </div>
            <div className="footer-link-items">
              <h1 className="footer-link-title">Contact Us</h1>
              <Link className="footer-link">Contact</Link>
              <Link className="footer-link">Support</Link>
              <Link className="footer-link">Sponsorships</Link>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">Videos</h1>
              <Link className="footer-link">Submit Video</Link>
              <Link className="footer-link">Ambassadors</Link>
              <Link className="footer-link">Agency</Link>
              <Link className="footer-link">Influencer</Link>
            </div>
            <div className="footer-link-items">
              <h1 className="footer-link-title">Social Media</h1>
              <Link className="footer-link">Instagram</Link>
              <Link className="footer-link">Facebook</Link>
              <Link className="footer-link">Youtube</Link>
              <Link className="footer-link">Twitter</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <Link to="/" className="social-logo">
              somewhereinblog.com
            </Link>
            <small className="website-rights">
              somewhereinblog © {new Date().getFullYear()} All rights reserved
            </small>
            <div className="social-icons">
              <a
                href="//www.facebook.com/"
                className="social-icon-link"
                target="_blank"
                aria-label="Facebook"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                className="social-icon-link"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="social-icon-link"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
              <a
                href="/"
                className="social-icon-link"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                className="social-icon-link"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
