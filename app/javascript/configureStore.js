import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PortalConstants from './constants/portalConstants';

const initialState = {
  studios: {},
  fetchingStudios: false,
  selectedStudios: [],
  selectedDays: [0, 1, 2, 3, 4, 5, 6],
  studioTabExpanded: false,
  classSessions: []
}

function rootReducer(state, action) {
  switch (action.type) {
    case PortalConstants.FETCHING_STUDIOS:
      return Object.assign({}, state, {
        fetchingStudios: true
      });
    case PortalConstants.STUDIOS_RECEIVED:
      return Object.assign({}, state, {
        fetchingStudios: false,
        selectedStudios: Object.keys(action.payload.studios),
        studios: action.payload.studios
      });
    case PortalConstants.TOGGLE_STUDIOS:
      return Object.assign({}, state, {
        selectedStudios: action.studioIds
      });
    case PortalConstants.TOGGLE_DAYS:
      return Object.assign({}, state, {
        selectedDays: action.days 
      })
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}
