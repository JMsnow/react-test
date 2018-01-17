import React from 'react'
import min from '@/assets/images/min.svg'
import { connect } from 'react-redux'
import style from './style.scss'

class Login extends React.Component {
	componentWillMount() {
		$http.post('/login')
			.then(res => debug.log(res))
			.catch(() => debug.log('error'))
	}

	changeRole = () => {
		this.props.dispatch({ type: 'UPDATE_ROLE', payload: 'JMkkk' })
	}

	render() {
		return (
			<div className={style.red}>
				<img src={min} alt='' />
                登录模块
				<p className='blue'>登录模块</p>
				<p className='orange'>登录模块</p>
				<dialog open>555</dialog>
				<button onClick={this.changeRole}>改变角色</button>
				<p>角色：{this.props.role}</p>
			</div>
		)
	}
}

const wrapLogin = connect()(Login)

export default wrapLogin
