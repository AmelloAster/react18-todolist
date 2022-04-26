import { type RouteObject, Navigate } from 'react-router-dom';

import { pagesRoutes } from '@src/pages/Pages.router';
export const rootRoutes: RouteObject[] = [
    ...pagesRoutes,
    {
        path: '',
        element: <Navigate to="/pages/a" />,
    },
];
