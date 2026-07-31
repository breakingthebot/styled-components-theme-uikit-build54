// src/components/Progress/Progress.jsx
// Theme-able Progress Bar Component built with Styled Components.
// Created: 2026-07-30

import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const shine = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const ValueLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const getTrackSize = ({ size = 'md' }) => {
  switch (size) {
    case 'sm':
      return '6px';
    case 'lg':
      return '14px';
    case 'md':
    default:
      return '10px';
  }
};

const Track = styled.div`
  width: 100%;
  height: ${getTrackSize};
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
`;

const getFillVariant = ({ variant = 'brand', theme }) => {
  switch (variant) {
    case 'gradient':
      return css`
        background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.info});
      `;
    case 'success':
      return css`
        background-color: ${theme.colors.success};
      `;
    case 'warning':
      return css`
        background-color: ${theme.colors.warning};
      `;
    case 'danger':
      return css`
        background-color: ${theme.colors.danger};
      `;
    case 'brand':
    default:
      return css`
        background-color: ${theme.colors.primary};
      `;
  }
};

const Fill = styled.div`
  height: 100%;
  width: ${({ value }) => Math.min(Math.max(0, value), 100)}%;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${getFillVariant}

  ${({ animated }) =>
    animated &&
    css`
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 200px 100%;
      animation: ${shine} 1.8s infinite;
    `}
`;

export const Progress = ({
  value = 0,
  label,
  showValue = true,
  variant = 'brand',
  size = 'md',
  animated = false,
}) => {
  return (
    <Container>
      {(label || showValue) && (
        <LabelRow>
          {label && <span>{label}</span>}
          {showValue && <ValueLabel>{Math.round(value)}%</ValueLabel>}
        </LabelRow>
      )}
      <Track size={size}>
        <Fill value={value} variant={variant} animated={animated} />
      </Track>
    </Container>
  );
};
