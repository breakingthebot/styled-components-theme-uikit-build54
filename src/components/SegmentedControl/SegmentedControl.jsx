// src/components/SegmentedControl/SegmentedControl.jsx
// Theme-able Segmented Control Switcher Component built with Styled Components.
// Created: 2026-07-31

import React from 'react';
import styled, { css } from 'styled-components';

const ControlContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  user-select: none;
`;

const getOptionPadding = ({ size = 'md' }) => {
  switch (size) {
    case 'sm':
      return '4px 10px';
    case 'lg':
      return '10px 20px';
    case 'md':
    default:
      return '7px 14px';
  }
};

const getOptionFontSize = ({ size = 'md' }) => {
  switch (size) {
    case 'sm':
      return '0.75rem';
    case 'lg':
      return '0.95rem';
    case 'md':
    default:
      return '0.85rem';
  }
};

const OptionButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: ${getOptionPadding};
  font-size: ${getOptionFontSize};
  font-family: inherit;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.textPrimary : theme.colors.textSecondary};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.surface : 'transparent'};
  border: 1px solid
    ${({ isSelected, theme }) => (isSelected ? theme.colors.border : 'transparent')};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: ${({ isSelected, theme }) => (isSelected ? theme.shadows.sm : 'none')};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const SegmentedControl = ({
  options = [],
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  className,
}) => {
  return (
    <ControlContainer fullWidth={fullWidth} className={className} role="tablist">
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <OptionButton
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            size={size}
            isSelected={isSelected}
            disabled={option.disabled}
            onClick={() => !option.disabled && onChange && onChange(option.value)}
          >
            {option.icon && <span>{option.icon}</span>}
            <span>{option.label}</span>
          </OptionButton>
        );
      })}
    </ControlContainer>
  );
};
