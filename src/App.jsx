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
  const [inputValue, setInputValue] = useState('acme-corp-prod');
  const [selectedCluster, setSelectedCluster] = useState('us-east-1');
  const [progressVal, setProgressVal] = useState(72);
  const [showAlert, setShowAlert] = useState(true);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const clusterOptions = [
    { value: 'us-east-1', label: 'US East (N. Virginia)', icon: '🇺🇸' },
    { value: 'eu-west-1', label: 'EU West (Ireland)', icon: '🇪🇺' },
    { value: 'ap-southeast-1', label: 'Asia Pacific (Singapore)', icon: '🇸🇬' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        {/* HEADER */}
        <Header>
          <HeaderTop>
            <BadgeStrip>
              <Badge variant="info" hasDot isPulse>CSS-in-JS Architecture</Badge>
              <Badge variant="success">v1.9.0 Release</Badge>
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
            <Tooltip content="Primary CTA button with linear brand fill" position="top">
              <Button variant="primary">Primary CTA</Button>
            </Tooltip>

            <Tooltip content="Secondary surface button with subtle border" position="top">
              <Button variant="secondary">Secondary Button</Button>
            </Tooltip>

            <Tooltip content="⚠️ Irreversible dangerous action trigger" position="top">
              <Button variant="danger">Danger Action</Button>
            </Tooltip>

            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="primary" isLoading>Loading State</Button>
          </Row>
        </Section>

        {/* SECTION 2: ALERT CALLOUT BANNERS (NEW v1.9.0) */}
        <Section>
          <SectionHeader>
            <SectionTitle>2. Styled Alert Callout Banner (`Alert.jsx`)</SectionTitle>
            <Badge variant="info" hasDot isPulse>NEW v1.9.0</Badge>
          </SectionHeader>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {showAlert && (
              <Alert
                variant="info"
                title="System Maintenance Window Scheduled"
                onClose={() => setShowAlert(false)}
              >
                Automated database index re-indexing scheduled for Saturday 02:00 UTC. Zero downtime expected.
              </Alert>
            )}

            <Alert variant="success" title="Cluster Deployment Complete">
              Region <strong>us-east-1</strong> updated to v1.9.0 release with 100% health check pass rate.
            </Alert>

            <Alert variant="warning" title="Memory Load Warning">
              RAM utilization reached 84% on worker node ip-10-0-4-12. Auto-scaling trigger armed.
            </Alert>

            <Alert variant="danger" title="TLS Certificate Expiration">
              SSL certificate for <code>*.acme.internal</code> expires in 48 hours. Please renew in Vault.
            </Alert>
          </div>
        </Section>

        {/* SECTION 3: DROPDOWN SELECT MENU */}
        <Section>
          <SectionHeader>
            <SectionTitle>3. Styled Dropdown Select Menu (`Select.jsx`)</SectionTitle>
            <Badge variant="neutral">Form Controls</Badge>
          </SectionHeader>

          <Grid>
            <Card>
              <Card.Header title="Cluster Region Selector" subtitle="Custom select dropdown with flag icons &amp; checkmarks" />
              <Card.Body>
                <Select
                  label="Target Primary Cluster"
                  options={clusterOptions}
                  value={selectedCluster}
                  onChange={setSelectedCluster}
                  placeholder="Choose deployment region"
                />
              </Card.Body>
            </Card>
          </Grid>
        </Section>

        {/* SECTION 4: TOOLTIP HOVER POPUP */}
        <Section>
          <SectionHeader>
            <SectionTitle>4. Styled Tooltip Hover Popup (`Tooltip.jsx`)</SectionTitle>
            <Badge variant="neutral">Overlay System</Badge>
          </SectionHeader>

          <Row>
            <Tooltip content="Top positioned directional tooltip" position="top">
              <Button variant="outline">Hover Top</Button>
            </Tooltip>

            <Tooltip content="Bottom positioned directional tooltip" position="bottom">
              <Button variant="outline">Hover Bottom</Button>
            </Tooltip>
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
