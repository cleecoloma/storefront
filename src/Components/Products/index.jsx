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
  const categories = useSelector((state) => state.categories.categories);

  // Filter products based on the active category
  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  // Find the active category in the categories array
  const activeCategoryInfo = categories.find(
    (category) => category.name === activeCategory
  );

  return (
    <div className='product-container'>
      <div className='category-info'>
        <Typography variant='h4' component='div'>
          {activeCategoryInfo.displayName}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {activeCategoryInfo.description}
        </Typography>
      </div>
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
