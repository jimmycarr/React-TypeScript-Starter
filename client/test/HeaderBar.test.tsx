import * as React from "react";
import * as renderer from "react-test-renderer";
import HeaderBar from "../src/components/HeaderBar";

describe("The headerbar component", () => {
  it("Should match its previously written snapshot", () => {
    const tree = renderer.create(<HeaderBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
