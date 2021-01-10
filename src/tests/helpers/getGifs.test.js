import { getGifs } from '../../helpers/getGifs';

describe('Tests with getGifs Fecth', () => {

    test('Should have 10 elements.', async() => {
        const gifs = await getGifs('One pounch');

        expect( gifs.length ).toBe( 10 ); 
    });

    test('Should have 10 elements.', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 ); 
    });
    
});