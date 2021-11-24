import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import history from '../../history';
import Modal from '../Modal';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className='ui primary button'>Delete</button>
        <button className='ui button'>Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title='Delete Stream'
          content='Are you sure you want to remove this Stream!?'
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream })(StreamDelete);
