import React from "react";
import { shallow, mount } from "enzyme";
import NewsSpecific from "../Components/NewsSpecific"

describe("NewsSpecific component", () => {
  // Tests will go here using `it` blocks

  describe('function', () => {
    const wrapper = shallow(<NewsSpecific />);

    test('render without error', () => {
        expect(wrapper.exists()).toBe(true);
    });
    

    });
   

});