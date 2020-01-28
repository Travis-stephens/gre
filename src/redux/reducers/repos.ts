import { FETCH_REPOS } from '../actionTypes'
import { API_URL } from '../../services/github-api'

const initialState = {
    repos: []
}

interface IAction {
    type: string
    payload: {
        [key: string]: any
    }
}

export default async function (state = initialState, action: IAction) {
    console.log(state, action)
    switch (action.type) {
        case FETCH_REPOS: {
            const { query } = action.payload
            await fetch(`${API_URL}/search/repositories?q=${query}`).then((response) => {
                return response.json()
            }).then((repos) => {
                console.log(repos)
                return repos
            })
        }
    }
}