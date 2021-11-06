import React from 'react';
import './themes/styles.global.scss';
import AppRouter from 'containers/AppRouter';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppRouter />
            </PersistGate>
        </Provider>
    );
}

export default App;
