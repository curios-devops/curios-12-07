import React from 'react';
import { useAuthForm } from './hooks/useAuthForm';
import FormInput from './components/FormInput';
import type { AuthFormProps } from './types/auth';
import { supabase } from '../../lib/supabase';

export default function AuthForm({ mode }: AuthFormProps) {
  const { formData, errors, validateForm, handleChange } = useAuthForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (mode === 'signup') {
          const { error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
          });
          if (error) throw error;
        } else {
          const { error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          });
          if (error) throw error;
        }
      } catch (error) {
        console.error('Authentication error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        error={errors.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        label="Password"
        value={formData.password}
        error={errors.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />

      <button
        type="submit"
        className="w-full bg-[#007BFF] text-white p-3 rounded-lg hover:bg-[#0056b3] transition-colors"
      >
        {mode === 'signin' ? 'Sign In' : 'Create Account'}
      </button>
    </form>
  );
}