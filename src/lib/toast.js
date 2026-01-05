import Swal from 'sweetalert2';

// Toast configuration with your app's theme
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
  customClass: {
    popup: 'colored-toast'
  }
});

// Success toast
export const showSuccess = (message) => {
  return Toast.fire({
    icon: 'success',
    title: message,
    background: '#10b981',
    color: '#ffffff'
  });
};

// Error toast
export const showError = (message) => {
  return Toast.fire({
    icon: 'error',
    title: message,
    background: '#ef4444',
    color: '#ffffff'
  });
};

// Warning toast
export const showWarning = (message) => {
  return Toast.fire({
    icon: 'warning',
    title: message,
    background: '#f59e0b',
    color: '#ffffff'
  });
};

// Info toast
export const showInfo = (message) => {
  return Toast.fire({
    icon: 'info',
    title: message,
    background: '#3b82f6',
    color: '#ffffff'
  });
};

// Loading toast
export const showLoading = (message = 'Loading...') => {
  return Swal.fire({
    title: message,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
};

// Close loading toast
export const closeLoading = () => {
  Swal.close();
};