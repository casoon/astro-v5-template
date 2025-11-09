// Global type declarations for window extensions

interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

interface ToastManager {
  show(options: ToastOptions): void;
  remove(id: string): void;
}

interface Window {
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning', duration?: number) => void;
  toastManager: ToastManager;
}
