// ADD_FAVORITE_REQUEST -> SAGA -> API -> ADD_FAVORITE_SUCCESS
export const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository },
});

export const addFavoriteSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data },
});
