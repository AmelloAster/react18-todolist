import type { VFC } from 'react';
import { useRoutes } from 'react-router-dom';
import { rootRoutes } from './router.config';

const RootRouter: VFC = () => {
    return useRoutes(rootRoutes);
};

export default RootRouter;
