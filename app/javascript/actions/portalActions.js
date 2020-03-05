import PortalConstants from '../constants/portalConstants';

export const fetchStudios = () => {
  return (dispatch) => {
    dispatch({ type: PortalConstants.FETCHING_STUDIOS });
    return $.ajax({
      method: 'GET',
      url: '/api/studios',
      dataType: 'json'
    }).success(function(response){
      return dispatch({
        type: PortalConstants.STUDIOS_RECEIVED,
        payload: response
      });
    });
  }
}

export const toggleStudioSelection = (studioIds) => {
  return (dispatch) => {
    dispatch({
      type: PortalConstants.TOGGLE_STUDIOS,
      studioIds: studioIds
    })
  }
}

export const toggleDaySelection = (days) => {
  return (dispatch) => {
    dispatch({
      type: PortalConstants.TOGGLE_DAYS,
      days: days
    })
  }
}
