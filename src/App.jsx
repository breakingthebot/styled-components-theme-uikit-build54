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
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const clusterOptions = [
    { value: 'us-east-1', label: 'US East (N. Virginia)', icon: '🇺🇸' },
    { value: 'eu-west-1', label: 'EU West (Ireland)', icon: '🇪🇺' },
    { value: 'ap-southeast-1', label: 'Asia Pacific (Singapore)', icon: '🇸🇬' },
    { value: 'sa-east-1', label: 'South America (São Paulo)', icon: '🇧🇷', disabled: true },
  ];

  const faqItems = [
    {
      title: 'How do Styled Components inject themes at runtime?',
      icon: '🎨',
      content: 'Styled Components provides a <ThemeProvider> wrapper that injects active theme tokens into styled element interpolation functions via props (e.g. ${({ theme }) => theme.colors.primary}).',
    },
    {
      title: 'Is CSS-in-JS zero-runtime compatible with Next.js App Router?',
      icon: '⚡',
      content: 'Styled Components 6+ supports SSR registry streaming for Next.js App Router, extracting CSS rules server-side before flushing HTML to the browser client.',
    },
  ];

  const demoTabs = [
    {
      id: 'tab1',
      label: 'System Metrics',
      icon: '📊',
      badge: <Badge variant="success" hasDot>99.99%</Badge>,
      content: (
        <p>Global CDN edge clusters operating at nominal latency across 14 edge locations.</p>
      ),
    },
    {
      id: 'tab2',
      label: 'OAuth 2.0 Credentials',
      icon: '🔐',
      badge: <Badge variant="info">3 Keys</Badge>,
      content: (
        <p>Active secret API keys and OAuth 2.0 bearer access scopes for dev environment.</p>
      ),
    },
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
              <Badge variant="success">v1.8.0 Release</Badge>
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

        {/* SECTION 2: DROPDOWN SELECT MENU (NEW v1.8.0) */}
        <Section>
          <SectionHeader>
            <SectionTitle>2. Styled Dropdown Select Menu (`Select.jsx`)</SectionTitle>
            <Badge variant="info" hasDot isPulse>NEW v1.8.0</Badge>
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

            <Card>
              <Card.Header title="Form Control Group" subtitle="Combined input &amp; region dropdown" />
              <Card.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <Input
                    label="Endpoint Hostname"
                    addon="https://"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Select
                    label="Active Replica"
                    options={clusterOptions}
                    value={selectedCluster}
                    onChange={setSelectedCluster}
                  />
                </div>
              </Card.Body>
            </Card>
          </Grid>
        </Section>

        {/* SECTION 3: ACCORDION FAQ */}
        <Section>
          <SectionHeader>
            <SectionTitle>3. Styled Accordion FAQ Component (`Accordion.jsx`)</SectionTitle>
            <Badge variant="neutral">Disclosure Panels</Badge>
          </SectionHeader>

          <Accordion items={faqItems} />
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

        {/* SECTION 5: CHECKBOX & TOGGLE CONTROLS */}
        <Section>
          <SectionHeader>
            <SectionTitle>5. Styled Checkbox &amp; Toggle Switch (`Checkbox.jsx`, `Toggle.jsx`)</SectionTitle>
            <Badge variant="neutral">Form Controls</Badge>
          </SectionHeader>

          <Grid>
            <Card>
              <Card.Header title="Styled Checkbox Group" subtitle="Custom checkmarks with active theme fills" />
              <Card.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <Checkbox
                    label="Enable Real-Time Cluster Auto-Scaling"
                    checked={check1}
                    onChange={setCheck1}
                  />
                  <Checkbox
                    label="Stream Security Audit Telemetry to Vault"
                    checked={check2}
                    onChange={setCheck2}
                  />
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header title="Styled Toggle Switches" subtitle="Sliding track switches with label descriptions" />
              <Card.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <Toggle
                    label="Automated CDN Edge Caching"
                    description="Cache static assets across 14 edge locations"
                    checked={toggle1}
                    onChange={setToggle1}
                  />
                </div>
              </Card.Body>
            </Card>
          </Grid>
        </Section>

        {/* SECTION 6: MODAL DIALOG SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>6. Styled Modal Overlay Component (`Modal.jsx`)</SectionTitle>
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
