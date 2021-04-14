import React from "react";
import { shallow } from "enzyme";
import {LatestNews} from "../Components/LatestNews";

describe("LatestNewsComponent", () => {
  // Tests will go here using `it/test` blocks

  describe('function', () => {
    const wrapper = shallow(<LatestNews />);

    test('render without error', () => {
        expect(wrapper.exists()).toBe(true);
    });
    test('Reset button', () => {
        wrapper.find('button').simulate('click')
    });
    test('Select Tag', () => {
        expect(wrapper.find('select')).toBeDefined();
    });


})
});