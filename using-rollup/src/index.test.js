import React from "react";
import { render } from "@testing-library/react";

import Hello from "./index";

describe("Hello Component", () => {
  test("renders the hello component", () => {
    render(<Hello />);
  });
});
