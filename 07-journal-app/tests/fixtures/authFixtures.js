export const initialState= {
    status:'checking', // checking  authenticated no-authenticated 
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authenticatedState= {
    status:'authenticated', // checking  authenticated no-authenticated 
    uid: '123abc',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
}

export const notAuthenticatedState= {
    status:'no-authenticated', // checking  authenticated no-authenticated 
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: 'qweasdzxc',
    email: 'demo@google.com',
    displayName: 'Demo user',
    photoURL: 'https://foto.jpg'
}