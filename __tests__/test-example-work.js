import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myWork = [
    {
        'title': "Work Example",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Portfolio Boilerplate",
        'image': {
            'desc': "A Serverless Portfolio",
            'src': "images/example2.png",
            'comment': ""
        }
    }
];

describe("ExampleWork component", () => {
    let component = shallow(<ExampleWork work={myWork} />);
    it("Should be a 'span' element", () => {
        expect(component.type()).toEqual('span');
    });
});