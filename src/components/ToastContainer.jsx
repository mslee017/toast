import React from 'react';

import { ToastContext } from './ToastProvider';
import Toast from './Toast';

function ToastContainer() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className="toast-container">
      {toasts.map(toast => (
        <li key={toast.id}>
          <Toast variant={toast.variant} id={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastContainer;
