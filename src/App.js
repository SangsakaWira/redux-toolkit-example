import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addAngka, subAngka } from "./features/count";

export default function App() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count.count}</h1>
      <button
        onClick={() => {
          dispatch(addAngka(10));
        }}
      >
        Add Angka
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(subAngka(10));
        }}
      >
        Sub Angka
      </button>
    </div>
  );
}
