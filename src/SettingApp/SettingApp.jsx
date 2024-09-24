import React, { useRef, useEffect } from "react";
import { mount } from "setting_app/App";

// you should be able to do the same kind of pattern in other frameworks like Angular or Vue.
export default ({ onSubmit, mode }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { onSubmit, mode });
  }, [mode]);

  return <div ref={ref} />;
};
