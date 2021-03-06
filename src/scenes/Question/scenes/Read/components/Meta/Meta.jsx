import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

import Avatar from 'components/Avatar'

import './Meta.css'

const Meta = ({ node }) => (
  <div className="read-meta">
    <div className="asked">
      <Avatar
        image={node.question.user.picture}
        style={{ width: '30px', height: '30px', marginRight: '0.5rem' }}
      />
      <div>
        Asked by {node.question.user.name}
        <br />
        {format(node.question.createdAt, 'D MMM YYYY')}
      </div>
    </div>
    {node.answer && (
      <div className="answered">
        <div>
          Answered by {node.answer.user.name}
          <br />
          {format(node.answer.createdAt, 'D MMM YYYY')}
        </div>
        <Avatar
          image={node.answer.user.picture}
          style={{ width: '30px', height: '30px', marginLeft: '0.5rem' }}
        />
      </div>
    )}
  </div>
)

Meta.propTypes = {
  node: PropTypes.object.isRequired
}

export default Meta
