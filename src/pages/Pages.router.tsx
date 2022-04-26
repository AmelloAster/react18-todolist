import { type RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';
import PagesFC from './Pages';

const PageA = loadable(() => import(/* webpackChunkName: "pageA" */ './page-a/PageA'));
const PageB = loadable(() => import(/* webpackChunkName: "pageB" */ './page-b/PageB'));

export const pagesRoutes: RouteObject[] = [
    {
        path: 'pages',
        element: <PagesFC />,
        children: [
            {
                path: 'a',
                element: <PageA />,
            },
            {
                path: 'b',
                element: <PageB />,
            },
        ],
    },
];
