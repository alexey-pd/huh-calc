import React from "react";
import { useUnit } from "effector-react";
import {
  $rateEur,
  $rateRsd,
  $priceRsd,
  $priceInEur,
  $priceInRub,
  setRateEur,
  setRateRsd,
  setPriceRsd
} from "./model";

const Counter = () => {
  const [rateEur, rateRsd, priceInEur, priceInRub, priceRsd] = useUnit([
    $rateEur,
    $rateRsd,
    $priceInEur,
    $priceInRub,
    $priceRsd
  ]);

  return (
    <>
      <p>price in rsd</p>
      <input
        type="number"
        min={0}
        value={priceRsd}
        onChange={(e) => {
          setPriceRsd(+e.target.value);
        }}
      />
      <br />
      <br />
      <hr />
      <br />
      {priceRsd > 0 && (
        <>
          {!Number.isNaN(priceInEur) && <p>{priceInEur} €</p>}
          {!Number.isNaN(priceInRub) && <p>{priceInRub} ₽</p>}
        </>
      )}
      <p>rate ₽ to €</p>
      <input
        type="number"
        min={0}
        value={rateEur}
        onChange={(e) => {
          setRateEur(+e.target.value);
        }}
      />
      <br />
      <br />
      <p>rate € to rsd</p>
      <input
        type="number"
        min={0}
        value={rateRsd}
        onChange={(e) => {
          setRateRsd(+e.target.value);
        }}
      />
      <br />
      <br />
      <br />
    </>
  );
};

export default Counter;
