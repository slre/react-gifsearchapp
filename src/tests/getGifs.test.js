import { getGifs } from "../helpers/getGifs";




describe('Testing GetGifs', () => {
    test('should retreive 10 items', async() => {
        const gifs = await getGifs( 'Naruto' );
        expect( gifs.length ).toBe( 10 );  
    });

})