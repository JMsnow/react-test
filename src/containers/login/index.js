import React from 'react'
import min from '@/assets/images/min.svg'
import style from './style.scss'

class Login extends React.Component {
    componentWillMount() {
        $http.post('/login')
            .then(res => console.log(res) )
            .catch(() => console.log('error'))
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