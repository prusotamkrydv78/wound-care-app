export const theme = {
  colors: {
    primary: {
      50: '#EFF6FF',   // Light medical blue
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',  // Medical blue - primary brand
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
    },
    healing: {         // Secondary palette for wound care
      50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981',  // Healing green
      600: '#059669',
    },
    urgent: {          // For urgent/emergency sections
      50: '#FEF2F2',
      100: '#FEE2E2',
      500: '#EF4444',
      600: '#DC2626',
    },
    neutral: {         // Clean, medical whites and grays
      50: '#F8FAFC',   // Background white
      100: '#F1F5F9',  // Card background
      200: '#E2E8F0',  // Borders
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
    },
    department: {      // Department-specific colors
      cardiology: '#EF4444',     // Red
      neurology: '#8B5CF6',      // Purple
      pediatrics: '#F59E0B',     // Warm yellow
      orthopedics: '#10B981',    // Green
      dentistry: '#3B82F6',      // Blue
    },
    status: {          // Status indicators
      success: '#059669',
      warning: '#F59E0B',
      error: '#DC2626',
      info: '#3B82F6',
    }
  },
  fonts: {
    sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
    display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'], // For headers
  },
  spacing: {
    container: '2rem',
    header: '4rem',
    section: '2.5rem',
    card: '1.25rem',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    card: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
    elevated: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
  },
  radius: {
    sm: '0.375rem',
    DEFAULT: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },
  medical: {
    card: {
      padding: '1.25rem',
      radius: '1rem',
      shadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
    },
    stats: {
      height: '8rem',
      radius: '1rem',
    },
    navigation: {
      height: '4rem',
    }
  }
}
