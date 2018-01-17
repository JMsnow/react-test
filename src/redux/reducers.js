import * as actionTypes from './action-types'

const initState = {
	role: 'initRole'
}

const reducer = (state = initState, action) => {
	const _state = state

	switch (action.type) {
	case actionTypes.UPDATE_ROLE: {
		_state.role = action.payload
		return { ...state }
	}
	default:
		return state
	}
}

export default reducer
