import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '../../redux/actions'
import { IRepoState } from '../../redux/repoReducer'

interface IProps {
    dispatch: Function
}

const SearchBarComponent = (props: IProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        props.dispatch(fetchRepos(event.target.value))
    }


    return (
        <div>
            <div className="field">
                <div className="control">
                    <input className="input is-medium" type="text" placeholder="Search for repos" onChange={handleChange} />
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