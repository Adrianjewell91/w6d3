const APIUtil = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");

class UserSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $el.find('input');
    this.$searchResult = $el.find(".users");
    this.handleInput();
  }

  handleInput() {
    this.$input.on('input', () => {
      APIUtil.searchUsers(this.$input.val())
        .then(this.displaySearch.bind(this));
    });
  }

  displaySearch(res) {
    console.log(res);

    const followTogglesArr = [];

    this.$searchResult.empty();
    for(let i=0; i<res.length; i++) {
      const user = res[i];
      const $li = $("<li>");
      const $button = $("<button>");
      $button.data("user-id", user.id);
      $button.data("initial-follow-state", user.followed);
      // $button.text("Follow!");
      const toggle = new FollowToggle($button);
      followTogglesArr.push(toggle);

      $li.text(user.username);
      this.$searchResult.append($li);
      this.$searchResult.append($button);
    }
  }
}

module.exports = UserSearch;
