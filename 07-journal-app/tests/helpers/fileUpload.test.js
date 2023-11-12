import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'react-pipe--journal',
    api_key: '284654247829453',
    api_secret: 'WUGJ3FmbKjQ3KN2nigfKlV8nCGo',
    secure: true
})

describe('Pruebas en fileUpload', () => { 

    // test('Debe de subir el archivo correctamente a cloudinary', async() => { 

    //     const imgUrl = 'https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400';
    //     const resp = await fetch( imgUrl );
    //     const bloby = await resp.blob();
    //     const file = new File([bloby], 'fotico.jpg')

    //     const url = await fileUpload( file );
    //     expect( typeof url ).toBe('string');

    //     // console.log(url);
    //     const segments = url.split('/');
    //     const imageId = segments[ segments.length - 1 ].replace('.jpg', '');
    //     await cloudinary.api.delete_resources([ imageId ]);


    // });

    test('Debe de retornar null', async() => { 

        const file = new File([], 'fotico.jpg')

        const url = await fileUpload( file );
        expect( url ).toBe( null );

    });

});