import { REQUEST_REPOS, RECEIVE_REPOS } from './actions'

export interface IRepoState {
    query: string
    repos: any[]
    isFetching: boolean
    timeTaken: number
    pageNum: number
    totalPages: number
}

interface IAction {
    type: string
    [key: string]: any
}

const initialState: IRepoState = {
    query: "",
    repos: [],
    isFetching: false,
    timeTaken: 0,
    pageNum: 0,
    totalPages: 0
}

export const repoReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case REQUEST_REPOS:
            return {
                ...state,
                isFetching: true,
                query: action.query
            }
        case RECEIVE_REPOS:
            return {
                ...state,
                repos: action.repos,
                timeTaken: action.timeTaken,
                isFetching: false,
                pageNum: Math.floor(action.pageNum),
                totalPages: Math.floor(action.repos.total_count / 10)
            }

        default:
            return state
    }
}
