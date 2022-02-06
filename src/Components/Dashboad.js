import React from "react";
import "./Styles/Styles.css";
import TweetDisplay from "./TweetDisplay";
import TweetForm from "./TweetForm";

export default function Dashboad(props) {
  return (
    <div className="dashboard">
      <TweetForm
        state={props.state}
        addTweet={props.addTweet}
        getTweet={props.getTweets}
        setState={props.setState}
      ></TweetForm>
      <TweetDisplay tweets={props.tweets}></TweetDisplay>
    </div>
  );
}
