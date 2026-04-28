"use client";

import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';

export default function CartCountBadge() {
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || cartCount === 0) return null;

  return (
    <span style={{
      backgroundColor: 'var(--palette-bg-primary-core)',
      color: 'white',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginLeft: '4px'
    }}>
      {cartCount}
    </span>
  );
}
