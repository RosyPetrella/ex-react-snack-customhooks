import { useState } from "react";
export default function UseSwitch(initialValue = false) {
  const [isOn, SetIsOn] = useState(initialValue);

  function toggle() {
    SetIsOn((prev) => !prev);
  }

  return [isOn, toggle];
}
