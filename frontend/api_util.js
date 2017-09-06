const APIUtil = {
  followUser: id => {
    return $.ajax({
      dataType: "JSON",
      url: `/users/${id}/follow`,
      type: 'POST',
    });
  },

  unfollowUser: id => {
    return $.ajax({
      dataType: "JSON",
      url: `/users/${id}/follow`,
      type: 'DELETE',
    });
  },

  searchUsers: queryVal => {
    return $.ajax({
      dataType: "JSON",
      type: "GET",
      url: '/users/search',
      data: {query: queryVal}
    });
  }
};

module.exports = APIUtil;
