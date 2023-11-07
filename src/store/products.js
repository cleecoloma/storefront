'use strict';

const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

const initialProducts = [
  {
    id: 1,
    category: 'electronics',
    name: 'Smartphone',
    description: 'A powerful and modern smartphone with advanced features.',
    price: 599.99,
    inventory: 10,
  },
  {
    id: 2,
    category: 'electronics',
    name: 'Laptop',
    description: 'A high-performance laptop for work and entertainment.',
    price: 999.99,
    inventory: 5,
  },
  {
    id: 3,
    category: 'electronics',
    name: 'Headphones',
    description: 'Premium over-ear headphones for immersive audio experience.',
    price: 149.99,
    inventory: 15,
  },
  {
    id: 4,
    category: 'electronics',
    name: 'Camera',
    description: 'A professional DSLR camera for photography enthusiasts.',
    price: 799.99,
    inventory: 8,
  },
  {
    id: 5,
    category: 'electronics',
    name: 'Tablet',
    description: 'A versatile tablet for work and entertainment on the go.',
    price: 299.99,
    inventory: 12,
  },
  {
    id: 6,
    category: 'homeAndFurniture',
    name: 'Sofa Set',
    description: 'A comfortable and stylish sofa set for your living room.',
    price: 799.99,
    inventory: 7,
  },
  {
    id: 7,
    category: 'homeAndFurniture',
    name: 'Dining Table',
    description: 'A modern dining table for family gatherings and meals.',
    price: 349.99,
    inventory: 4,
  },
  {
    id: 8,
    category: 'homeAndFurniture',
    name: 'Bed Frame',
    description: "A sturdy and elegant bed frame for a good night's sleep.",
    price: 499.99,
    inventory: 6,
  },
  {
    id: 9,
    category: 'homeAndFurniture',
    name: 'Coffee Table',
    description: 'A stylish coffee table to complement your living room decor.',
    price: 149.99,
    inventory: 8,
  },
  {
    id: 10,
    category: 'homeAndFurniture',
    name: 'Wardrobe',
    description:
      'A spacious and organized wardrobe for your clothing storage needs.',
    price: 399.99,
    inventory: 5,
  },
  {
    id: 11,
    category: 'healthAndWellness',
    name: 'Protein Powder',
    description: 'High-quality protein powder for muscle recovery and growth.',
    price: 29.99,
    inventory: 20,
  },
  {
    id: 12,
    category: 'healthAndWellness',
    name: 'Yoga Mat',
    description: 'A non-slip yoga mat for comfortable and safe workouts.',
    price: 19.99,
    inventory: 15,
  },
  {
    id: 13,
    category: 'healthAndWellness',
    name: 'Essential Oils Set',
    description: 'A set of essential oils for aromatherapy and relaxation.',
    price: 24.99,
    inventory: 12,
  },
  {
    id: 14,
    category: 'healthAndWellness',
    name: 'Fitness Tracker',
    description: 'A smart fitness tracker to monitor your health and workouts.',
    price: 79.99,
    inventory: 10,
  },
  {
    id: 15,
    category: 'healthAndWellness',
    name: 'Skin Care Kit',
    description:
      'A complete skincare kit for a radiant and healthy complexion.',
    price: 49.99,
    inventory: 18,
  },
];

function reducer(state = initialProducts, action) {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return initialProducts.filter(product => product.category === action.payload);
    default:
      return state;
  }
}

export const filterProducts = (categoryName) => {
  return {
    type: FILTER_PRODUCTS,
    payload: categoryName,
  };
}

export default reducer;
