"use client";

import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';

export default function BagPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="container" style={{ padding: '64px 24px', textAlign: 'center' }}>Loading...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 className="text-section-heading">Your Bag is Empty</h1>
        <p className="text-body-medium text-ash" style={{ marginTop: '16px', marginBottom: '32px' }}>
          Looks like you haven't added anything to your bag yet.
        </p>
        <a href="/products" className="btn-primary">Continue Shopping</a>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <h1 className="text-section-heading" style={{ marginBottom: '32px' }}>Shopping Bag</h1>
      
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
        {/* Cart Items List */}
        <div style={{ flex: '2', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.size}`} style={{ 
              display: 'flex', 
              gap: '24px', 
              paddingBottom: '24px', 
              borderBottom: '1px solid var(--palette-border-hairline)' 
            }}>
              <div style={{ 
                width: '120px', 
                height: '160px', 
                position: 'relative', 
                borderRadius: '8px', 
                overflow: 'hidden',
                backgroundColor: 'var(--palette-bg-subsurface)'
              }}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 className="text-body-medium" style={{ fontWeight: '600' }}>{item.title}</h3>
                <p className="text-caption-medium text-ash">Size: {item.size}</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--palette-border-hairline)', borderRadius: '4px' }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ padding: '4px 12px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                    >-</button>
                    <span style={{ padding: '0 12px', fontSize: '14px', fontWeight: '500' }}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ padding: '4px 12px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                    >+</button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span className="price-current">₹{item.price * item.quantity}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--palette-text-secondary)', textDecoration: 'underline' }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ 
            backgroundColor: 'var(--palette-bg-subsurface)', 
            padding: '24px', 
            borderRadius: '14px',
            position: 'sticky',
            top: '24px'
          }}>
            <h2 className="text-subtitle" style={{ marginBottom: '24px' }}>Order Summary</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="text-body-medium text-ash">Subtotal</span>
              <span className="text-body-medium">₹{cartTotal}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="text-body-medium text-ash">Shipping</span>
              <span className="text-body-medium" style={{ color: 'green' }}>Free</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', paddingTop: '16px', borderTop: '1px solid var(--palette-border-hairline)' }}>
              <span className="text-subtitle">Total</span>
              <span className="text-subtitle">₹{cartTotal}</span>
            </div>

            <button className="btn-primary" style={{ width: '100%', padding: '16px', fontWeight: '700' }}>
              Proceed to Checkout
            </button>
            <p className="text-caption-medium text-ash" style={{ textAlign: 'center', marginTop: '16px' }}>
              Secure checkout. All taxes included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
