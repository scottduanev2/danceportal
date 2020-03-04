import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PortalConstants from './constants/portalConstants';

const initialState = {
  studios: [],
  fetchingStudios: false,
  selectedDays: [0, 1, 2, 3, 4, 5, 6],
  studioTabExpanded: false,
  classSessions: []
}

function rootReducer(state, action) {
  let newState;
  switch (action.type) {
    case PortalConstants.FETCHING_STUDIOS:
      newState = state;
      newState.fetchingStudios = true;
      return newState;
    case PortalConstants.STUDIOS_RECEIVED:
      newState = state;
      newState.fetchingStudios = false;
      newState.studios = action.payload.studios;
      return newState;
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}
