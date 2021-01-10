import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Test in the hook useFetchGifs', () => {

    test('Should return the initial State.', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );    
    });

    test('Should return an images array and the loanding on false.', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );    
    });
    
});
