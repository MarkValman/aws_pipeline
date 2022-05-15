import { fireEvent, render } from "@testing-library/react";
import React from "react";

import Counter from "./Counter";

test("Counter component works properly", () => {
  const { getByTestId, getByText } = render(<Counter />);

  const counterValueEl = getByTestId("counter-value");
  const minusThreeButtonEl = getByText("-3", { selector: "button" });
  const minusTwoButtonEl = getByText("-2", { selector: "button" });
  const minusOneButtonEl = getByText("-1", { selector: "button" });
  const plusOneButtonEl = getByText("+1", { selector: "button" });
  const plusTwoButtonEl = getByText("+2", { selector: "button" });
  const plusThreeButtonEl = getByText("+3", { selector: "button" });

  expect(counterValueEl).toHaveTextContent("0");

  fireEvent.click(minusOneButtonEl);

  expect(counterValueEl).toHaveTextContent("-1");

  fireEvent.click(minusTwoButtonEl);

  expect(counterValueEl).toHaveTextContent("-3");

  fireEvent.click(plusOneButtonEl);

  expect(counterValueEl).toHaveTextContent("-2");

  fireEvent.click(plusTwoButtonEl);

  expect(counterValueEl).toHaveTextContent("0");

  fireEvent.click(plusOneButtonEl);

  expect(counterValueEl).toHaveTextContent("1");

  fireEvent.click(plusThreeButtonEl);

  expect(counterValueEl).toHaveTextContent("4");

  fireEvent.click(minusThreeButtonEl);

  expect(counterValueEl).toHaveTextContent("1");
});
