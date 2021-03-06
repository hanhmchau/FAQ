import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { formatHistoryAction, nodeUrl } from 'helpers'

import { Loading } from 'components'
import Card, { CardText } from 'components/Card'
import { DefaultPagination } from 'components/Pagination'

import './Logs.css'

const Logs = ({
  logs,
  loading,
  pagesCount,
  pageCurrent,
  onPageSelected,
  meta
}) => {
  const shouldShowLoading =
    loading && (meta ? meta.pageCurrent !== pageCurrent : true)

  return (
    <Card>
      <CardText className="logs">
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Logs</h1>
        {shouldShowLoading && <Loading />}
        {!shouldShowLoading &&
          logs.map(h => {
            const action = formatHistoryAction(h, { relative: false })

            return (
              <div className="action" key={h.id}>
                <div className="left">
                  <div style={{ padding: '0.5rem' }}>
                    <i className="material-icons">{action.icon}</i>
                  </div>
                  <div style={{ marginLeft: '0.5rem' }}>
                    You {action.sentence}.
                  </div>
                </div>
                <div className="right">
                  <i style={{ marginLeft: 'auto' }}>{action.date}</i>
                  <Link to={nodeUrl(h.node)}>
                    <i
                      className="material-icons"
                      style={{ marginLeft: '10px' }}
                    >
                      arrow_forward
                    </i>
                  </Link>
                </div>
              </div>
            )
          })}
        <DefaultPagination
          nbPages={pagesCount}
          current={pageCurrent}
          onPageSelected={onPageSelected}
        />
      </CardText>
    </Card>
  )
}

Logs.propTypes = {
  logs: PropTypes.array,
  loading: PropTypes.bool,
  pagesCount: PropTypes.number,
  pageCurrent: PropTypes.number,
  onPageSelected: PropTypes.func,
  meta: PropTypes.object
}

export default Logs
