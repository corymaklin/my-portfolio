import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myExample =  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "lorem ipsum dolor sit amet",
    'image': {
        'desc': "example screenshot of a project involving code",
        'src': "images/example1.png",
        'comment': ""
    }
};

describe("ExampleWorkModal component", () => {
    let component = shallow(<ExampleWorkModal example={ myExample }/>);

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });
});