// src/components/Button/Button.jsx
// Theme-able Button Component built with Styled Components.
// Created: 2026-07-30

import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: ${spin} 0.6s linear infinite;
`;

const getVariantStyles = ({ variant = 'primary', theme }) => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: ${theme.colors.surfaceElevated};
        color: ${theme.colors.textPrimary};
        border: 1px solid ${theme.colors.border};
        &:hover:not(:disabled) {
          background-color: ${theme.colors.border};
        }
      `;
    case 'danger':
      return css`
        background-color: ${theme.colors.danger};
        color: #ffffff;
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          filter: brightness(0.9);
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primaryLight};
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${theme.colors.textSecondary};
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background-color: ${theme.colors.surfaceElevated};
          color: ${theme.colors.textPrimary};
        }
      `;
    case 'primary':
    default:
      return css`
        background-color: ${theme.colors.primary};
        color: #ffffff;
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primaryHover};
        }
      `;
  }
};

const getSizeStyles = ({ size = 'md' }) => {
  switch (size) {
    case 'sm':
      return css`
        padding: 6px 12px;
        font-size: 0.75rem;
      `;
    case 'lg':
      return css`
        padding: 12px 24px;
        font-size: 1rem;
      `;
    case 'md':
    default:
      return css`
        padding: 9px 18px;
        font-size: 0.875rem;
      `;
  }
};

const StyledButtonElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${getVariantStyles}
  ${getSizeStyles}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = ({ children, isLoading, disabled, ...props }) => {
  return (
    <StyledButtonElement disabled={disabled || isLoading} {...props}>
      {isLoading && <Spinner />}
      {children}
    </StyledButtonElement>
  );
};
