import React from 'react'
import ReactDom from 'react-dom'
import '@/global'

import './css/app.scss'

import Index from '../src/containers/index'

ReactDom.render(<Index />, document.getElementById('root'))
