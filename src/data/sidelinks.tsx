import {
  IconBuildingStore,
  IconKey,
  IconLayoutDashboard,
  IconSettings,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Subscriptions',
    label: '',
    href: '/app/subscriptions',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Store',
    label: '',
    href: '/app/store',
    icon: <IconBuildingStore size={18} />,
  },
  {
    title: 'Channel',
    label: '',
    href: '/app/channel',
    icon: <IconKey size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/app/settings',
    icon: <IconSettings size={18} />,
  },
]
