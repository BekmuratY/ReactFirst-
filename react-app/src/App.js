import React from 'react';
import './styles.css';


const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};


const Footer = ({ copyright }) => {
  return (
    <footer>
      <p>&copy; {copyright}</p>
    </footer>
  );
};


const ProductList = ({ products }) => {
  return (
    <main>
      <ul>
        {products.map((product, index) => (
          index % 2 === 0 && (
            <li key={product.id} className={product.name === 'Банан' ? 'banana' : ''}>
              <em>{product.name}</em>
            </li>
          )
        ))}
      </ul>
    </main>
  );
};


const App = () => {
  const products = [
    { id: 1, name: 'Яблоко' },
    { id: 2, name: 'Банан' },
    { id: 3, name: 'Вишня' },
    { id: 4, name: 'Морковь' }
  ];

  return (
    <div>
      <Header title="Магазин продуктов" />
      <ProductList products={products} />
      <Footer copyright="2024" />
    </div>
  );
};

export default App;
