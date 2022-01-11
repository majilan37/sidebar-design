import { ChevronDownIcon, ChevronUpIcon, HomeIcon, MailIcon, UsersIcon } from '@heroicons/react/solid'
import { CashIcon, ChartBarIcon, ShoppingBagIcon, SupportIcon, UserGroupIcon } from '@heroicons/react/outline'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <HomeIcon className='h-7' />,
        iconClosed: <ChevronDownIcon className='h-5 text-gray-200' />,
        iconOpened: <ChevronUpIcon className='h-5 text-gray-200' />,
        subNav:[
            {
                title: 'Users',
                path: '/overview/users',
                icon: <UsersIcon className='h-5 text-gray-200' />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <CashIcon className='h-5 text-gray-200' />,
            },
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <MailIcon className='h-7' />,
        iconClosed: <ChevronDownIcon className='h-5 text-gray-200' />,
        iconOpened: <ChevronUpIcon className='h-5 text-gray-200' />,
        subNav:[
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <UsersIcon className='h-5 text-gray-200' />,
            },
            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <CashIcon className='h-5 text-gray-200' />,
            },
            {
                title: 'Reports3',
                path: '/reports/reports3',
                icon: <CashIcon className='h-5 text-gray-200' />,
            },
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <ShoppingBagIcon className='h-7' />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <UserGroupIcon className='h-7' />
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <ChartBarIcon className='h-7' />
    },
    {
        title: 'Support',
        path: '/support',
        icon: <SupportIcon className='h-7' />
    },
]