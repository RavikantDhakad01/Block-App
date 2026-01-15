import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>

    </StrictMode>


);
