import MainView from "./MainView";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad(agent.Articles.all());
  }

  render() {
    console.log("article:" + agent.Articles.all.length);
    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <MainView />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
