import Image from 'next/image';

const SPOTLIGHT_PRODUCTS = [
  {
    id: 1,
    title: 'Designer Vintage Rexgin Cover Journal With Antique Pages (Size 5x7 Inches)',
    price: 499,
    originalPrice: 1049,
    discount: '52% OFF',
    image: '/vintage_journal_1777266359527.png'
  },
  {
    id: 2,
    title: 'Rustic Handmade Leather Journal with String Tie',
    price: 599,
    originalPrice: 1199,
    discount: '50% OFF',
    image: '/journal_product_1_1777266104785.png'
  },
  {
    id: 3,
    title: 'Premium Embossed Leather Diary',
    price: 699,
    originalPrice: 1499,
    discount: '53% OFF',
    image: '/journal_product_1_1777266104785.png'
  },
  {
    id: 4,
    title: 'Classic Handcrafted Wooden Journal',
    price: 899,
    originalPrice: 1599,
    discount: '43% OFF',
    image: '/vintage_journal_1777266359527.png'
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: '48px 24px', backgroundColor: 'var(--palette-bg-canvas)' }}>
        <div className="container" style={{ position: 'relative', height: '400px', borderRadius: '20px', overflow: 'hidden' }}>
          {/* Using placeholder for Hero */}
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--palette-bg-subsurface)' }}>
            <Image
              src="/hero_journal_desktop_1777266088583.png"
              alt="Handmade Journals Desktop Hero"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div style={{ position: 'absolute', bottom: '48px', left: '48px', zIndex: 1 }}>
            <h1 className="text-section-heading" style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Crafted with Passion</h1>
            <p className="text-subtitle" style={{ color: 'white', marginTop: '8px', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Discover our premium collection of handmade journals.</p>
            <button className="btn-primary" style={{ marginTop: '24px' }}>Shop Collection</button>
          </div>
        </div>
      </section>

      {/* In The Spotlight Section */}
      <section className="container" style={{ padding: '48px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 className="text-section-heading">IN THE SPOTLIGHT</h2>
          <a href="/products" className="text-body-medium" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>View All</a>
        </div>

        <div className="product-grid">
          {SPOTLIGHT_PRODUCTS.map((product) => (
            <div key={product.id} className="card-product">
              <a href={`/product/${product.id}`} className="card-product-img-wrapper" style={{ display: 'block' }}>
                {/* Fallback color while image loads */}
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--palette-bg-subsurface)' }}></div>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="card-product-img"
                />
              </a>
              <div className="card-product-content">
                <a href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className="text-body-medium" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    height: '40px'
                  }}>
                    {product.title}
                  </h3>
                </a>
                <div className="price-row">
                  <span className="price-current">₹{product.price}</span>
                  <span className="price-old">₹{product.originalPrice}</span>
                  <span className="price-discount">{product.discount}</span>
                </div>
                <button className="btn-secondary" style={{ marginTop: '12px', width: '100%' }}>Add to bag</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
