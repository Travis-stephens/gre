import React from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '../../redux/actions'

const PaginationComponent = (props: any) => {

    const getPage = (pageNum: number) => {
        props.dispatch(fetchRepos(props.query, pageNum))

    }

    if (props.totalPages === 0) {
        return null
    }

    const firstPage = props.pageNum > 2 && (
        <>
            <li>
                <div className="pagination-link" onClick={() => getPage(1)}>1</div>
            </li>
            <li>
                <span className="pagination-ellipsis">&hellip;</span>
            </li>
        </>
    )

    const lastPageNum = props.totalPages < 100 ? props.totalPages : 100
    const lastPage = props.pageNum < 99 && (
        <>
            <li>
                <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
                <div className="pagination-link" onClick={() => getPage(lastPageNum)}>{lastPageNum}</div>
            </li>
        </>
    )
    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                {firstPage}
                {props.pageNum > 1 &&
                    <li>
                        <div className="pagination-link" onClick={() => getPage(props.pageNum - 1)}>{props.pageNum - 1}</div>
                    </li>
                }
                <li>
                    <div className="pagination-link is-current">{props.pageNum}</div>
                </li>
                <li>
                    <div className="pagination-link" onClick={() => getPage(props.pageNum + 1)}>{props.pageNum + 1}</div>
                </li>

                {lastPage}
            </ul>
        </nav>
    )
}


function mapStateToProps(state: any) {
    return {
        ...state
    }
}

export const Pagination = connect(mapStateToProps)(PaginationComponent)

