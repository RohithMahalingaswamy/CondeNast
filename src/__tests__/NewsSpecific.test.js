import React from "react";
import { shallow } from "enzyme";
import NewsSpecific from "../Components/NewsSpecific"

describe("NewsSpecific component", () => {
  describe('function', () => {
    const wrapper = shallow(<NewsSpecific />);

    test('render without error', () => {
        expect(wrapper.exists()).toBe(true);
    });
    
    });
   
});