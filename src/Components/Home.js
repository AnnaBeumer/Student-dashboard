// import Init from "./Init";
import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "../redux/Counter/counter.actions";

import { dataFetcher } from "../redux/Init/init.actions";

const Home = (props) => {
  return (
    <div>
      <h1>Home page</h1>
      {/* <Init /> */}
      <div>{props.data}</div>
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    datafetch: state.datafetcher.datafetch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
    dataFetcher: () => dispatch(dataFetcher()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
