import "./globals.css";
import { Providers } from "./Providers";
import CartCountBadge from "./components/CartCountBadge";

export const metadata = {
  title: "Dikraft India - Handmade Journals",
  description: "Buy Dikraft India products online at best prices. We aim to deliver high-quality handmade products to our customers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Promotional Banner */}
          <div className="promo-banner">
            Minimum 30% off on all products. Hurry Up, Shop Now! 50% Off 00H:55M:06S
          </div>

          {/* Top Navigation */}
          <header className="top-nav">
            <a href="/" className="top-nav-logo">Dikraft India</a>
            
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button className="search-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>

            <div className="nav-actions">
              <a href="/orders" className="text-body-medium">Orders</a>
              <a href="/bag" className="text-body-medium" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Bag
                <CartCountBadge />
              </a>
            </div>
          </header>

          {/* Category Navigation */}
          <nav className="category-nav">
            <a href="/products?category=leather" className="category-link active">LEATHER JOURNAL</a>
            <a href="/products?category=wooden" className="category-link">WOODEN JOURNALS</a>
            <a href="/products?category=handcrafted" className="category-link">HANDCRAFTED JOURNALS</a>
            <a href="/products?category=personalize" className="category-link">PERSONALIZE JOURNALS</a>
            <a href="/products?category=vintage" className="category-link">VINTAGE JOURNAL</a>
          </nav>

          {/* Main Content */}
          <main>
            {children}
          </main>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-grid">
              <div className="footer-col">
                <h4>Contact Us</h4>
                <p>Call: +91 - 9057548903</p>
                <p>WhatsApp: +91 - 9057548903</p>
                <p>Email: dikraftindia@hotmail.com</p>
                <p>Customer Support Time: 24/7</p>
              </div>
              <div className="footer-col">
                <h4>Policies</h4>
                <a href="/about-us">About Us</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/return-policy">Return Policy</a>
                <a href="/shipping-policy">Shipping Policy</a>
                <a href="/terms-and-conditions">Terms and condition</a>
              </div>
              <div className="footer-col">
                <h4>Address</h4>
                <p>82 A KASTURBA NAAGR NIRMAN NAGAR<br />Rajasthan, Jaipur, 302019</p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
