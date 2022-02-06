import "./App.css";
import React, { useState, Component } from "react";
import SignIn from "./Components/SignIn";
import { auth } from "./Firebase/firebase.utils";
import Dashboad from "./Components/Dashboad";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BiLoaderCircle } from 'react-icons/bi'
const axios = require("axios");


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      username: "",
      message: "",
      email: '',
      tweets: [],
      photo_url: '',
      load: true
    };
    this.addTweet = this.addTweet.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.setState = this.setState.bind(this)
  }
  addTweet = async () => {
    this.setState({ load: true })
    const response = await axios({
      method: "post",
      url: "https://tweet-api-clone.herokuapp.com/api/v1/tweet",
      headers: {
        "Access-Control-Allow-Orign": "*",
        "Access-Control-Allow-Headers": "*",
      },
      data: {
        author: this.state.username,
        tweetMessage: this.state.message,
        authorEmail: this.state.email,
        authorImg: this.state.photo_url
      },
    });
    this.setState({ message: '' })
    this.getTweets();
    this.setState({ load: false })
  };

  getTweets = async () => {
    this.setState({ load: true })
    const response = await fetch("https://tweet-api-clone.herokuapp.com/api/v1/tweets")
      .then((data) => data.json())
      .then((data) => {
        data.data.tweets = data.data.tweets.reverse();
        this.setState({ tweets: data.data.tweets });
      });
    this.setState({ load: false })
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      if (user !== null) {
        this.setState({ username: user.displayName, email: user.email, photo_url: user.photoURL });
      }
    });
    this.getTweets();
    this.setState({ load: false })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        {this.state.currentUser === null ? (
          <SignIn></SignIn>
        ) : (
          (this.state.load) ? <BiLoaderCircle className="loading" />
            :
            <Dashboad
              state={this.state}
              setState={this.setState}
              addTweet={this.addTweet}
              getTweets={this.getTweets}
              tweets={this.state.tweets}
            ></Dashboad>
        )}
        <footer>MADE WITH <AiFillHeart className="heart" /> BY ROHAN</footer>
      </div>
    );
  }
}

export default App;
