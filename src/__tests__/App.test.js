import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";

describe("App Component", () => {
  // Tests will go here using `it/test` blocks

  describe('function', () => {
    const wrapper = shallow(<App />);

    test('render without error', () => {
        expect(wrapper.exists()).toBe(true);
    });
   
})
});