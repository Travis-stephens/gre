import React from 'react'
import { connect } from 'react-redux';
import { fetchRepos } from '../../redux/actions';

function RepoListComponent(repos: any) {
    console.log(repos)
    return (
        <div>
            {repos && repos.length
                ? repos.map((repo: any) => <div>{repo.toString()}</div>)
                : null
            }
        </div>
    )
}

const mapStateToProps = (state: any) => ({ repos: state })

export const RepoList = connect(mapStateToProps, { fetchRepos })(RepoListComponent)