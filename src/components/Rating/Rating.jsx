// src/components/Rating/Rating.jsx
// Theme-able Rating Star Input Component built with Styled Components.
// Created: 2026-07-31

import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  user-select: none;
`;

const Label = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const StarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const getStarSize = ({ size = 'md' }) => {
  switch (size) {
    case 'sm':
      return '1.1rem';
    case 'lg':
      return '1.8rem';
    case 'md':
    default:
      return '1.4rem';
  }
};

const StarButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  font-size: ${getStarSize};
  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'pointer')};
  color: ${({ isFilled, theme }) =>
    isFilled ? theme.colors.warning : theme.colors.textMuted};
  transition: transform 0.15s ease, color 0.15s ease;

  ${({ readOnly }) =>
    !readOnly &&
    css`
      &:hover {
        transform: scale(1.2);
      }
    `}
`;

const ValueLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 8px;
`;

export const Rating = ({
  value = 0,
  max = 5,
  onChange,
  readOnly = false,
  size = 'md',
  label,
  showValue = true,
  className,
}) => {
  const [hoverValue, setHoverValue] = useState(0);

  const displayValue = hoverValue > 0 ? hoverValue : value;

  return (
    <Container className={className}>
      {label && <Label>{label}</Label>}

      <StarRow onMouseLeave={() => !readOnly && setHoverValue(0)}>
        {Array.from({ length: max }, (_, idx) => {
          const starNumber = idx + 1;
          const isFilled = starNumber <= displayValue;

          return (
            <StarButton
              key={starNumber}
              type="button"
              size={size}
              isFilled={isFilled}
              readOnly={readOnly}
              onMouseEnter={() => !readOnly && setHoverValue(starNumber)}
              onClick={() => !readOnly && onChange && onChange(starNumber)}
              aria-label={`Rate ${starNumber} out of ${max} stars`}
            >
              ★
            </StarButton>
          );
        })}

        {showValue && <ValueLabel>{displayValue} / {max}</ValueLabel>}
      </StarRow>
    </Container>
  );
};
