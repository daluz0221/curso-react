import { loginWithEmailAndPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
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

    test('startLoginWithEmailAndPassword debe de llamar checkingCredential y login - Exito', async () => { 

        const loginData = {ok: true, ...demoUser};
        const formData = {email:demoUser.email, password: '123456d'};

        await loginWithEmailAndPassword.mockResolvedValue( loginData );

        
        //thunk
        await startLoginWithEmailAndPassword(formData)(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) )

    });

    // test('startLoginWithEmailAndPassword debe de llamar checkingCredential y logout - Error', async() => { 

        
    //     const loginData = {ok: false, errorMessage: 'Un error en login normal'};
    //     const formData = {email:demoUser.email, password: '123456d'};
    //     await loginWithEmailAndPassword.mockResolvedValue( loginData );

    //     //thunk
    //     await startLoginWithEmailAndPassword(formData)(dispatch);

    //     expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
    //     expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) )

    // });

    test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async() => { 

        await startLogout()(dispatch)

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );

    });


});