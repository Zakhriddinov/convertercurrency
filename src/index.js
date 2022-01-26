import ReactDom from 'react-dom'
import React from 'react'
import { Root } from './component/root'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
ReactDom.render(
   <Provider store={store}>
      <Root />
   </Provider>,
   document.getElementById('root')
)

