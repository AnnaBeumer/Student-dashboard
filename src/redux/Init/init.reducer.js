import tsvData from "../../data/mockdata1.tsv";
import { useEffect } from "react";
import { DATAFETCH } from "./init.types";
import { useDispatch } from "react-redux";

const INITIAL_STATE = {
  data: {},
};

const FetchData = (state = INITIAL_STATE, action) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const dataCollector = async () => {
      const response = await fetch(tsvData);
      const text = await response.text();
      parser(text);
    };
    dispatch(dataCollector());
  }, [dispatch]);

  const parser = (rawData) => {
    const lineReducer = (accumelator, line, index) => {
      if (index === 0) {
        return accumelator;
      }
      const columnsArr = line.split("\t");
      const student = columnsArr[0];
      const assignment = columnsArr[1];
      const difficulty = columnsArr[2];
      const funFactor = columnsArr[3];
      if (accumelator.hasOwnProperty(student) === false) {
        accumelator[student] = {
          assignments: {
            [assignment]: { difficulty: difficulty, funFactor: funFactor },
          },
        };
      } else {
        accumelator[student].assignments[assignment] = {
          difficulty: difficulty,
          funFactor: funFactor,
        };
      }
      return accumelator;
    };
    const linesArr = rawData.split("\r\n");
    const parsedData = linesArr.reduce(lineReducer, {});
    console.log(parsedData);
  };

  switch (action.type) {
    case DATAFETCH:
      return {
        ...state,
        data: state.parsedData,
      };
    default:
      return state;
  }
};

export default FetchData;
