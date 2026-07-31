// src/components/Alert/Alert.jsx
// Theme-able Alert Banner Component built with Styled Components.
// Created: 2026-07-31

import React from 'react';
import styled, { css } from 'styled-components';

const getAlertVariant = ({ variant = 'info', theme }) => {
  switch (variant) {
    case 'success':
      return css`
        background-color: ${theme.colors.successLight};
        border-left: 4px solid ${theme.colors.success};
        color: ${theme.colors.textPrimary};
      `;
    case 'warning':
      return css`
        background-color: ${theme.colors.warningLight};
        border-left: 4px solid ${theme.colors.warning};
        color: ${theme.colors.textPrimary};
      `;
    case 'danger':
      return css`
        background-color: ${theme.colors.dangerLight};
        border-left: 4px solid ${theme.colors.danger};
        color: ${theme.colors.textPrimary};
      `;
    case 'info':
    default:
      return css`
        background-color: ${theme.colors.infoLight};
        border-left: 4px solid ${theme.colors.info};
        color: ${theme.colors.textPrimary};
      `;
  }
};

const AlertContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 18px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.875rem;
  line-height: 1.5;

  ${getAlertVariant}
`;

const ContentGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const IconWrapper = styled.span`
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 1px;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  color: inherit;
`;

const Message = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.1rem;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const getDefaultIcon = (variant) => {
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

export const Alert = ({
  variant = 'info',
  title,
  children,
  onClose,
  icon,
  className,
}) => {
  const displayIcon = icon || getDefaultIcon(variant);

  return (
    <AlertContainer variant={variant} className={className} role="alert">
      <ContentGroup>
        <IconWrapper>{displayIcon}</IconWrapper>
        <TextGroup>
          {title && <Title>{title}</Title>}
          {children && <Message>{children}</Message>}
        </TextGroup>
      </ContentGroup>

      {onClose && (
        <CloseButton onClick={onClose} aria-label="Dismiss alert">
          ✕
        </CloseButton>
      )}
    </AlertContainer>
  );
};
