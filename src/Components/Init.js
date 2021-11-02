import tsvData from "../data/mockdata1.tsv";
import { useState, useEffect } from "react";

const Init = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(tsvData);
      const text = await response.text();
      parser(text);
    };
    fetchData();
  }, []);

  //   functie maken die rauwe data parsed naar vorm
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
    setData(parsedData);
  };

  return (
    <ul>
      {Object.keys(data).map((student, index) => {
        return <li key={index}>{student}</li>;
      })}
    </ul>
  );
};

export default Init;
