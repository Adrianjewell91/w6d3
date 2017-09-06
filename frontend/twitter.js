const FollowToggle = require('./follow_toggle.js');
const UserSearch = require("./user_search.js");

$(() => {
  initFollowButtons();
  initUserSearch();
});

const initFollowButtons = function initFollowButtons() {
  const $followButtons = $(".follow-toggle");

  const followToggles = [];

  $followButtons.each((idx,el) => {
    // console.log($followButtons[0]);
    // console.log(el);
    // console.log($(el));
    const followToggle = new FollowToggle($(el));
    followToggles.push(followToggle);
  });
};

const initUserSearch = function initUserSearch() {
  const $userSearches = $(".users-search");

  const userSearches = [];

  $userSearches.each((idx, el) => {
    const userSearch = new UserSearch($(el));
    userSearches.push(userSearch);
  });
};
