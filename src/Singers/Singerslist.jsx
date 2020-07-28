import React from "react";
import { Singers } from "./Singers";
export class Singerslist extends React.Component {
  getSingers = (banner, name, details) => {
    return <Singers banner={banner} name={name} details={details} />;
  };
  render() {
    return (
      <div>
        <h1>All singers</h1>
        {this.getSingers(
          "https://1847884116.rsc.cdn77.org/telugu/gallery/actress/geethamadhuri/Geetha220814_041.jpg",
          "Geetha Madhuri",
          "Indian playback singer"
        )}
        {this.getSingers(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmVTgn-X3RcvTtzY0nUKiyPNtbsWYX_af4HA&usqp=CAU",
          "Dhvai Bhanusali",
          "Indian playback singer"
        )}
        {this.getSingers(
          "https://www.topplanetinfo.com/wp-content/uploads/2018/08/Shreya-Ghoshal.jpg",
          "Shreya Ghoshal",
          "Indian playback singer"
        )}
        {this.getSingers(
          "data:image/jpeg;base64,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",
          "Devi Sri Prasad",
          "Indian Music Director"
        )}
        {this.getSingers(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTePf957bdstvCibr-gAPq2kZK7Zqi8zWe8Hw&usqp=CAU",
          "Sravana Bhargavi",
          "Indian Playback Singer"
        )}
        {this.getSingers(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThbfwOEU5yreBXSEMXvoDGYwhao5SWZu0vEA&usqp=CAU",
          "Pranavi",
          "Indian Playback Singer"
        )}
      </div>
    );
  }
}
