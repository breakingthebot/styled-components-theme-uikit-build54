// src/styles/theme.js
// Styled Components Design System & Light/Dark Theme Tokens.
// Created: 2026-07-30

export const lightTheme = {
  mode: 'light',
  colors: {
    bg: '#f8fafc',
    surface: '#ffffff',
    surfaceElevated: '#f1f5f9',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    border: '#e2e8f0',
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    primaryLight: 'rgba(99, 102, 241, 0.12)',
    success: '#10b981',
    successLight: 'rgba(16, 185, 129, 0.12)',
    warning: '#f59e0b',
    warningLight: 'rgba(245, 158, 11, 0.12)',
    danger: '#ef4444',
    dangerLight: 'rgba(239, 68, 68, 0.12)',
    info: '#06b6d4',
    infoLight: 'rgba(6, 182, 212, 0.12)',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.05)',
    md: '0 4px 12px rgba(0,0,0,0.08)',
    lg: '0 12px 24px -4px rgba(0,0,0,0.12)',
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    full: '9999px',
  },
  fonts: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'Fira Code', monospace",
  },
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    bg: '#090d16',
    surface: '#0f172a',
    surfaceElevated: '#1e293b',
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    border: '#334155',
    primary: '#818cf8',
    primaryHover: '#6366f1',
    primaryLight: 'rgba(129, 140, 248, 0.18)',
    success: '#34d399',
    successLight: 'rgba(52, 211, 153, 0.18)',
    warning: '#fbbf24',
    warningLight: 'rgba(251, 191, 36, 0.18)',
    danger: '#f87171',
    dangerLight: 'rgba(248, 113, 113, 0.18)',
    info: '#22d3ee',
    infoLight: 'rgba(34, 211, 238, 0.18)',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.4)',
    md: '0 4px 12px rgba(0,0,0,0.5)',
    lg: '0 16px 32px -6px rgba(0,0,0,0.7)',
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    full: '9999px',
  },
  fonts: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'Fira Code', monospace",
  },
};
