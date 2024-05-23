import './css/styles.css';

import ToastProvider from './components/ToastProvider';
import ToastPlayground from './components/ToastPlayground';

export default function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
    </ToastProvider>
  );
}
