import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

function useDebounce(value) {
  const [debouncedValue, setDebouncedValue] = useState();
  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  return debouncedValue;
}

function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  return (
    <div>
      <label>Debouncer</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <p>debouncedValue</p>
      <p>{debouncedValue}</p>
      <br />
      <p>value</p>
      <p>{value}</p>
    </div>
  );
}

export default App;
