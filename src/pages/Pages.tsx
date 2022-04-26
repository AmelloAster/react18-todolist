import { type VFC } from 'react';
import { Outlet } from 'react-router-dom';

const PagesFC: VFC = () => {
    return <Outlet />;
};

export default PagesFC;
