import React, { Component } from "react";
import ClickButton from "../util/clickButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

//Redux
import { connect } from "react-redux";
import { likeScream, unlikeScream } from "../redux/actions/dataActions";

export class LikeButton extends Component {
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(like => like.screamId === this.props.screamId)
    )
      return true;
    else return false;
  };

  likeScream = () => {
    this.props.likeScream(this.props.screamId);
  };

  unlikeScream = () => {
    this.props.unlikeScream(this.props.screamId);
  };

  render() {
    console.log(this.props.user);
    const { authenticated } = true;
    const likeButton = true ? (
      <ClickButton tip="Like">
        <Link to="/login">
          <FavoriteBorder color="primary" />
        </Link>
      </ClickButton>
    ) : this.likedScream() ? (
      <ClickButton tip="Undo like" onClick={this.unlikeScream}>
        <FavoriteIcon color="primary" />
      </ClickButton>
    ) : (
      <ClickButton tip="Like" onClick={this.likeScream}>
        <FavoriteBorder color="primary" />
      </ClickButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
  likescream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  likeScream,
  unlikeScream
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LikeButton);
