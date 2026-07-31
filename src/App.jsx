// src/App.jsx
// Main Interactive Playground for Build 54: Theme-able UI Kit with Styled Components.
// Created: 2026-07-30

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Badge } from './components/Badge/Badge';
import { Switch } from './components/Switch/Switch';
import { Input } from './components/Input/Input';
import { Modal } from './components/Modal/Modal';
import { Tabs } from './components/Tabs/Tabs';
import { Progress } from './components/Progress/Progress';
import { Skeleton } from './components/Skeleton/Skeleton';
import { Avatar, AvatarGroup } from './components/Avatar/Avatar';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Toggle } from './components/Toggle/Toggle';
import { Tooltip } from './components/Tooltip/Tooltip';
import { Accordion } from './components/Accordion/Accordion';
import { Select } from './components/Select/Select';
import { Alert } from './components/Alert/Alert';
import { Slider } from './components/Slider/Slider';
import { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
import { Drawer } from './components/Drawer/Drawer';
import { Table } from './components/Table/Table';
import { SegmentedControl } from './components/SegmentedControl/SegmentedControl';
import { Popover } from './components/Popover/Popover';
import { Toast } from './components/Toast/Toast';

const AppContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

const BadgeStrip = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 720px;
  line-height: 1.6;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
`;

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [inputValue, setInputValue] = useState('acme-corp-prod');
  const [toasts, setToasts] = useState([
    { id: 1, title: 'Cluster Deployment Succeeded', message: 'Region us-east-1 deployed with 100% health.', variant: 'success' },
  ]);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const addToast = (variant, title, message) => {
    const newToast = { id: Date.now(), title, message, variant };
    setToasts((prev) => [...prev, newToast]);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        {/* TOAST STREAMER FIXED OVERLAY */}
        <Toast toasts={toasts} onDismiss={dismissToast} position="topRight" />

        {/* HEADER */}
        <Header>
          <HeaderTop>
            <BadgeStrip>
              <Badge variant="info" hasDot isPulse>CSS-in-JS Architecture</Badge>
              <Badge variant="success">v2.6.0 Release</Badge>
              <Badge variant="neutral">Styled Components</Badge>
            </BadgeStrip>

            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              label={isDarkMode ? 'Dark Theme Active' : 'Light Theme Active'}
            />
          </HeaderTop>

          <Title>Styled Components UI Kit</Title>
          <Subtitle>
            A production-grade, theme-able React UI library built with <strong>styled-components (CSS-in-JS)</strong>. Real-time Light/Dark theme switching, dynamic prop-based styling, and 100% scoped style encapsulation.
          </Subtitle>
        </Header>

        {/* SECTION 1: BUTTON SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>1. Styled Button Component (`Button.jsx`)</SectionTitle>
            <Badge variant="neutral">Dynamic Variants &amp; Sizes</Badge>
          </SectionHeader>

          <Row>
            <Button variant="primary">Primary CTA</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Action</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </Row>
        </Section>

        {/* SECTION 2: TOAST NOTIFICATION STREAMER (NEW v2.6.0) */}
        <Section>
          <SectionHeader>
            <SectionTitle>2. Styled Toast Notification Streamer (`Toast.jsx`)</SectionTitle>
            <Badge variant="info" hasDot isPulse>NEW v2.6.0</Badge>
          </SectionHeader>

          <Row>
            <Button
              variant="primary"
              onClick={() => addToast('success', 'Backup Succeeded', 'Database snapshot created in 1.2s.')}
            >
              ✅ Trigger Success Toast
            </Button>

            <Button
              variant="secondary"
              onClick={() => addToast('info', 'System Notice', 'New SDK release v3.4.0 is available.')}
            >
              ℹ️ Trigger Info Toast
            </Button>

            <Button
              variant="outline"
              onClick={() => addToast('warning', 'High Memory Threshold', 'Worker node Memory usage crossed 88%.')}
            >
              ⚠️ Trigger Warning Toast
            </Button>

            <Button
              variant="danger"
              onClick={() => addToast('danger', 'Critical Outage Alert', 'Connection lost to cluster sa-east-1.')}
            >
              🚨 Trigger Danger Toast
            </Button>
          </Row>
        </Section>

        {/* SECTION 3: POPOVER FLOATING PANEL */}
        <Section>
          <SectionHeader>
            <SectionTitle>3. Styled Popover Floating Panel (`Popover.jsx`)</SectionTitle>
            <Badge variant="neutral">Overlay System</Badge>
          </SectionHeader>

          <Row>
            <Popover
              title="🔐 Secret API Key Vault"
              position="bottomLeft"
              trigger={<Button variant="outline">Popover Bottom Left</Button>}
            >
              <p style={{ marginBottom: '12px' }}>
                Bearer tokens are encrypted with AES-256-GCM.
              </p>
              <Button size="sm" variant="primary">Rotate Secret Key</Button>
            </Popover>
          </Row>
        </Section>

        {/* SECTION 4: DRAWER PANEL */}
        <Section>
          <SectionHeader>
            <SectionTitle>4. Styled Slide-Over Drawer Panel (`Drawer.jsx`)</SectionTitle>
            <Badge variant="neutral">Overlay System</Badge>
          </SectionHeader>

          <Row>
            <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>
              📂 Open Cluster Configuration Drawer
            </Button>
          </Row>
        </Section>

        {/* SECTION 5: MODAL DIALOG SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>5. Styled Modal Overlay Component (`Modal.jsx`)</SectionTitle>
            <Badge variant="neutral">Overlay System</Badge>
          </SectionHeader>

          <Row>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              🪟 Open Accessible Modal Dialog
            </Button>
          </Row>
        </Section>
      </AppContainer>

      {/* DEMO SLIDE-OVER DRAWER */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="⚙️ Cluster Configuration Drawer"
        position="right"
        size="md"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsDrawerOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsDrawerOpen(false)}>Apply Configuration</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Alert variant="info" title="Active Environment">
            Modifying settings for primary region <strong>us-east-1</strong>.
          </Alert>

          <Input
            label="Cluster Domain Endpoint"
            addon="https://"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </Drawer>

      {/* DEMO MODAL DIALOG */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="🪟 Styled Components Modal Demo"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm Action
            </Button>
          </>
        }
      >
        <p>
          This theme-aware modal dialog is built with <strong>styled-components</strong>. It features backdrop blur overlays, scale-up entrance keyframe animations, and keyboard <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>ESC</kbd> dismissal.
        </p>
      </Modal>
    </ThemeProvider>
  );
}
