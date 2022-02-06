import React from 'react';

export default function TweetDisplay(props) {
  return <div className="tweetsdisplay">
    {props.tweets.map(tweet => {

      let d = new Date(tweet.createdAt)
      d = d.toDateString()
      console.log(d);
      return <div key={tweet._id} className="tweet-box">
        <img src={(tweet.authorImg) ? tweet.authorImg : ''} className='img' alt="" srcset="" />
        <div>
          <p className='desc'><span>{tweet.author}</span> - {d}</p>
          <div className='tweet'>{tweet.tweetMessage}</div>
        </div>
      </div>
    })}
  </div >;
}
