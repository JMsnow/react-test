import React from 'react'
import min from '@/assets/images/min.svg'
import './style.scss'
import request from '@/utils/request'

class Login extends React.Component {
    componentWillMount() {
        console.log(request.getHost())
        debug.log(4545)
    }

    render() {
        return (
            <div className='red'>
                <img src={min} />
                登录模块
            </div>
        )
    }
}

export default Login