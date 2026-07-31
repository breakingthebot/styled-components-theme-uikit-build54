// src/components/Toast/Toast.jsx
// Theme-able Toast Notification Streamer Component built with Styled Components.
// Created: 2026-07-31

import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(100%); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-100%); }
  to { opacity: 1; transform: translateX(0); }
`;

const getContainerPosition = ({ position = 'topRight' }) => {
  switch (position) {
    case 'topLeft':
      return css`
        top: 24px;
        left: 24px;
      `;
    case 'bottomRight':
      return css`
        bottom: 24px;
        right: 24px;
      `;
    case 'bottomLeft':
      return css`
        bottom: 24px;
        left: 24px;
      `;
    case 'topRight':
    default:
      return css`
        top: 24px;
        right: 24px;
      `;
  }
};

const ToastContainer = styled.div`
  position: fixed;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 380px;
  width: calc(100% - 48px);
  pointer-events: none;

  ${getContainerPosition}
`;

const getVariantBorder = ({ variant = 'info', theme }) => {
  switch (variant) {
    case 'success':
      return theme.colors.success;
    case 'warning':
      return theme.colors.warning;
    case 'danger':
      return theme.colors.danger;
    case 'info':
    default:
      return theme.colors.info;
  }
};

const ToastCard = styled.div`
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 4px solid ${(props) => getVariantBorder(props)};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  backdrop-filter: blur(8px);
  animation: ${({ position }) =>
      position === 'topLeft' || position === 'bottomLeft' ? slideInLeft : slideInRight}
    0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

const IconSpan = styled.span`
  font-size: 1.1rem;
  line-height: 1;
`;

const ContentFlex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.h5`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const Message = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  line-height: 1.4;
`;

const DismissButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const getVariantIcon = (variant) => {
  switch (variant) {
    case 'success':
      return '✅';
    case 'warning':
      return '⚠️';
    case 'danger':
      return '🚨';
    case 'info':
    default:
      return 'ℹ️';
  }
};

export const Toast = ({
  toasts = [],
  onDismiss,
  position = 'topRight',
  className,
}) => {
  if (!toasts.length) return null;

  return (
    <ToastContainer position={position} className={className}>
      {toasts.map((t) => (
        <ToastCard key={t.id} variant={t.variant} position={position}>
          <IconSpan>{getVariantIcon(t.variant)}</IconSpan>
          <ContentFlex>
            {t.title && <Title>{t.title}</Title>}
            {t.message && <Message>{t.message}</Message>}
          </ContentFlex>
          {onDismiss && (
            <DismissButton onClick={() => onDismiss(t.id)}>✕</DismissButton>
          )}
        </ToastCard>
      ))}
    </ToastContainer>
  );
};
