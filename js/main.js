// Global Functions for Window Access
window.navigateTo = (view) => {
    AppState.currentView = view;
    render();
};

window.quickLogin = async (email) => {
    try {
        const response = await api.demoLogin(email);
        api.setToken(response.token);
        AppState.currentUser = response.user;
        AppState.currentView = 'dashboard';
        showNotification(`Welcome back, ${response.user.name}!`, 'success');
        render();
    } catch (error) {
        showNotification('Login failed: ' + error.message, 'error');
    }
};

window.logout = () => {
    api.clearToken();
    AppState.currentUser = null;
    AppState.currentView = 'landing';
    render();
};

window.toggleProfileMenu = () => {
    const menu = document.getElementById('profileMenu');
    const notificationPanel = document.getElementById('notificationPanel');
    
    menu.classList.toggle('hidden');
    if (notificationPanel) notificationPanel.classList.add('hidden');
};

window.toggleNotifications = () => {
    const panel = document.getElementById('notificationPanel');
    const profileMenu = document.getElementById('profileMenu');
    
    panel.classList.toggle('hidden');
    if (profileMenu) profileMenu.classList.add('hidden');
};

window.clearAllNotifications = () => {
    AppState.notifications = [];
    render();
    showNotification('All notifications cleared', 'success');
};

window.dismissNotification = (notificationId) => {
    AppState.notifications = AppState.notifications.filter(n => n.id !== notificationId);
    render();
};

window.handleNotificationClick = (notificationId) => {
    const notification = AppState.notifications.find(n => n.id === notificationId);
    if (notification) {
        notification.read = true;
        render();
    }
};

window.refreshActivity = () => {
    const refreshButton = document.querySelector('button[onclick="window.refreshActivity()"] i');
    if (refreshButton) {
        refreshButton.classList.add('animate-spin');
        setTimeout(() => {
            refreshButton.classList.remove('animate-spin');
        }, 1000);
    }
    showNotification('Activity refreshed successfully!', 'success');
    render();
};

window.viewExpenseDetail = (expenseId) => {
    const expense = AppState.expenses.find(e => e.id === expenseId);
    if (!expense) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="glass rounded-2xl p-8 max-w-4xl w-full max-h-96 overflow-y-auto custom-scrollbar">
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold text-gray-800 flex items-center">
                    <span class="text-2xl mr-3">${getCategoryIcon(expense.category)}</span>
                    Expense Details
                </h3>
                <button onclick="window.closeModal()" class="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                    <p class="text-sm text-blue-600 font-medium mb-1">Description</p>
                    <p class="font-semibold text-gray-800">${expense.description}</p>
                </div>
                <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                    <p class="text-sm text-green-600 font-medium mb-1">Amount</p>
                    <p class="font-bold text-gray-800 text-lg">${formatCurrency(expense.amount, expense.currency)}</p>
                    ${expense.currency !== 'INR' ? `<p class="text-xs text-gray-500">${formatCurrency(convertCurrency(expense.amount, expense.currency))} INR</p>` : ''}
                </div>
                <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl">
                    <p class="text-sm text-purple-600 font-medium mb-1">Category</p>
                    <p class="font-semibold text-gray-800 flex items-center">
                        <span class="mr-2">${getCategoryIcon(expense.category)}</span>
                        ${expense.category}
                    </p>
                </div>
                <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-xl">
                    <p class="text-sm text-yellow-600 font-medium mb-1">Date</p>
                    <p class="font-semibold text-gray-800">${new Date(expense.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-xl">
                    <p class="text-sm text-indigo-600 font-medium mb-1">Status</p>
                    <span class="inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                        expense.status === 'approved' ? 'bg-green-100 text-green-800' :
                        expense.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                    }">
                        ${expense.status.toUpperCase()}
                    </span>
                </div>
                <div class="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-xl">
                    <p class="text-sm text-pink-600 font-medium mb-1">Submitted By</p>
                    <p class="font-semibold text-gray-800">${expense.submittedBy}</p>
                    <p class="text-xs text-gray-500">${formatTimeAgo(expense.submittedAt)}</p>
                </div>
            </div>
            
            ${expense.location ? `
                <div class="bg-gradient-to-r from-cyan-50 to-cyan-100 p-4 rounded-xl mb-4">
                    <p class="text-sm text-cyan-600 font-medium mb-1 flex items-center">
                        <i data-lucide="map-pin" class="w-4 h-4 mr-1"></i>
                        Location
                    </p>
                    <p class="font-semibold text-gray-800">${expense.location}</p>
                </div>
            ` : ''}
            
            ${expense.vendor ? `
                <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl mb-4">
                    <p class="text-sm text-orange-600 font-medium mb-1 flex items-center">
                        <i data-lucide="store" class="w-4 h-4 mr-1"></i>
                        Vendor
                    </p>
                    <p class="font-semibold text-gray-800">${expense.vendor}</p>
                </div>
            ` : ''}
            
            ${expense.receipt ? `
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl mb-4">
                    <p class="text-sm text-blue-700 mb-2 flex items-center">
                        <i data-lucide="paperclip" class="w-4 h-4 mr-1"></i>
                        Receipt Attached
                    </p>
                    <p class="text-sm font-medium text-blue-800 bg-white px-3 py-2 rounded-lg inline-block">${expense.receipt}</p>
                </div>
            ` : ''}
            
            ${expense.notes ? `
                <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl mb-4">
                    <p class="text-sm text-yellow-700 mb-2 flex items-center">
                        <i data-lucide="sticky-note" class="w-4 h-4 mr-1"></i>
                        Notes
                    </p>
                    <p class="text-sm text-yellow-800">${expense.notes}</p>
                </div>
            ` : ''}
            
            ${expense.tags && expense.tags.length > 0 ? `
                <div class="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl mb-6">
                    <p class="text-sm text-gray-600 mb-2 flex items-center">
                        <i data-lucide="tags" class="w-4 h-4 mr-1"></i>
                        Tags
                    </p>
                    <div class="flex flex-wrap gap-2">
                        ${expense.tags.map(tag => `
                            <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">#${tag}</span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="flex space-x-3">
                ${expense.status === 'pending' && AppState.currentUser.id === expense.submittedById ? `
                    <button onclick="window.editExpense('${expense.id}')" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center">
                        <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i>
                        Edit Expense
                    </button>
                ` : ''}
                <button onclick="window.closeModal()" class="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105">
                    Close
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    setTimeout(() => {
        if (window.lucide) lucide.createIcons();
    }, 0);
};

window.closeModal = () => {
    const modals = document.querySelectorAll('.fixed.inset-0');
    modals.forEach(modal => modal.remove());
};

window.editExpense = (expenseId) => {
    const expense = AppState.expenses.find(e => e.id === expenseId);
    if (!expense || expense.status !== 'pending') {
        showNotification('Cannot edit this expense', 'error');
        return;
    }
    showNotification(`Editing expense: ${expense.description}`, 'info');
};

// Enhanced render function
const render = () => {
    const app = document.getElementById('app');
    
    if (!AppState.currentUser) {
        switch (AppState.currentView) {
            case 'login':
                app.innerHTML = LoginPage();
                setTimeout(() => {
                    const form = document.getElementById('loginForm');
                    if (form) {
                        form.addEventListener('submit', handleLogin);
                    }
                }, 0);
                break;
            case 'signup':
                app.innerHTML = SignupPage();
                setTimeout(() => {
                    const form = document.getElementById('signupForm');
                    if (form) {
                        form.addEventListener('submit', handleSignup);
                    }
                }, 0);
                break;
            default:
                app.innerHTML = LandingPage();
        }
    } else {
        switch (AppState.currentView) {
            case 'dashboard':
                app.innerHTML = Dashboard();
                break;
            case 'submit':
                app.innerHTML = SubmitExpensePage();
                setTimeout(() => {
                    const form = document.getElementById('expenseForm');
                    if (form) {
                        form.addEventListener('submit', handleExpenseSubmit);
                    }
                    const receiptInput = document.getElementById('expenseReceipt');
                    if (receiptInput) {
                        receiptInput.addEventListener('change', handleReceiptUpload);
                    }
                }, 0);
                break;
            case 'expenses':
                app.innerHTML = ExpensesPage();
                break;
            case 'approvals':
                app.innerHTML = ApprovalsPage();
                break;
            default:
                app.innerHTML = Dashboard();
        }
    }
    
    // Initialize Lucide icons
    setTimeout(() => {
        if (window.lucide) {
            lucide.createIcons();
        }
    }, 0);
};

// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
    const profileMenu = document.getElementById('profileMenu');
    const notificationPanel = document.getElementById('notificationPanel');
    const profileButton = event.target.closest('button[onclick="window.toggleProfileMenu()"]');
    const notificationButton = event.target.closest('button[onclick="window.toggleNotifications()"]');
    
    if (profileMenu && !profileMenu.contains(event.target) && !profileButton) {
        profileMenu.classList.add('hidden');
    }
    
    if (notificationPanel && !notificationPanel.contains(event.target) && !notificationButton) {
        notificationPanel.classList.add('hidden');
    }
});

// Initialize the application
render();

// Add welcome message
setTimeout(() => {
    if (!AppState.currentUser) {
        showNotification('🚀 Welcome to KharchaKart! Try the demo accounts to explore all features.', 'info');
    }
}, 2000);
