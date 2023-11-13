import { useEffect, useReducer } from "react";
import Header from "./Header";
import Mian from "./Mian";
import Loader from "./Loader";
import Error from "./Error";
import Start from "./Start";
import Question from "./Question";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import Finishscreen from "./Finishscreen";
const initailstate = {
  status: "loading",
  index: 0,
  quesions: [],
  answer: null,
  point: 0,
  hightscore:0
};
function reduser(state, action) {
  switch (action.type) {
    case "dataresvied":
      return {
        ...state,
        quesions: action.payload,
        status: "ready",
      };

    case "error":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "answercurrect":
      const quesions = state.quesions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        point:
          action.payload === quesions.correctOption
            ? state.point + quesions.points
            : state.point,
      };
    case "nextquestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
      case 'finish':
        return {
          ...state,
          status:'finish',
          hightscore:
          state.point>state.hightscore ?state.point:state.hightscore
        }
    default:
      throw new Error("that is wrong");
  }
}
function App() {
  const [{ status, quesions, index, answer, point ,hightscore}, dispatch] = useReducer(
    reduser,
    initailstate
  );
  let numberquestion = quesions.length;
  let points = quesions.reduce((pre, cur) => pre + cur.points, 0);
  console.log(points);
  console.log(quesions, index);

  useEffect(function () {
    async function GetData() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataresvied", payload: data });
      } catch {
        dispatch({ status: "error" });
      }
    }
    GetData();
  }, []);
  return (
    <div className="app">
      <Header />
      <Mian>
        {status === "error" && <Error />}
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <Start dispatch={dispatch} numberquestion={numberquestion} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numberquestion={numberquestion}
              point={point}
              maxpoint={points}
            />
            <Question
              questions={quesions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextQuestion dispatch={dispatch} index={index} numberquestion={numberquestion} answer={answer} />
          </>
        )}
        {status==='finish'&&<Finishscreen hightscore={hightscore} point={point} maxpoints={points} />}
      </Mian>
    </div>
  );
}

export default App;
