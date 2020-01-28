import { Dispatch } from "redux"

export const REQUEST_REPOS: string = "REQUEST_REPOS"
export const RECEIVE_REPOS: string = "RECEIVE_REPOS"

export const requestRepos = (query: string) => ({
    type: REQUEST_REPOS,
    query
})

export const receiveRepos = (repos: any) => ({
    type: RECEIVE_REPOS,
    repos: repos
})

export const API_URL = "https://api.github.com";

export function fetchRepos(query: string) {
    return function (dispatch: Dispatch) {
        dispatch(requestRepos(query))

        return fetch(`${API_URL}/search/repositories?q=${query}`).then(
            response => response.json(),
            error => console.log('Error: ', error)
        ).then(json => dispatch(receiveRepos(json)))
    }
}
