import Image from 'next/image';

const ALL_PRODUCTS = [
  {
    id: 1,
    title: 'Designer Vintage Rexgin Cover Journal With Antique Pages (Size 5x7 Inches)',
    price: 499,
    originalPrice: 1049,
    discount: '52% OFF',
    image: '/vintage_journal_1777266359527.png',
    category: 'vintage'
  },
  {
    id: 2,
    title: 'Rustic Handmade Leather Journal with String Tie',
    price: 599,
    originalPrice: 1199,
    discount: '50% OFF',
    image: '/journal_product_1_1777266104785.png',
    category: 'leather'
  },
  {
    id: 3,
    title: 'Premium Embossed Leather Diary',
    price: 699,
    originalPrice: 1499,
    discount: '53% OFF',
    image: '/journal_product_1_1777266104785.png',
    category: 'leather'
  },
  {
    id: 4,
    title: 'Classic Handcrafted Wooden Journal',
    price: 899,
    originalPrice: 1599,
    discount: '43% OFF',
    image: '/vintage_journal_1777266359527.png',
    category: 'wooden'
  },
  {
    id: 5,
    title: 'Personalized Initials Leather Journal',
    price: 749,
    originalPrice: 1299,
    discount: '42% OFF',
    image: '/journal_product_1_1777266104785.png',
    category: 'personalize'
  },
  {
    id: 6,
    title: 'Handcrafted Recycled Paper Diary',
    price: 399,
    originalPrice: 799,
    discount: '50% OFF',
    image: '/vintage_journal_1777266359527.png',
    category: 'handcrafted'
  }
];

export default function ProductsPage() {
  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <h1 className="text-section-heading" style={{ marginBottom: '8px' }}>All Products</h1>
      <p className="text-body-medium text-ash" style={{ marginBottom: '32px' }}>Browse our entire collection of premium handmade journals.</p>

      <div className="product-grid">
        {ALL_PRODUCTS.map((product) => (
          <div key={product.id} className="card-product">
            <a href={`/product/${product.id}`} className="card-product-img-wrapper" style={{ display: 'block' }}>
              <div style={{position: 'absolute', inset: 0, backgroundColor: 'var(--palette-bg-subsurface)'}}></div>
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
    </div>
  );
}
