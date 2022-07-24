import { restore, combine, createEvent } from "effector";

const setRateEur = createEvent<number>();

const $rateEur = restore<number>(setRateEur, 69);

const setRateRsd = createEvent<number>();

const $rateRsd = restore<number>(setRateRsd, 117);

const setPriceRsd = createEvent<number>();

const $priceRsd = restore(setPriceRsd, 117);

const $priceInEur = combine($priceRsd, $rateRsd, (price, rate) =>
  (price / rate).toFixed(2)
);

const $priceInRub = combine($priceInEur, $rateEur, (price, rate) =>
  (price * rate).toFixed(2)
);

export {
  $rateEur,
  $rateRsd,
  $priceRsd,
  $priceInEur,
  $priceInRub,
  setRateEur,
  setRateRsd,
  setPriceRsd
};
