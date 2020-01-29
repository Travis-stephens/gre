import React from 'react'
import { connect } from 'react-redux';
import { fetchRepos } from '../../redux/actions';
import truncate from 'truncate'
import LazyLoad from 'react-lazyload';

const RepoListComponent = (props: any) => {
    const { isFetching, repos, timeTaken } = props.data

    const items = repos.items &&
        repos.items.map((item: any) =>
            (
                <article className="media" onClick={() => props.fnHandleClick(item.id)}>
                    <figure className="media-left">
                        <div className="image is-64x64">
                            <LazyLoad height={64}>
                                <img src={item.owner.avatar_url} />
                            </LazyLoad>
                        </div>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p className="has-text-grey-darker">
                                <strong>{item.full_name}</strong> <small>@johnsmith</small>
                                <br />
                                {truncate(item.description, 100)}
                            </p>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item" href={item.html_url} target="_blank">
                                    <span className="icon is-small"><i className="fas fa-code-branch"></i></span>
                                    <span className="icon-text">{item.forks_count}</span>
                                </a>
                                <a className="level-item" href={item.html_url} target="_blank">
                                    <span className="icon is-small"><i className="fas fa-star"></i> </span>
                                    <span className="icon-text">{item.stargazers_count}</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div className="media-right has-text-grey-darker is-size-7">
                        Last Updated: {new Date(item.updated_at).toLocaleDateString()}
                    </div>
                </article>
            ))
    return (
        <div>
            {isFetching && <progress className="progress is-medium is-secondary" max="100" />}

            {!isFetching && timeTaken > 0 && (
                <div className="query-info has-text-white has-text-right has-text-center-mobile">
                    {repos.total_count} results ({(timeTaken / 1000).toFixed(3)} seconds)
                </div>
            )}

            <div>
                {items}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({ data: state })

export const RepoList = connect(mapStateToProps, { fetchRepos })(RepoListComponent)