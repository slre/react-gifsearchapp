import React from 'react'
import GifGrid from "../components/GifGrid";
import { shallow } from 'enzyme';
import  '@testing-library/jest-dom'; 
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs');

describe('Testing <GifGrid />', () => {  
    const category = 'Animaniacs';
    const mockUseFetchGifs = useFetchGifs;
    
    test('Testing snapshot, must rende correclty', () => {
        // mockUseFetchGifs.mockImplementation( category => {
        //     return { data: [], loading: true }
        //   });
        //const wrapper =  shallow(<GifGrid category = { category }  />);
        //expect( wrapper ).toMatchSnapshot();
    });

    test('Should show items while imgs are loading by useFetchGifs hook', () => {
        
        
        //const wrapper =  shallow(<GifGrid category = { category }  />);
    });


});



