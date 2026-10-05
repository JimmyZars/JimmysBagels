import { useState } from "react";
import "./App.css";
import logo from "./images/JBlogo.png";
import dozen from "./images/dozenbagels.JPG";
import bagels from "./images/bagels.JPG";
import sandwiches from "./images/sandwiches.JPG";
import coffee from "./images/coffee.JPG";

const menuItems = [
  {
    name: "Jimmy's Choice",
    description:
      "Everything Bagel, pork sausage, scrambled egg and American cheese.",
    price: "$10",
  },
  {
    name: "American Classic",
    description: "Plain Bagel, bacon, egg, and American cheese.",
    price: "$10",
  },
  {
    name: "Chive & Shine",
    description:
      "Everything Bagel, pork sausage, scrambled egg, chive & onion cream cheese, and cheddar cheese.",
    price: "$11",
  },
  {
    name: "Hangover Helper",
    description:
      "Sesame Bagel, bacon, scrambled egg, hash brown, and pepper jack cheese.",
    price: "$13",
  },
  {
    name: "The Vegetarian",
    description: "Plain Bagel, scrambled egg, spinach, and cheddar cheese.",
    price: "$8",
  },
  {
    name: "Breakfast Combo",
    description:
      "Plain Bagel, pork sausage, bacon, scrambled egg and cheddar cheese.",
    price: "$13",
  },
  {
    name: "Bagel & Cream Cheese",
    description:
      "Your choice of bagel with any of our signiature cream cheese options.",
    price: "$4",
  },
];

const hours = [
  ["Wednesday", "7:00 AM – 1:00 PM"],
  ["Thursday", "7:00 AM – 1:00 PM"],
  ["Friday", "7:00 AM – 1:00 PM"],
  ["Saturday", "8:00 AM – 1:00 PM"],
  ["Sunday", "9:00 AM – 1:00 PM"],
  ["Monday", "Closed"],
  ["Tuesday", "Closed"],
];

function Logo({ light = false }) {
  return (
    <a
      className={`logo-wrap ${light ? "logo-light" : ""}`}
      href="#home"
      aria-label="Jimmy's Bagels home"
    >
      <img src={logo} width="60px" />
      <span className="logo-type">
        JIMMY'S <strong>BAGELS</strong>
      </span>
    </a>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="site">
      <header className="navbar">
        <Logo />

        <button
          className="menu-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            HOME
          </a>
          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="#menu" onClick={closeMenu}>
            MENU
          </a>
          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
          <a
            className="order-link"
            href="https://order.toasttab.com/online/jimmys-bagels"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            ORDER ONLINE
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">GOLDEN OUTSIDE. CHEWY INSIDE.</p>
            <h1>
              Fresh bagels
              <br />
              <em>baked and boiled to perfection.</em>
            </h1>
            <div className="orange-line" />
            <p className="hero-text">
              Freshly baked bagels, made to order breakfast sandwiches, and
              great coffee right here in La Grange Park.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#menu">
                VIEW OUR MENU
              </a>
              <a className="button secondary" href="#contact">
                FIND US
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src={dozen}
              alt="Fresh bagel sandwich"
            />
            <div className="photo-badge">
              <strong>Baked</strong>
              <span>fresh daily</span>
            </div>
          </div>
        </section>

        <section className="intro-section" id="about">
          <div className="intro-heading">
            <p className="eyebrow dark-eyebrow">WELCOME TO JIMMY'S</p>
            <h2>
              Bagels worth
              <br />
              <span>getting up for.</span>
            </h2>
            <div className="orange-line small" />
          </div>

          <div className="intro-copy">
            <p>
              Jimmy's started with a love for great bagels. After years of
              perfecting the recipe, we began serving fresh bagels and
              made-to-order sandwiches at farmers markets and pop-up events
              throughout the Chicago suburbs.
            </p>
            <p>
              Today, we're bringing that same fresh-baked flavor to our La
              Grange Park shop. Grab a bagel, stay for coffee, and start your
              day the Jimmy's way.
            </p>
            <a className="text-link" href="#contact">
              LEARN MORE →
            </a>
          </div>
        </section>

        <section className="feature-section">
          <div className="section-heading">
            <p className="eyebrow dark-eyebrow">WHY JIMMY'S?</p>
            <h2>
              Fresh from our kitchen
              <br />
              to your table.
            </h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <img src={bagels} alt="Freshly baked bagels" />
              <div>
                <h3>Fresh Bagels</h3>
                <p>
                  New York-style bagels baked fresh for the best chewy, golden
                  bite.
                </p>
              </div>
            </article>

            <article className="feature-card">
              <img src={sandwiches} alt="Breakfast sandwich" />
              <div>
                <h3>Made to Order</h3>
                <p>
                  Breakfast sandwiches made fresh with eggs, bacon, sausage and
                  more.
                </p>
              </div>
            </article>

            <article className="feature-card">
              <img src={coffee} alt="Coffee" />
              <div>
                <h3>Great Coffee</h3>
                <p>
                  Espresso drinks, lattes, cappuccinos and fresh coffee to pair
                  with your bagel.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="menu-heading">
            <p className="eyebrow">OUR FAVORITES</p>
            <h2>
              Something for
              <br />
              <em>everyone.</em>
            </h2>
            <p>Start with one of our customer favorites, or build your own.</p>
            <a
              className="button primary"
              href="https://jimmysbagels.com/wp-content/uploads/2026/10/Jimmys-Bagels-Menu.pdf"
              target="_blank"
              rel="noreferrer"
            >
              FULL MENU
            </a>
          </div>

          <div className="menu-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="coffee-banner">
          <div>
            <p className="eyebrow">PAIR IT WITH</p>
            <h2>
              Good coffee.
              <br />
              <em>Good morning.</em>
            </h2>
          </div>
          <p>
            Fresh coffee, espresso, lattes and cappuccinos — the perfect
            companion to your favorite Jimmy's bagel.
          </p>
        </section>

        <section className="visit-section" id="contact">
          <div className="visit-copy">
            <p className="eyebrow dark-eyebrow">COME SEE US</p>
            <h2>
              We're open
              <br />
              <span>Wednesday–Sunday.</span>
            </h2>
            <div className="orange-line small" />
            <p>
              716 E 31st Street
              <br />
              La Grange Park, IL 60526
            </p>
            <p>(708) 852-7494</p>
            <a
              className="button primary"
              href="https://www.google.com/maps/search/?api=1&query=716+E+31st+Street+La+Grange+Park+IL+60526"
              target="_blank"
              rel="noreferrer"
            >
              GET DIRECTIONS
            </a>
          </div>

          <div className="hours-card">
            <h3>HOURS</h3>
            {hours.map(([day, time]) => (
              <div className="hours-row" key={day}>
                <span>{day}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <div>
            <Logo light />
            <p className="footer-description">
              Fresh New York-style bagels, made-to-order sandwiches, and coffee
              in La Grange Park.
            </p>
          </div>

          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>FOLLOW US</h4>
            <a
              href="https://instagram.com/jimmysbagels"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/jimmysbagel"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a href="mailto:jimmy@jimmysbagels.com">jimmy@jimmysbagels.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Jimmy's Bagels. All Rights Reserved.
          </span>
          <span>La Grange Park, Illinois</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
