import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Tests in <addCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

    test('Should show himself correctly.', () => {
        expect( wrapper ).toMatchSnapshot();        
    });

    test('Should change the input.', () => {
        const input = wrapper.find('input');
        const value = 'Hello Juan';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    });
    
    test('Should not post the data onSubmit.', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Should call the setCategories and clean the input.', () => {
        const value = 'Hello Juan';

        wrapper.find('input').simulate('change', { target: { value } } );

        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();

        expect( wrapper.find('input').prop('value') ).toBe( '' );
    });
    
});