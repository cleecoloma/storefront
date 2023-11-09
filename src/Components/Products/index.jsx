import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { decrementInventory } from '../../store/products';
import './Products.css';

function Products() {
  const productState = useSelector((state) => state.products);
  const categoryState = useSelector((state) => state.categories);
  const cartState = useSelector((state) => state.cart);
  console.log("HERES THE CATEGORY STATE: ", categoryState);
  // console.log('HERES THE CART STATE: ', cartState);
  const dispatch = useDispatch();

  // Find the active category in the categories array
  const activeCategoryInfo = categoryState.list.find(
    (category) => category.name === categoryState.activeCategory
  );

  const handleAddToCart = (product) => {
    console.log('HERES THE PRODUCT OBJ ', product);
    if (product.inventory > 0) {
      dispatch({
        type: 'cart/add',
        payload: { item: product, quantity: 1 }, //
      });
      dispatch(decrementInventory(product));
    }
  };
  console.log('HERES THE ACTIVE CATEGORY ', activeCategoryInfo);

  return (
    <div className='products'>
      <div className='category-info'>
        <Typography variant='h4' component='div'>
          {/* {activeCategoryInfo.name} */}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {/* {activeCategoryInfo.description ? activeCategoryInfo.description : null} */}
        </Typography>
      </div>
      <div className='product-container'>
        {productState.displayList.map((product) => (
          <Card key={product.id} className='card' variant='outlined'>
            <CardContent className='card-content'>
              <Typography variant='h6' component='div'>
                {product.name}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Price: ${product.price} | In Stock: {product.inventory}
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
}

export default Products;
