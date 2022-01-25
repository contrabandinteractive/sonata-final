import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

export default function Form({ onSubmit, currentUser }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <div className="hiddenArea">
        <p>Sign the guest book, { currentUser.accountId }!</p>
        <p className="highlight">
          <label htmlFor="message">Message:</label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            defaultValue={"Player started by " + currentUser.accountId}
          />
        </p>
        </div>
        <p><label>Current Artist: Black Heart Saints</label></p>
        <p>
          <label htmlFor="donation">Contribution to Artist:</label>
          <input
            autoComplete="off"
            defaultValue={'0.005'}
            id="donation"
            max={Big(currentUser.balance).div(10 ** 24)}
            min="0.001"
            step="0.001"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        <button type="submit" id="submitBtn" className="hiddenArea">
          Sign
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
