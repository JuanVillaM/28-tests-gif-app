import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Tests in <GifGridItem />', () => {

    const title = 'title';
    const url = 'https://url';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('Should show the component correctly.', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should have the <p> with the title.', () => {
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );
    });
    
    test('Image should have src and alt.', () => {
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('Should have the class animate__fadeIn.', () => {
        const div = wrapper.find('div');
        const className = div.props('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );
    })
    
});
