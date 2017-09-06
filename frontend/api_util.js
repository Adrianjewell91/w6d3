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
  }
};

module.exports = APIUtil;
