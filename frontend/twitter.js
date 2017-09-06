const FollowToggle = require('./follow_toggle.js');

$(() => {
  initFollowButtons();
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
