export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDc1qB_bkCNUzBEDilPpEzDRoX3u4KxtSmo6sw9xTUI2WDko6gyzZfC-shTv6FlxkQW1N1IqWn_8YKGDQtR7lQC1RYX3pvUY4Z-MF8a4ghRaCJBPG7FKMTuwdeAHDpQARPW2pg9z4OixlHa0BqvYHlfyGjF32_f",
};
const reducer = (state, action) => {
  console.log(action);
  let result;

  switch (action.type) {
    case "SET_USER":
      result = { ...state, user: action.user };
      break;

    case "SET_TOKEN":
      result = { ...state, token: action.token };
      break;

    case "SET_PLAYLISTS":
      result = { ...state, playlists: action.playlists };
      break;

    case "SET_DISCOVER_WEEKLY":
      result = { ...state, discover_weekly: action.discover_weekly };
      break;

    default:
      result = state;
      break;
  }
  return result;
};
export default reducer;
