// Enhanced Utility Functions
const formatCurrency = (amount, currency = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
};

const convertCurrency = (amount, fromCurrency, toCurrency = 'INR') => {
    if (fromCurrency === toCurrency) return amount;
    const rate = AppState.exchangeRates[fromCurrency] || 1;
    return amount * rate;
};

const generateId = () => Math.random().toString(36).substr(2, 9);

const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInSeconds = Math.floor((now - time) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return time.toLocaleDateString();
};

const getCategoryIcon = (categoryName) => {
    const category = AppState.categories.find(c => c.name === categoryName);
    return category ? category.icon : '📋';
};

const getCategoryColor = (categoryName) => {
    const category = AppState.categories.find(c => c.name === categoryName);
    return category ? category.color : 'gray';
};

// Enhanced notification system
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-2xl text-white font-medium transform transition-all duration-500 translate-x-full ${
        type === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600' : 
        type === 'error' ? 'bg-gradient-to-r from-red-500 to-red-600' : 
        type === 'warning' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
        'bg-gradient-to-r from-blue-500 to-blue-600'
    }`;
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <i data-lucide="${
                type === 'success' ? 'check-circle' :
                type === 'error' ? 'x-circle' :
                type === 'warning' ? 'alert-triangle' :
                'info'
            }" class="w-5 h-5"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200 transition-colors">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        if (window.lucide) lucide.createIcons();
    }, 100);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 500);
        }
    }, 5000);
};
