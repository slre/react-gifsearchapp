import React from 'react';
import { shallow } from 'enzyme';
import  '@testing-library/jest-dom'; 
import { GifGridItem } from '../components/GifGridItem';

describe('Show component correctly',()=> {
    const url = 'https://url.test';
    const title =  'title test';

    let wrapper = shallow(<GifGridItem title = {title} url = {url}  />);
    test('Snapshot',()=>{
        expect( wrapper ).toMatchSnapshot;
    });
    test('Must have paragraph with the title', () => {  
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

});