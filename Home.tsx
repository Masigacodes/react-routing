import React from 'react';

 export const Home: React.FC = () => {
  return (
    
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Placeholder for products */}
            <div className="bg-white p-4 rounded shadow-md">Product 1</div>
            <div className="bg-white p-4 rounded shadow-md">Product 2</div>
            <div className="bg-white p-4 rounded shadow-md">Product 3</div>
          </div>
        </section>
 
  );
};


