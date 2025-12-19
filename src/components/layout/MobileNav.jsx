import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Menu, User } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function MobileNav() {
  const iconMap = {
    Home: Home,
    ShoppingBag: ShoppingBag,
    Menu: Menu,
    User: User
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-safe">
      <div className="flex justify-around items-center h-16">
        {siteConfig.navigation.mobileBottom.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full gap-1 ${isActive ? 'text-primary' : 'text-gray-500'}`}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="text-[10px] font-bold uppercase tracking-wide">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
