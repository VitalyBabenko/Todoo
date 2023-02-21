import { useRef, useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const ref = useRef();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    ref,
    value,
    setValue,
    onChange: handleChange,
  };
};
