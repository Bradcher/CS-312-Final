import React, { useState } from 'react';
import SignupForm from './SignupForm';
import ProductCard from './ProductCard';

export default function HomePage({ user, setUser }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Welcome to MarketPlace</h2>

      {!user && (
        <div className="mb-5">
          <SignupForm onSignup={setUser} />
        </div>
      )}

      <h4 className="mb-3">Listings</h4>
      <div className="row">
        <div className="col-md-4">
          <ProductCard
            image="https://via.placeholder.com/300"
            seller="Jane Doe"
            price="$50"
            location="Phoenix, AZ"
          />
        </div>
        {/* More cards... */}
      </div>
    </div>
  );
}
