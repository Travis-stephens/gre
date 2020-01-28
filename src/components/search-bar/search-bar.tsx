import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '../../redux/actions'

interface IProps {
    fetchRepos: Function
}

const SearchBarComponent = (props: IProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        props.fetchRepos(event.target.value)
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

export const SearchBar = connect(null, { fetchRepos })(SearchBarComponent)