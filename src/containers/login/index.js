import React from 'react'
import min from '@/assets/images/min.svg'
import style from './style.scss'
import request from '@/utils/request'

class Login extends React.Component {
    componentWillMount() {
        console.log(request.getHost())
    }

    render() {
        return (
            <div className={style.red}>
                <img src={min} />
                登录模块
                <p className='blue'>登录模块</p>
                <p className='orange'>登录模块</p>
            </div>
        )
    }
}

export default Login