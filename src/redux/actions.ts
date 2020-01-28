import { FETCH_REPOS } from './actionTypes'

export const fetchRepos = (query: string) => ({
    type: FETCH_REPOS,
    payload: {
        query
    }
})