import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Products.css';

function Products() {
  const productState = useSelector((state) => state.products);
  const categoryState = useSelector((state) => state.categories);
  // console.log("HERES THE CATEGORY STATE: ", categoryState);
  console.log('HERES THE PRODUCT STATE: ', productState);

  // Find the active category in the categories array
  const activeCategoryInfo = categoryState.list.find(
    (category) => category.name === categoryState.activeCategory
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
      {productState.displayList.map((product) => (
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
