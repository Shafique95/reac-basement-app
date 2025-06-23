// src/modules/auth/layouts/LoginLayout.tsx
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f2f5',
      padding: 20,
    }}>
      <div style={{
        width: 400,
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
