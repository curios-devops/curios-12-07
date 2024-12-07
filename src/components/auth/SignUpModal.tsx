import React from 'react';
import { X } from 'lucide-react';
import AuthForm from './AuthForm';
import GoogleButton from './components/GoogleButton';
import Divider from './components/Divider';
import type { AuthModalProps } from './types/auth';
import { supabase } from '../../lib/supabase';

export default function SignUpModal({ isOpen, onClose }: AuthModalProps) {
  if (!isOpen) return null;

  const handleGoogleSignUp = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing up with Google:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-white mb-6">Create Account</h2>

        <div className="space-y-4">
          <GoogleButton onClick={handleGoogleSignUp} />
          <Divider text="Or sign up with email" />
          <AuthForm mode="signup" />
        </div>
      </div>
    </div>
  );
}