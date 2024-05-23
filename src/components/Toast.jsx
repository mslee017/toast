import React from 'react';

import { ToastContext } from './ToastProvider';

const ICONS_BY_VARIANT = {
  info: 'ℹ️',
  warning: '⚠️',
  success: '✅',
  error: '❌',
};

function Toast({ id, variant, children }) {
  const { dismissToast } = React.useContext(ToastContext);

  const icons = ICONS_BY_VARIANT[variant];

  const handleDeleteToast = id => {
    dismissToast(id);
  };

  return (
    <div className={`toast toast-${variant}`}>
      <div className="icon-container">{icons}</div>
      <p className="toast-message">{children}</p>
      <button
        className="toast-close-button"
        onClick={() => handleDeleteToast(id)}
      >
        &times;
      </button>
    </div>
  );
}

export default Toast;
