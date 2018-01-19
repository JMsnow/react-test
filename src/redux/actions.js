import * as actionTypes from './action-types'

export const updateRole = data => ({
	type: actionTypes.UPDATE_ROLE,
	role: data
})

export const updateName = data => ({
	type: actionTypes.UPDATE_NAME,
	name: data
})
