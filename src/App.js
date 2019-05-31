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

          {/* wwrapper */}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

const Test = () => {
  return (
    <div><h3>Hello</h3></div>
  )
}

const App = () => {
  return (
    <div>
      <Router>
        <Provider store={store}>

          <Route exact path="/" component={Main} />
          <Route path="/PostForm" component={PostForm} />
        </Provider>
      </Router>
    </div>)
}
export default App;
