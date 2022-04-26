import type { VFC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './router/RootRouter';
import './App.css';

const App: VFC = () => {
    return (
        <BrowserRouter>
            <RootRouter />
        </BrowserRouter>
    );
};

export default App;
