import React, { useState } from 'react';
import { Home, Globe2, Library, LogIn, ChevronLeft, ChevronRight, Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SignInModal from './auth/SignInModal';
import SignUpModal from './auth/SignUpModal';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <aside 
        className={`fixed left-0 top-0 h-screen bg-[#111111] border-r border-gray-800 flex flex-col transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-56'
        }`}
      >
        <div className="flex flex-col h-full p-3">
          <button
            onClick={toggleSidebar}
            className="absolute -right-3 top-16 bg-[#111111] border border-gray-800 rounded-full p-1.5 hover:bg-[#222222] transition-colors z-20"
          >
            {isCollapsed ? (
              <ChevronRight size={16} className="text-[#007BFF]" />
            ) : (
              <ChevronLeft size={16} className="text-[#007BFF]" />
            )}
          </button>

          <nav className="flex flex-col gap-2 mt-6">
            <div className={`flex items-center gap-3 mb-8 ${isCollapsed ? 'justify-center' : ''}`}>
              <Brain className="h-7 w-7 text-[#007BFF]" />
              {!isCollapsed && <span className="text-white text-xl font-bold tracking-tight">Snap</span>}
            </div>
            
            <Link 
              to="/"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                isHome 
                  ? 'text-[#007BFF] bg-[#1a1a1a]' 
                  : 'text-gray-300 hover:text-[#007BFF] hover:bg-[#222222]'
              }`}
            >
              <Home size={20} />
              {!isCollapsed && <span className="text-[15px] font-medium">Home</span>}
            </Link>

            <Link 
              to="#" 
              className="flex items-center gap-3 text-gray-300 hover:text-[#007BFF] p-3 rounded-lg hover:bg-[#222222] transition-colors"
            >
              <Globe2 size={20} />
              {!isCollapsed && <span className="text-[15px] font-medium">Discover</span>}
            </Link>

            <Link 
              to="#" 
              className="flex items-center gap-3 text-gray-300 hover:text-[#007BFF] p-3 rounded-lg hover:bg-[#222222] transition-colors"
            >
              <Library size={20} />
              {!isCollapsed && <span className="text-[15px] font-medium">Library</span>}
            </Link>
          </nav>

          <div className={`mt-auto flex flex-col gap-3 ${isCollapsed ? 'items-center' : ''}`}>
            {!isCollapsed && (
              <button 
                onClick={() => setShowSignUp(true)}
                className="flex items-center justify-center gap-2 bg-[#007BFF] text-white p-3 rounded-lg hover:bg-[#0056b3] transition-colors"
              >
                <span className="text-[15px] font-medium">Sign Up</span>
              </button>
            )}
            <button 
              onClick={() => setShowSignIn(true)}
              className={`flex items-center justify-center gap-3 text-gray-300 hover:text-[#007BFF] p-3 rounded-lg hover:bg-[#222222] transition-colors ${
                isCollapsed ? 'w-14 h-14' : 'w-full'
              }`}
            >
              <LogIn size={20} />
              {!isCollapsed && <span className="text-[15px] font-medium">Sign in</span>}
            </button>
          </div>
        </div>
      </aside>

      <SignInModal isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
      <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
    </>
  );
}