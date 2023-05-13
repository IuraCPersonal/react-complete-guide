import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The First Book I ever Wrote'
  },
  {
    id: 'p2',
    price: 230,
    title: 'My First Phone',
    description: 'The First Phone I ever Bought'
  },
  {
    id: 'p3',
    price: 12,
    title: 'My Second Book',
    description: 'The Second Book I ever Wrote'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
