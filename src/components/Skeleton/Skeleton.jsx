// src/components/Skeleton/Skeleton.jsx
// Theme-able Skeleton Loader Component built with Styled Components.
// Created: 2026-07-30

import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const getSkeletonVariant = ({ variant = 'text', theme, width, height }) => {
  switch (variant) {
    case 'circular':
      return css`
        width: ${width ? (typeof width === 'number' ? `${width}px` : width) : '40px'};
        height: ${height ? (typeof height === 'number' ? `${height}px` : height) : '40px'};
        border-radius: 50%;
      `;
    case 'rectangular':
      return css`
        width: ${width ? (typeof width === 'number' ? `${width}px` : width) : '100%'};
        height: ${height ? (typeof height === 'number' ? `${height}px` : height) : '120px'};
        border-radius: ${theme.radii.md};
      `;
    case 'text':
    default:
      return css`
        width: ${width ? (typeof width === 'number' ? `${width}px` : width) : '100%'};
        height: ${height ? (typeof height === 'number' ? `${height}px` : height) : '14px'};
        border-radius: ${theme.radii.sm};
      `;
  }
};

const SkeletonElement = styled.div`
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, #1e293b 25%, #334155 37%, #1e293b 63%)'
      : 'linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 37%, #e2e8f0 63%)'};
  background-size: 400% 100%;
  animation: ${shimmer} 1.4s ease infinite;

  ${getSkeletonVariant}
`;

const SkeletonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Skeleton = ({ variant = 'text', width, height, count = 1 }) => {
  if (count > 1 && variant === 'text') {
    return (
      <SkeletonGroup>
        {Array.from({ length: count }).map((_, idx) => (
          <SkeletonElement
            key={idx}
            variant="text"
            width={idx === count - 1 ? '70%' : width}
            height={height}
          />
        ))}
      </SkeletonGroup>
    );
  }

  return <SkeletonElement variant={variant} width={width} height={height} />;
};
