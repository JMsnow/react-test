import { combineReducers } from 'redux'
import * as actionTypes from './action-types'

const role = (state = '管理员', action) => {
	switch (action.type) {
	case actionTypes.UPDATE_ROLE:
		return action.role
	default:
		return state
	}
}

const name = (state = '无', action) => {
	switch (action.type) {
	case actionTypes.UPDATE_NAME:
		return action.name
	default:
		return state
	}
}

const appReducer = combineReducers({
	role,
	name
})

export default appReducer
