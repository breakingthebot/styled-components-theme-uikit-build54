// src/components/Badge/Badge.jsx
// Theme-able Badge Pill Component built with Styled Components.
// Created: 2026-07-30

import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
`;

const getBadgeVariant = ({ variant = 'info', theme }) => {
  switch (variant) {
    case 'success':
      return css`
        background-color: ${theme.colors.successLight};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
      `;
    case 'warning':
      return css`
        background-color: ${theme.colors.warningLight};
        color: ${theme.colors.warning};
        border: 1px solid ${theme.colors.warning};
      `;
    case 'danger':
    case 'error':
      return css`
        background-color: ${theme.colors.dangerLight};
        color: ${theme.colors.danger};
        border: 1px solid ${theme.colors.danger};
      `;
    case 'neutral':
      return css`
        background-color: ${theme.colors.surfaceElevated};
        color: ${theme.colors.textSecondary};
        border: 1px solid ${theme.colors.border};
      `;
    case 'info':
    default:
      return css`
        background-color: ${theme.colors.infoLight};
        color: ${theme.colors.info};
        border: 1px solid ${theme.colors.info};
      `;
  }
};

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
  ${({ isPulse }) =>
    isPulse &&
    css`
      animation: ${pulse} 1.5s ease-in-out infinite;
    `}
`;

const BadgeContainer = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;

  ${getBadgeVariant}
`;

export const Badge = ({ children, variant, hasDot, isPulse, ...props }) => {
  return (
    <BadgeContainer variant={variant} {...props}>
      {hasDot && <Dot isPulse={isPulse} />}
      {children}
    </BadgeContainer>
  );
};
