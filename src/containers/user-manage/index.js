import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		role: state.role
	}
}

class UserManage extends React.Component {
	render() {
		return (
			<div>
				用户管理模块{this.props.role}
			</div>
		)
	}
}

const wrapUserManage = connect(mapStateToProps)(UserManage)

export default wrapUserManage
