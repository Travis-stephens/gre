import { Dispatch } from "redux"
export const REQUEST_REPOS: string = "REQUEST_REPOS"
export const RECEIVE_REPOS: string = "RECEIVE_REPOS"

export const requestRepos = (query: string, pageNum: number) => ({
    type: REQUEST_REPOS,
    query,
    pageNum
})

export const receiveRepos = (repos: any, timeTaken: number, pageNum: number) => ({
    type: RECEIVE_REPOS,
    repos,
    timeTaken,
    pageNum
})

export const API_URL = "https://api.github.com";

export const fetchRepos = (query: string, pageNum: number) => {
    return (dispatch: Dispatch) => {
        dispatch(requestRepos(query, pageNum))

        const startTime = window.performance.now()


        return fetch(`${API_URL}/search/repositories?q=${query}&per_page=10&page=${pageNum}`)
            .then(
                response => response.json(),
                error => console.log('Error: ', error))

            .then(json => {
                const endTime = window.performance.now()
                const timeTaken = endTime - startTime
                window.scrollTo(0, 0)
                dispatch(receiveRepos(json, timeTaken, pageNum))
            })
    }
}
