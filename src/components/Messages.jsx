import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      Plays: {messages.length}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
