import React from 'react';
import { shallow } from 'enzyme';
import  '@testing-library/jest-dom'; 
import AddCategory from '../components/AddCategory';

describe('Testing AddCategory', () => {  

    const setCategories = jest.fn();
    //const wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    })

    test('Testing snapshot', () => {  
        expect( wrapper ).toMatchSnapshot();

    });
    test('Must change input text', () => {  
       const input = wrapper.find('input');
       input.simulate('change',{ target:{value:'animaniacs'} });
    });

    test('Shouldnt post data on submit', () => {  
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });
    test('Should invoke setCategories and cleanse input text', () => {
        //1.- Simulate onChange
        const input = wrapper.find('input');
        input.simulate('change',{ target:{value:'tiny toons'} });
        //2.- Simulate submit
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        //3.- simulate setCategories have been invoked at least once
        expect( setCategories ).toHaveBeenCalled();
        //4.- input element must be cleansed
        const inputText = wrapper.find( 'input' );
        expect( inputText.prop('value') ).toBe('');
    });
})


