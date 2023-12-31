import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../redux/ProfileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 11;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((responce) => {
        this.props.setUserProfile(responce.data);
      });
  }

  render() {
    window.propsProfile = this.props;
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
