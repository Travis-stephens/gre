import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '../../redux/actions'
import { IRepoState } from '../../redux/repoReducer'
import debounce from 'lodash.debounce'

interface IProps {
    dispatch: Function
}

const SearchBarComponent = (props: IProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const query = event.target.value
        if (!query.trim().length) {
            return
        }

        executeQuery(query, 1)
    }

    const executeQuery = debounce((query, pageNum) => {
        props.dispatch(fetchRepos(query, pageNum))
    }, 400)


    return (
        <div className="search-bar">
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input is-medium" type="text" placeholder="Search for repos" onChange={handleChange} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: IRepoState) {
    const { repos, isFetching } = state
    return {
        repos,
        isFetching
    }
}

export const SearchBar = connect(mapStateToProps)(SearchBarComponent)