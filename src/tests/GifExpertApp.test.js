import React from "react";
import GifExpertApp from "../GifExpertApp";
import { shallow } from 'enzyme';
import  '@testing-library/jest-dom';


describe('Testing <GifExpertApp />', () => {  


    const wrapper = shallow(<GifExpertApp />);

    test('Testing snapshot, must be renderize correctly', () => {  
        expect( wrapper ).toMatchSnapshot();
    });
    
});

