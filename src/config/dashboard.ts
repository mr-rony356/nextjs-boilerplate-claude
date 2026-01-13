import { DashboardConfig } from '@/types';
import { LayoutDashboard, Settings, User } from 'lucide-react';

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Profile',
      href: '/dashboard/profile',
      icon: User,
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: Settings,
    },
  ],
};
