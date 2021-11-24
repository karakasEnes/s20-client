import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <div>
      <button className='ui primary button'>Delete</button>
      <button className='ui button'>Cancel</button>
    </div>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title='Delete Stream'
        content='Are you sure you want to remove this Stream!?'
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
