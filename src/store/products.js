'use strict';

const initialState = {
  categories: [
    { name: 'Electronics', products: 0 },
    { name: 'Home and Furniture', products: 0 },
    { name: 'Health and', products: 0 },
  ],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  // console.log('HERE IS THE STATE', state);
  // console.log('HERE IS THE ACTION', action);
  switch (type) {
    case 'INCREMENT_VOTES':
      return {
        candidates: state.candidates.map((candidate) => {
          if (candidate.name === payload) {
            return {
              ...candidate,
              votes: candidate.votes + 1, // the one change we want to make to a 'candidate' object
            };
          } else {
            return candidate; // keep the candidate
          }
        }),
        totalVotes: state.totalVotes + 1,
      };
    default:
      return state;
  }
}

// actions / action creator => a function that returns an action object
export const increment = (name) => {
  return {
    type: 'INCREMENT_VOTES',
    payload: name,
  };
};

export default reducer;
