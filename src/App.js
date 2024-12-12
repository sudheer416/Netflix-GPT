import React from 'react'
import {Provider} from "react-redux"
import Body from './component/Body'
import "./App.css"
import appStore from './utils/appStore'

const App = () => {
  return (
    <Provider store={appStore} >
    <div className='bg-opacity-4'>
    <Body/>
    </div>
    </Provider>
  )
}


export default App