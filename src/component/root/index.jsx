import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFromBase,
  changeFromValue,
  changeToBase,
  getBases,
  getRates,
} from "../../redux/convertedReducer";
import { InputForm } from "../InputForm";
import { Container, Converter } from "./style";

const Root = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.converter);

  useEffect(() => {
    dispatch(getBases());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRates(state.fromBase));
  }, [state.fromBase, dispatch]);
  return (
    <Container>
      <Converter>
        <InputForm
          title="I have"
          currencyClicked={(value) => dispatch(changeFromBase(value))}
          active={state.fromBase}
          value={state.fromValue}
          changeValue={(val) => dispatch(changeFromValue(val))}
        />

        <InputForm
          title="I want to buy"
          currencyClicked={(value) => dispatch(changeToBase(value))}
          active={state.toBase}
          value={(state.fromValue * state.rates[state.toBase]).toFixed(2)}
          changeValue={() => {}}
        />
      </Converter>
    </Container>
  );
};
export { Root };
