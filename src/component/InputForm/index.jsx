import React from "react";
import { useSelector } from "react-redux";
import { Currency, Wrapper } from "./style";

const InputForm = (props) => {
  const state = useSelector((state) => state.converter);
  return (
    <Wrapper>
      <h1>{props.title}</h1>

      <div className="currencies">
        {state.bases?.map((e, i) => (
          <Currency
            active={props.active}
            element={e}
            key={i}
            className="currency"
            onClick={() => props.currencyClicked(e)}
          >
            {e}
          </Currency>
        ))}
      </div>

      <input
        type="number"
        value={props.value}
        onChange={(e) => props.changeValue(e.target.value)}
      />
    </Wrapper>
  );
};
export { InputForm };
