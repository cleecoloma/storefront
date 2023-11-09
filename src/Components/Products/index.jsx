'use strict';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  filterProducts,
  decrementInventory,
  updateProductInventory,
  fetchProducts,
} from '../../store/products';
import './Products.css';

function Products() {
  const productState = useSelector((state) => state.products);
  const categoryState = useSelector((state) => state.categories);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let activeCategoryInfo;
  console.log('HERES THE ACTIVE CATEGORY INFO IN PRODUCT : ', categoryState);

  // Find the active category in the categories array
  if (categoryState.list.results) {
    activeCategoryInfo = categoryState.list.results.find(
      (category) => category.name === categoryState.activeCategory
    );
  }

  const handleAddToCart = (product) => {
    if (product.inStock > 0) {
      dispatch({
        type: 'cart/add',
        payload: { item: product, quantity: 1 },
      });
      dispatch(decrementInventory({ id: product._id }));
      dispatch(
        updateProductInventory({ id: product._id, inventory: product.inStock })
      );
    }
  };

  useEffect(() => {
    // Fetch products data when the component mounts
    dispatch(fetchProducts()).then(() => {
      // Once data is fetched, filter products based on the active category
      dispatch(filterProducts({ category: categoryState.activeCategory }));
    });
  }, [dispatch, categoryState.activeCategory]);

  console.log('HERES THE PRODUCT STATE : ', productState);

  if (productState.displayList.results) {
    return (
      <div className='products'>
        <div className='category-info'>
          <Typography variant='h4' component='div'>
            {activeCategoryInfo ? activeCategoryInfo.name.toUpperCase() : ''}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {activeCategoryInfo ? activeCategoryInfo.description : ''}
          </Typography>
        </div>
        <div className='product-container'>
          {productState.displayList.results.map((product) => (
            <Card key={product._id} className='card' variant='outlined'>
              <CardContent className='card-content'>
                <Typography variant='h6' component='div'>
                  {product.name}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Price: ${product.price} | In Stock:{' '}
                  {product.inStock ? product.inStock : '0'}
                </Typography>
                <Button
                  variant='contained'
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  } else {
    // You can render a loading indicator or return null while waiting for the data
    return null;
  }
}

export default Products;
