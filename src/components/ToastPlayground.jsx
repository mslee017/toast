import React from 'react';

import { ToastContext } from './ToastProvider';
import ToastContainer from './ToastContainer';

const VARIANT_OPTIONS = ['info', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const handleCreateToast = event => {
    event.preventDefault();
    createToast(message, variant);
  };

  return (
    <div className="wrapper">
      <ToastContainer />

      <form className="controls" onSubmit={handleCreateToast}>
        <div className="row">
          <label
            className="label"
            htmlFor="message"
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className="input-wrapper">
            <textarea
              className="message-textarea"
              id="message"
              value={message}
              onChange={event => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="label">Variant</div>
          <div className="input-wrapper radio-wrapper">
            {VARIANT_OPTIONS.map(option => {
              const id = `variant-${option}`;

              return (
                <label key={id} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={event => {
                      setVariant(event.target.value);
                    }}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className="row">
          <div className="label" />
          <div className="radio-wrapper">
            <button type="submit" className="show-toast-button">
              Show Toast!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
