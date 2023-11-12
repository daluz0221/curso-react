import { signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn } from "../../../src/store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");


describe('Pruebas en auth thunks', () => { 
    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de invocar elk checkingCredentials', async() => { 


        await checkingAuthentication()(dispatch)
        expect( dispatch ).toHaveBeenCalledWith({"payload": undefined, "type": "auth/checkingCredentials"})
    });

    test('startGoogleSignIn debe de llamar checkingCredential y login - Exito', async() => { 

        
        const loginData = {ok: true, ...demoUser};
        await signInWithGoogle.mockResolvedValue( loginData );

        //thunk
        await startGoogleSignIn()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) )

    });

    test('startGoogleSignIn debe de llamar checkingCredential y logout - Error', async() => { 

        
        const loginData = {ok: false, errorMessage: 'Un error en Google'};
        await signInWithGoogle.mockResolvedValue( loginData );

        //thunk
        await startGoogleSignIn()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) )

    });
});