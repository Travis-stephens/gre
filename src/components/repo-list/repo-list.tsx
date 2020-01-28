import React from 'react'
import { connect } from 'react-redux';
import { fetchRepos } from '../../redux/actions';

function RepoListComponent(props: any) {
    console.log(props)
    const { isFetching, repos } = props.data
    return (
        <div>
            {isFetching && <progress className="progress is-small" max="100">20%</progress>}

            <ul>
                {repos.items && repos.items.length
                    ? repos.items.map((item: any) => <li>{item.name}</li>)
                    : null
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state: any) => ({ data: state })

export const RepoList = connect(mapStateToProps, { fetchRepos })(RepoListComponent)