import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Products.css';

function Products() {
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );
  const products = useSelector((state) => state.products);

  // Filter products based on the active category
  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className='product-container'>
      {filteredProducts.map((product) => (
        <Card key={product.id} className='card' variant='outlined'>
          <CardContent className='card-content'>
            <Typography variant='h6' component='div'>
              {product.name}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Price: ${product.price} | In Stock: {product.inventory}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Products;
