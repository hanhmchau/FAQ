import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { markdown } from 'services'

import Card from 'react-toolbox/lib/card/Card'
import CardText from 'react-toolbox/lib/card/CardText'
import CardTitle from 'react-toolbox/lib/card/CardTitle'

class NodeCard extends Component {
  render () {
    const node = this.props.node

    return (
      <Card className="NodeCard" {...this.props}>
        <Link
          to={`/q/${node.id}`}
          style={{ color: 'initial', textDecoration: 'none' }}
        >
          <CardTitle
            avatar={node.question.user.picture}
            title={markdown.title(node.question.title)}
            style={{ backgroundColor: '#f0f0f0' }}
          />
        </Link>
        <CardText>{node.answer && markdown.html(node.answer.content)}</CardText>
      </Card>
    )
  }
}

NodeCard.propTypes = {
  node: PropTypes.object.isRequired
}

export default NodeCard