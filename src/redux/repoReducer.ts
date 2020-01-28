import { REQUEST_REPOS, RECEIVE_REPOS } from './actions'

export interface IRepoState {
    repos: any[]
    isFetching: boolean
}

interface IAction {
    type: string
    [key: string]: any
}

const initialState: IRepoState = {
    repos: [],
    isFetching: false
}

export const repoReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case REQUEST_REPOS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_REPOS:
            return {
                repos: action.repos,
                isFetching: false
            }

        default:
            return state
    }
}
