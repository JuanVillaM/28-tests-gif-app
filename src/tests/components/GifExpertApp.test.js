import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../../GifExpertApp';

describe('Tests in <GifExpertApp />', () => {

    test('Should show himself correctly.', () => {
        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('Should show a list of gifs categories.', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );
    });

});
