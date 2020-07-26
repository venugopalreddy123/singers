import React from "react";
import { Singers } from "./Singers/Singers";
function App() {
  return (
    <div className="App">
      <h1
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "20px",

          width: "1200px",
          height: "100px",
          backgroundColor: "darkblue",
        }}
      >
        Hello welcome to singers App{" "}
      </h1>
      <Singers
        banner="https://1847884116.rsc.cdn77.org/telugu/gallery/actress/geethamadhuri/Geetha220814_041.jpg"
        name="Geetha Madhuri"
        details="Indian playback singer"
      />
      <Singers
        banner="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmVTgn-X3RcvTtzY0nUKiyPNtbsWYX_af4HA&usqp=CAU"
        name="Dhvai Bhanusali"
        details="Indian playback singer"
      />
      <Singers
        banner="https://www.topplanetinfo.com/wp-content/uploads/2018/08/Shreya-Ghoshal.jpg"
        name="Shreya Ghoshal"
        details="Indian playback singer"
      />
      <Singers
        banner="https://1847884116.rsc.cdn77.org/telugu/gallery/actress/geethamadhuri/Geetha220814_041.jpg"
        name="Geetha Madhuri"
        details="Indian playback singer"
      />
      <Singers
        banner="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmVTgn-X3RcvTtzY0nUKiyPNtbsWYX_af4HA&usqp=CAU"
        name="Dhvai Bhanusali"
        details="Indian playback singer"
      />
      <Singers
        banner="https://www.topplanetinfo.com/wp-content/uploads/2018/08/Shreya-Ghoshal.jpg"
        name="Shreya Ghoshal"
        details="Indian playback singer"
      />
    </div>
  );
}

export default App;
