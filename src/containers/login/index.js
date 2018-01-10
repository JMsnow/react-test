import React from 'react'
import './style.scss'
import request from '@/utils/request'

class Login extends React.Component {
    componentWillMount() {
        console.log(request.getHost())
        debug.log(4545)
    }

    render() {
        return (
            <div className='red'>登录模块</div>
        )
    }
}

export default Login