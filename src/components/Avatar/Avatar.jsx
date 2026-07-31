// src/components/Avatar/Avatar.jsx
// Theme-able Avatar & Avatar Group Component built with Styled Components.
// Created: 2026-07-30

import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const getAvatarSize = ({ size = 'md' }) => {
  switch (size) {
    case 'xs':
      return '24px';
    case 'sm':
      return '32px';
    case 'lg':
      return '48px';
    case 'xl':
      return '64px';
    case 'md':
    default:
      return '40px';
  }
};

const getFontSize = ({ size = 'md' }) => {
  switch (size) {
    case 'xs':
      return '0.65rem';
    case 'sm':
      return '0.75rem';
    case 'lg':
      return '1rem';
    case 'xl':
      return '1.25rem';
    case 'md':
    default:
      return '0.875rem';
  }
};

const Container = styled.div`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
`;

const AvatarCircle = styled.div`
  width: ${getAvatarSize};
  height: ${getAvatarSize};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${getFontSize};
  overflow: hidden;
  user-select: none;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const getStatusColor = ({ status, theme }) => {
  switch (status) {
    case 'online':
      return theme.colors.success;
    case 'busy':
      return theme.colors.danger;
    case 'away':
      return theme.colors.warning;
    case 'offline':
    default:
      return theme.colors.textMuted;
  }
};

const StatusDot = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${getStatusColor};
  border: 2px solid ${({ theme }) => theme.colors.surface};
`;

const StackContainer = styled.div`
  display: inline-flex;
  align-items: center;

  & > ${Container} {
    margin-left: -12px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const OverflowBadge = styled(AvatarCircle)`
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-color: ${({ theme }) => theme.colors.surface};
  margin-left: -12px;
`;

export const Avatar = ({ src, name, size = 'md', status, className }) => {
  const [imgError, setImgError] = useState(false);

  const getInitials = (str) => {
    if (!str) return '?';
    const parts = str.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return str.slice(0, 2).toUpperCase();
  };

  return (
    <Container className={className}>
      <AvatarCircle size={size}>
        {src && !imgError ? (
          <Image src={src} alt={name || 'Avatar'} onError={() => setImgError(true)} />
        ) : (
          getInitials(name)
        )}
      </AvatarCircle>
      {status && <StatusDot status={status} />}
    </Container>
  );
};

export const AvatarGroup = ({ children, max = 4, size = 'md' }) => {
  const childArray = React.Children.toArray(children);
  const visibleAvatars = childArray.slice(0, max);
  const overflowCount = childArray.length - max;

  return (
    <StackContainer>
      {visibleAvatars.map((child, idx) =>
        React.cloneElement(child, { key: idx, size })
      )}
      {overflowCount > 0 && (
        <OverflowBadge size={size}>+{overflowCount}</OverflowBadge>
      )}
    </StackContainer>
  );
};
