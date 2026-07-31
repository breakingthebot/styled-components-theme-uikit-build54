// src/components/Slider/Slider.jsx
// Theme-able Slider Range Control Component built with Styled Components.
// Created: 2026-07-31

import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const ValueBadge = styled.span`
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 700;
`;

const RangeInput = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: ${({ theme }) => theme.radii.full};
  outline: none;
  background: ${({ percent, theme }) =>
    `linear-gradient(to right, ${theme.colors.primary} ${percent}%, ${theme.colors.surfaceElevated} ${percent}%)`};
  cursor: pointer;
  transition: background 0.15s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.15);
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const Slider = ({
  value = 50,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true,
  disabled = false,
  unit = '',
  className,
}) => {
  const percent = Math.min(
    Math.max(0, ((value - min) / (max - min)) * 100),
    100
  );

  return (
    <Container className={className}>
      {(label || showValue) && (
        <LabelRow>
          {label && <span>{label}</span>}
          {showValue && (
            <ValueBadge>
              {value}
              {unit}
            </ValueBadge>
          )}
        </LabelRow>
      )}

      <RangeInput
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        percent={percent}
        onChange={(e) => !disabled && onChange && onChange(Number(e.target.value))}
      />
    </Container>
  );
};
