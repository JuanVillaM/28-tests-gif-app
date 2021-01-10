import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests in <GifGrid />', () => {
    const category = 'One Punch';

    test('Should match with the existing Snapshot.', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should items when the images are loaded with useFetchGifs.', () => {

        const gifs = [{
            id: '123',
            url: 'https://anything.com',
            title: 'Anything'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
});