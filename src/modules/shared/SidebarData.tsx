import { Info, Group, PersonAdd } from '@material-ui/icons';

export const SidebarData = [
    {
        title: 'Todos',
        path: '/',
        icon: <Group />,
    },
    {
        title: 'Nuevo',
        path: '/new',
        icon: <PersonAdd />,
    },
    {
        title: 'About',
        path: '/about',
        icon: <Info />,
    }
]