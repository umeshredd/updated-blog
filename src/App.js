import React from "react";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RightLinks from "./components/header/rightlinks";
import LeftLinks from "./components/header/leftlinks";
import Posts from "./components/blog/posts";
import { Provider } from "react-redux";
import store from "./store/store";
import { loginUser } from "./actions/authActions";
import Typography from "@material-ui/core/Typography";
import Headermenu from "./components/common/Header";
import "./App.css";
import PostForm from "./components/blog/PostForm";

if (localStorage.getItem("currentUser") === null) {
  store.dispatch(loginUser("1"));
}

function Main() {
  return (
    <div style={{ paddingTop: 20, paddingRight: 30, paddingLeft: 30 }}>
      <Header
        color="white"
        rightLinks={<RightLinks />}
        leftLinks={<LeftLinks />}
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Headermenu />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 2, borderColor: "red", borderWidth: 1 }}>
          <Posts />
        </div>
        <div style={{ flex: 1, borderColor: "red", borderWidth: 1 }}>
          {/* Heading */}

          <Typography
            variant="subheading"
            align="left"
            style={{ paddingBottom: 2 }}
          >
            POPULAR ON +READ
          </Typography>
          <div
            style={{
              height: 1,
              width: "100%",
              padding: 1,
              backgroundColor: "gray",
              marginBottom: 10,
              marginTom: 10
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "0 20px" }}>
              <span style={{ fontSize: 25, color: "#878787" }}>01</span>
            </div>
            <div>
              <span style={{ fontWeight: "700", marginBottom: 20 }}>
                Cloud covered: What's new with Cloud in August
              </span>
              <p
                style={{
                  paddingBottom: 2,
                  fontWeight: "500 !important",
                  color: "#878787"
                }}
              >
                As we wrote earlier this week, there’s a new dedicated home for
                news about Google Cloud. As a result, we’re kicking off a series
                highlighting interesting stories from Cloud so you don’t miss
                out. Without further ado, here’s a look at what happened with
                Google Cloud in August.
              </p>
            </div>
          </div>

          {/* {First para} */}
          <div
            style={{
              height: 1,
              width: "100%",
              padding: 1,
              backgroundColor: "gray",
              marginBottom: 10,
              marginTom: 10
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "0 20px" }}>
              <span style={{ fontSize: 25, color: "#878787" }}>02</span>
            </div>
            <div>
              <span style={{ fontWeight: "700", marginBottom: 20 }}>
                We showed you how to save time in spreadsheets.
              </span>
              <p
                style={{
                  paddingBottom: 2,
                  fontWeight: "500 !important",
                  color: "#878787"
                }}
              >
                For many of us, repetitive tasks in spreadsheets can be a drain
                on both time and focus. The Macro Recorder in Sheets can help
                you record time-consuming actions and automatically play them
                back—no coding necessary. Here’s how to use it.
              </p>
            </div>
          </div>
          {/* secon para */}
          <div style={{ paddingTop: 50 }} />
          <Typography
            variant="subheading"
            align="left"
            style={{ paddingBottom: 2 }}
          >
            TOP WRITERS ON +READ
          </Typography>
          <div
            style={{
              height: 1,
              width: "100%",
              padding: 1,
              backgroundColor: "gray",
              marginBottom: 10
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "0 20px" }}>
              <span style={{ fontSize: 25, color: "#878787" }}>01</span>
            </div>
            <div>
              <span style={{ fontWeight: "700", marginBottom: 20 }}>
                We took a closer look at TPUs.
              </span>
              <p
                style={{
                  paddingBottom: 2,
                  fontWeight: "500 !important",
                  color: "#878787"
                }}
              >
                The Tensor Processing Unit (TPU) is a custom chip we designed
                from scratch for machine learning workloads. They’re used to
                power popular Google products like Translate, Photos, and Gmail,
                and they’re also available to our Google Cloud customers.
                Curious about how neural networks work, and what TPUs can do?
                This handy primer can teach you.
              </p>
            </div>
          </div>

          {/* {First para} */}
          <div
            style={{
              height: 1,
              width: "100%",
              padding: 1,
              backgroundColor: "gray",
              marginBottom: 10,
              marginTom: 10
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "0 20px" }}>
              <span style={{ fontSize: 25, color: "#878787" }}>02</span>
            </div>
            <div>
              <span style={{ fontWeight: "700", marginBottom: 20 }}>
                We used AI to identify street art.
              </span>
              <p
                style={{
                  paddingBottom: 2,
                  fontWeight: "500 !important",
                  color: "#878787"
                }}
              >
                There are more ways to take advantage of machine learning than
                business uses like identifying products or forecasting demand.
                One Googler used AutoML Vision to build a graffiti artist
                classifier that helps you identify the street artist behind your
                favorite urban mural.
              </p>
            </div>
          </div>

          {/* secon para */}
          <div style={{ paddingTop: 50 }} />
          <Typography
            variant="subheading"
            align="left"
            style={{ paddingBottom: 2 }}
          >
            TOP WRITERS ON +READ
          </Typography>
          <div
            style={{
              height: 1,
              width: "100%",
              padding: 1,
              backgroundColor: "gray",
              marginBottom: 10
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "0 20px" }}>
              <span style={{ fontSize: 25, color: "#878787" }}>01</span>
            </div>
            <div>
              <span style={{ fontWeight: "700", marginBottom: 20 }}>
                We shared DevOps best practices.
              </span>
              <p
                style={{
                  paddingBottom: 2,
                  fontWeight: "500 !important",
                  color: "#878787"
                }}
              >
                DevOps aims to unify software development and operations, and is
                an important component of fast-moving teams. Adopting its best
                practices can help them develop, deliver, and manage software
                faster. In August, we sponsored Accelerate: State of DevOps
                2018: Strategies for a New Economy, a survey of almost 1,900
                DevOps professionals that offers a comprehensive look at how
                software teams are using DevOps, and what’s working for the
                highest performers among them.
              </p>
            </div>
          </div>

          {/* {First para} */}
          <div
            style={{
              height: 1,
              width: "100%",
              padding: 1,
              backgroundColor: "gray",
              marginBottom: 10,
              marginTom: 10
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "0 20px" }}>
              <span style={{ fontSize: 25, color: "#878787" }}>02</span>
            </div>
            <div>
              <span style={{ fontWeight: "700", marginBottom: 20 }}>
                Those So called Videos are Good for Your health
              </span>
              <p
                style={{
                  paddingBottom: 2,
                  fontWeight: "500 !important",
                  color: "#878787"
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
            </div>
          </div>

          {/* break */}
          {/* secon para */}
          <div style={{ paddingTop: 50 }} />
          <Typography
            variant="subheading"
            align="left"
            style={{ paddingBottom: 2 }}
          >
            TOP WRITERS ON +READ
          </Typography>
          <div
            style={{
              height: 1,
              width: "100%",
              padding: 1,
              backgroundColor: "gray",
              marginBottom: 10
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "0 20px" }}>
              <span style={{ fontSize: 25, color: "#878787" }}>01</span>
            </div>
            <div>
              <span style={{ fontWeight: "700", marginBottom: 20 }}>
                Demo Day Asia 2019: the countdown to Bangkok begins
              </span>
              <p
                style={{
                  paddingBottom: 2,
                  fontWeight: "500 !important",
                  color: "#878787"
                }}
              >
                Top-notch startups from all over the region applied to be a part
                of our second Demo Day Asia, with ideas ranging from an imaging
                device for early breast cancer detection to making solar energy
                more accessible while improving education opportunities for
                kids. This year, we’re pleased to welcome eleven startups from
                around the region as finalists. Drumroll please…
              </p>
            </div>
          </div>

          {/* {First para} */}
          <div
            style={{
              height: 1,
              width: "100%",
              padding: 1,
              backgroundColor: "gray",
              marginBottom: 10,
              marginTom: 10
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "0 20px" }}>
              <span style={{ fontSize: 25, color: "#878787" }}>02</span>
            </div>
            <div>
              <span style={{ fontWeight: "700", marginBottom: 20 }}>
                Pick up the pace with three fitness apps, powered by Google Maps
              </span>
              <p
                style={{
                  paddingBottom: 2,
                  fontWeight: "500 !important",
                  color: "#878787"
                }}
              >
                When I began training for my first marathon 12 years ago,
                planning my routes was a big challenge. I’d often write
                directions on my wrist or carry a crumpled up paper map in my
                pocket. I’ve run many more marathons since then, and just last
                month, ran the Boston Marathon for the first time. But my
                training for Boston was vastly different because of my work at
                Google. I’m on a team that helps businesses—like those who build
                location-enabled fitness apps—to integrate data and insights
                from Google Maps into their products. So this time around I
                relied on a few of those apps to train, instead of my usual
                primitive methods (pro tip: paper maps don’t handle sweat very
                well).
              </p>
            </div>
          </div>

          {/* wwrapper */}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

const Test = () => {
  return (
    <div>
      <h3>Hello</h3>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Route exact path="/" component={Main} />
          <Route path="/PostForm" component={PostForm} />
        </Provider>
      </Router>
    </div>
  );
};
export default App;
