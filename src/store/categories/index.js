'use strict';

const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

const initialState = {
  categories: [
    {
      name: 'electronics',
      displayName: 'ELECTRONICS',
      description:
        'The electronics category encompasses a wide range of consumer and digital gadgets, including smartphones, laptops, cameras, and audio equipment, allowing customers to explore and purchase the latest technological innovations and devices.',
    },
    {
      name: 'homeAndFurniture',
      displayName: 'HOME AND FURNITURE',
      description:
        'Home and furniture e-commerce stores offer an extensive selection of items for interior design and home improvement, from sofas and tables to lighting fixtures and decorative accents, making it easy for shoppers to furnish and decorate their homes with style.',
    },
    {
      name: 'healthAndWellness',
      displayName: 'HEALTH AND WELLNESS',
      description:
        'Health and wellness e-commerce caters to individuals looking to enhance their well-being, offering products like dietary supplements, fitness gear, skincare solutions, and holistic health aids, providing a convenient way to support a healthy and balanced lifestyle.',
    },
  ],
  activeCategory: null,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: payload,
      };
    default:
      return state;
  }
}

const setActiveCategory = (categoryName) => {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: categoryName,
  };
};

export { reducer, setActiveCategory };