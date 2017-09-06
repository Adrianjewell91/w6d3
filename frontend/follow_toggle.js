const APIUtil = require("./api_util.js");

class FollowToggle{
  constructor($el){
    this.$el = $el;
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.render();

    this.$el.on("click", this.handleClick.bind(this));
    //(e) => this.handleClick(e));
    // console.log("it prsocessed");
  }
  render() {
    const state = this.followState ? "Unfollow!" : "Follow";
    this.$el.text(state);
    this.$el.attr('disabled', false);
  }

  handleClick(e){
    e.preventDefault();

    this.$el.attr('disabled', true);

    const successCallback = (res) => {
      console.log(res);

      this.followState = !this.followState;
      this.$el.data("initial-follow-state",this.followState);
      this.render();
    };

    const errorCb = (error) => {
      console.log(error);
    };

    if (this.followState) {
      APIUtil.unfollowUser(this.userId).then(successCallback);
    } else {
      APIUtil.followUser(this.userId).then(successCallback);
    }
  }
}

module.exports = FollowToggle;
