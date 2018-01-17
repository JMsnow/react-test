import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'
import '@/global'

import '@/css/app.scss'

import Index from '@/containers/index'
import reducers from '@/redux/reducers'

const store = createStore(reducers)

ReactDom.render(
	<Provider store={store}><Index /></Provider>,
	document.getElementById('root')
)
