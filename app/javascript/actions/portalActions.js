import PortalConstants from '../constants/portalConstants';

export const fetchStudios = () => {
  return (dispatch) => {
    dispatch({ type: PortalConstants.FETCHING_STUDIOS });
    return $.ajax({
      method: 'GET',
      url: '/api/studios',
      dataType: 'json'
    }).success(function(response){
      dispatch({
        type: PortalConstants.STUDIOS_RECEIVED,
        payload: response
      })
    })
  }
}
