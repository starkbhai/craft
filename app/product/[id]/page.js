"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function ProductDetailPage({ params }) {
  const { addToCart } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState('5x7 Inches');

  const product = {
    id: 1, // hardcoded for example
    title: 'Vintage Leather Journal With Laser Cutting Design Size 5x7 Inches A5 , 200 Antique Pages',
    price: 449,
    originalPrice: 999,
    discount: '55% Off',
    mainImage: '/vintage_journal_1777266359527.png',
    thumbnails: [
      '/vintage_journal_1777266359527.png',
      '/journal_product_1_1777266104785.png',
      '/vintage_journal_1777266359527.png',
      '/journal_product_1_1777266104785.png'
    ]
  };

  const [activeImage, setActiveImage] = useState(product.thumbnails[0]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.mainImage,
      size: selectedSize
    });
  };

  return (
    <div className="pdp-container">
      {/* Left: Gallery */}
      <div className="pdp-gallery">
        <div className="pdp-thumbnails">
          {product.thumbnails.map((thumb, idx) => (
            <img 
              key={idx} 
              src={thumb} 
              alt={`Thumbnail ${idx}`} 
              className="pdp-thumb-img" 
              onClick={() => setActiveImage(thumb)}
              style={{ 
                border: activeImage === thumb ? '2px solid var(--palette-text-primary)' : '1px solid var(--palette-border-hairline)'
              }}
            />
          ))}
        </div>
        <div className="pdp-main-img-wrapper">
          <Image 
            src={activeImage}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* Right: Details */}
      <div className="pdp-details">
        <h1 className="text-listing-title">{product.title}</h1>
        
        <div className="price-row" style={{ marginTop: '0' }}>
          <span className="price-current" style={{ fontSize: '28px' }}>₹{product.price}</span>
          <span className="price-old" style={{ fontSize: '18px' }}>₹{product.originalPrice}</span>
          <span className="price-discount" style={{ fontSize: '18px' }}>{product.discount}</span>
        </div>

        <div className="pdp-promo-banner">
          <span>Hurry Up, Shop Now!</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            00H:38M
          </span>
        </div>

        <div style={{ border: '1px dashed var(--palette-text-secondary)', padding: '12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', color: 'green', fontWeight: '600' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          View Available Offers
        </div>
        <p className="text-caption-medium text-ash" style={{ fontSize: '12px', marginTop: '-16px' }}>ⓘ Final Price inclusive of all taxes</p>

        {/* Product Information Table */}
        <div style={{ border: '1px solid var(--palette-border-hairline)', borderRadius: '8px', padding: '16px' }}>
          <h3 className="text-subtitle" style={{ marginBottom: '16px' }}>Product Information</h3>
          <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--palette-border-hairline)' }}>
                <td style={{ padding: '8px 0', color: 'var(--palette-text-secondary)' }}>Brand Name</td>
                <td style={{ padding: '8px 0', fontWeight: '500' }}>Di-Kraft</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--palette-border-hairline)' }}>
                <td style={{ padding: '8px 0', color: 'var(--palette-text-secondary)' }}>Ideal For</td>
                <td style={{ padding: '8px 0', fontWeight: '500' }}>Official And Personal Use</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--palette-border-hairline)' }}>
                <td style={{ padding: '8px 0', color: 'var(--palette-text-secondary)' }}>Pages</td>
                <td style={{ padding: '8px 0', fontWeight: '500' }}>200</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--palette-border-hairline)' }}>
                <td style={{ padding: '8px 0', color: 'var(--palette-text-secondary)' }}>Page Size</td>
                <td style={{ padding: '8px 0', fontWeight: '500' }}>A5</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', color: 'var(--palette-text-secondary)' }}>Type</td>
                <td style={{ padding: '8px 0', fontWeight: '500' }}>Journal</td>
              </tr>
            </tbody>
          </table>
          
          {isExpanded && (
            <div style={{ marginTop: '16px', fontSize: '14px', color: 'var(--palette-text-primary)', lineHeight: '1.6' }}>
              <p>Discover the magic of writing with Di-Kraft Journal - a timeless treasure for all your thoughts and ideas. Elegantly designed and expertly crafted, this journal is your gateway to a world of creativity. Its supreme quality paper guarantees effortless writing, while the lightweight and portable design allow you to take it with you wherever you go.</p>
            </div>
          )}
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            style={{ 
              marginTop: '16px', 
              width: '100%', 
              textAlign: 'right', 
              background: 'none', 
              border: 'none', 
              textDecoration: 'underline', 
              cursor: 'pointer',
              fontWeight: '600',
              fontFamily: 'inherit',
              fontSize: '12px'
            }}
          >
            {isExpanded ? 'READ LESS' : 'READ MORE'}
          </button>
        </div>

        <div style={{ backgroundColor: 'var(--palette-bg-subsurface)', padding: '16px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="pdp-trust-badges">
            <div className="trust-badge">
              <span style={{ fontSize: '20px' }}>₹</span>
              <span>Cash on Delivery</span>
            </div>
            <div className="trust-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12l5.25 5 2.625-3"></path>
                <path d="M8 12l5.25 5L22 7"></path>
              </svg>
              <span style={{ textDecoration: 'underline' }}>Easy 5 days return</span>
            </div>
            <div className="trust-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span>Free Delivery</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', backgroundColor: '#e5e5e5', padding: '8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>
            Get it delivered in 4-9 days
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="btn-secondary" onClick={handleAddToCart} style={{ flex: 1, padding: '16px', fontWeight: '700' }}>ADD TO BAG</button>
          <button className="btn-primary" onClick={handleAddToCart} style={{ flex: 1, padding: '16px', fontWeight: '700', backgroundColor: 'var(--palette-text-primary)' }}>BUY NOW</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label className="text-body-medium" style={{ fontWeight: '600' }}>Size</label>
          <select 
            className="input-text" 
            style={{ padding: '16px', appearance: 'none', cursor: 'pointer' }}
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="5x7 Inches">5.7 inch</option>
            <option value="A4 Size">A4 Size</option>
          </select>
        </div>
      </div>
    </div>
  );
}
