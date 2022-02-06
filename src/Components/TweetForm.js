import React from "react";
import { auth } from './../Firebase/firebase.utils'
import { IoIosRefreshCircle } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";

export default function TweetForm(props) {
  return (
    <div className="ops">
      <div className="tweetform">
        <label htmlFor="">
          <textarea
            onChange={(e) => props.setState({ message: e.target.value })}
            type="text"
            value={props.state.message}
            placeholder="YOUR MESSAGE"
          />
        </label>
        <button type="submit" onClick={props.addTweet}>
          TWEET
        </button>
      </div>
      <div>
        <CgLogOut onClick={() => { auth.signOut() }} />
        <IoIosRefreshCircle onClick={props.getTweet} />
      </div>
    </div>
  );
}
