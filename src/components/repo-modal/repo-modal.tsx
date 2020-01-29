import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { IRepoState } from '../../redux/repoReducer'
import { API_URL } from '../../redux/actions'
import Markdown from 'markdown-to-jsx'

interface IProps {
    repoId: number
    fnCloseModal: Function
    repos: any
}

const RepoModalComponent = (props: IProps) => {
    const item = props.repos.items && props.repos.items.find((repo: any) => repo.id === props.repoId)

    const [readme, setReadme] = useState('')

    useEffect(() => {
        if (!item) {
            return
        }
        fetch(`${API_URL}/repos/${item.owner.login}/${item.name}/readme`).then(
            resp => resp.json(),
            error => console.error(error)
        ).then(json => {
            if (json.content) {
                setReadme(atob(json.content))
            }
        })
    })

    if (!item) {
        props.fnCloseModal()
        return null
    }

    return (
        <div className={`modal ${props.repoId > 0 && 'is-active'}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <article className="media">
                        <figure className="media-left">
                            <div className="image is-64x64">
                                <img src={item.owner.avatar_url} alt={item.owner.name} />
                            </div>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                                <h1 className="has-text-grey-darker">
                                    <strong>{item.full_name}</strong>
                                </h1>
                                <p className="has-text-grey-darker">
                                    {item.description}
                                </p>
                                <h3>Readme</h3>
                                <Markdown>{readme}</Markdown>
                            </div>
                            <nav className="level is-mobile">
                                <div className="level-left">
                                    <a className="level-item" href={item.html_url} target="_blank" rel="noopener noreferrer">
                                        <span className="icon is-small"><i className="fas fa-code-branch"></i></span>
                                        <span className="icon-text">{item.forks_count}</span>
                                    </a>
                                    <a className="level-item" href={item.html_url} target="_blank" rel="noopener noreferrer">
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
                    Repo ID: {props.repoId}
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => props.fnCloseModal()}></button>
        </div>
    )
}

function mapStateToProps(state: IRepoState) {
    const { repos } = state
    return {
        repos
    }
}

export const RepoModal = connect(mapStateToProps)(RepoModalComponent)