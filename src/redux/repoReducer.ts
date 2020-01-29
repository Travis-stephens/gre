import { REQUEST_REPOS, RECEIVE_REPOS } from './actions'

export interface IRepoState {
    repos: any[]
    isFetching: boolean
    timeTaken: number
}

interface IAction {
    type: string
    [key: string]: any
}

const initialState: IRepoState = {
    repos: [],
    isFetching: false,
    timeTaken: 0
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
                timeTaken: action.timeTaken,
                isFetching: false
            }

        default:
            return state
    }
}
