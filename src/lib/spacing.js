// Standardized spacing system for consistent gaps across the app
export const spacing = {
  // Section spacing (between major sections)
  section: {
    sm: 'py-12',      // 48px (3rem)
    md: 'py-16',      // 64px (4rem) 
    lg: 'py-20',      // 80px (5rem)
    xl: 'py-24',      // 96px (6rem)
  },
  
  // Container spacing (internal padding)
  container: {
    sm: 'px-4',       // 16px (1rem)
    md: 'px-6',       // 24px (1.5rem)
    lg: 'px-8',       // 32px (2rem)
  },
  
  // Element spacing (between elements)
  element: {
    xs: 'space-y-2',  // 8px (0.5rem)
    sm: 'space-y-4',  // 16px (1rem)
    md: 'space-y-6',  // 24px (1.5rem)
    lg: 'space-y-8',  // 32px (2rem)
    xl: 'space-y-12', // 48px (3rem)
  },
  
  // Grid gaps
  grid: {
    sm: 'gap-4',      // 16px (1rem)
    md: 'gap-6',      // 24px (1.5rem)
    lg: 'gap-8',      // 32px (2rem)
  },
  
  // Margin utilities
  margin: {
    xs: 'mb-2',       // 8px (0.5rem)
    sm: 'mb-4',       // 16px (1rem)
    md: 'mb-6',       // 24px (1.5rem)
    lg: 'mb-8',       // 32px (2rem)
    xl: 'mb-12',      // 48px (3rem)
  }
};

// Helper function to get consistent spacing classes
export const getSpacing = (type, size = 'md') => {
  return spacing[type]?.[size] || spacing.element.md;
};