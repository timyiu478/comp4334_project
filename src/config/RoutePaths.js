import DebugPage from 'components/DebugPage';

const LoginPath = '/login';

const DashboardPaths = {
    userList: {
        path: '/dashboard/account/user-list',
        name: 'User List',
        component: DebugPage,
    },
};

const DashboardDetailPaths = {
    userListDetail: {
        path: '/dashboard/account/user-list/detail/:id',
        name: 'User Information',
        component: DebugPage,
    },
};

export default {
    LoginPath,
    DashboardPaths,
    DashboardDetailPaths,
};
