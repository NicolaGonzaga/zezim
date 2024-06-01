import { describe, it, expect, screen } from "vitest";
import Home from "../../src/components/page/home/Home";

describe("Home", () => {
  it("should render correctly", () => {
    expect(<Home />);
  });
});
