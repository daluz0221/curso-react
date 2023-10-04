import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Memorize } from './05-memos/Memorize'
// import { MemorizeHook } from './06-useMemo/MemorizeHook'
// import { CallbackHook } from './06-useMemo/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { HooksApp } from './HooksApp.jsx'

// import './08-useReducer/intro-reducer';

import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
