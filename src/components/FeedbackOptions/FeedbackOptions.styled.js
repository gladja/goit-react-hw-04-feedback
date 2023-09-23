import { styled } from 'styled-components';

export const Wrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px'
});

export const Btn = styled('button')({
  textTransform: 'capitalize',

  appearance: 'none',
  backgroundColor: '#000000',
  border: '2px solid #1A1A1A',
  borderRadius: '15px',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: 'normal',
  margin: '0',
  minHeight: '60px',
  minWidth: '0',
  outline: 'none',
  padding: '16px 24px',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
  userSelect: 'none',
  touchAction: 'manipulation',
  willChange: 'transform',

  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
    transform: 'translateY(-2px)',
  },
});

