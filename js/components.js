// Enhanced Landing Page
const LandingPage = () => `
    <div class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 float" style="animation-delay: 0s;"></div>
            <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full opacity-20 float" style="animation-delay: 2s;"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full opacity-10 float" style="animation-delay: 4s;"></div>
        </div>
        
        <div class="max-w-6xl mx-auto text-center slide-up relative z-10">
            <div class="mb-12">
                <div class="bounce-in">
                    <div class="flex items-center justify-center mb-6">
                        <svg width="50" height="50" viewBox="0 0 80 80" class="mr-4 drop-shadow-lg">
        <!-- Cart Body -->
        <rect x="15" y="25" width="45" height="30" rx="4" fill="#8B5CF6" stroke="#581C87" stroke-width="2"/>
        
        <!-- Cart Handle -->
        <path d="M10 20 L15 20 L18 45 L55 45" stroke="#581C87" stroke-width="3" fill="none" stroke-linecap="round"/>
        
        <!-- Wheels -->
        <circle cx="25" cy="60" r="6" fill="#7C3AED" stroke="#581C87" stroke-width="2"/>
        <circle cx="50" cy="60" r="6" fill="#7C3AED" stroke="#581C87" stroke-width="2"/>
        
        <!-- Money Symbol in Cart -->
        <circle cx="37.5" cy="40" r="12" fill="#6D28D9" class="coin-spin"/>
        <text x="37.5" y="46" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#581C87">₹</text>
        
        <!-- Expense Lines -->
        <line x1="20" y1="30" x2="30" y2="30" stroke="#581C87" stroke-width="2" opacity="0.7"/>
        <line x1="45" y1="35" x2="55" y2="35" stroke="#581C87" stroke-width="2" opacity="0.7"/>
        <line x1="20" y1="50" x2="28" y2="50" stroke="#581C87" stroke-width="2" opacity="0.7"/>
    </svg>
    
    <!-- Company Name -->
    <div>
        <h1 class="text-4xl font-bold gradient-text">KarchaKart</h1>
        <p class="text-sm text-slate-500 font-medium">Expense Management</p>
    </div>
</div>
                    </div>
                    <p class="text-2xl text-gray-600 mb-4 font-medium">Smart Expense Management • Reimagined</p>
                    <p class="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">Experience the future of expense tracking with AI-powered OCR, real-time approvals, and intelligent analytics</p>
                    
                    <!-- Enhanced Feature Cards -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div class="glass rounded-2xl p-6 card-hover pulse-glow" style="animation-delay: 0.2s;">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <i data-lucide="scan-line" class="w-8 h-8 text-white"></i>
                            </div>
                            <h3 class="text-lg font-bold text-gray-800 mb-2">AI OCR Scanning</h3>
                            <p class="text-sm text-gray-600">Instantly extract data from receipts with 99% accuracy</p>
                        </div>
                        
                        <div class="glass rounded-2xl p-6 card-hover" style="animation-delay: 0.4s;">
                            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <i data-lucide="users-2" class="w-8 h-8 text-white"></i>
                            </div>
                            <h3 class="text-lg font-bold text-gray-800 mb-2">Smart Approvals</h3>
                            <p class="text-sm text-gray-600">Multi-level approval workflows with real-time notifications</p>
                        </div>
                        
                        <div class="glass rounded-2xl p-6 card-hover" style="animation-delay: 0.6s;">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <i data-lucide="globe-2" class="w-8 h-8 text-white"></i>
                            </div>
                            <h3 class="text-lg font-bold text-gray-800 mb-2">Global Currency</h3>
                            <p class="text-sm text-gray-600">Real-time currency conversion for international expenses</p>
                        </div>
                        
                        <div class="glass rounded-2xl p-6 card-hover" style="animation-delay: 0.8s;">
                            <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <i data-lucide="bar-chart-3" class="w-8 h-8 text-white"></i>
                            </div>
                            <h3 class="text-lg font-bold text-gray-800 mb-2">Advanced Analytics</h3>
                            <p class="text-sm text-gray-600">Detailed insights and spending pattern analysis</p>
                        </div>
                    </div>
                </div>
                
                <!-- Enhanced Login Card -->
                <div class="glass rounded-3xl shadow-2xl p-10 max-w-lg mx-auto bounce-in" style="animation-delay: 1s;">
                    <div class="mb-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
                        <p class="text-gray-600">Join thousands of companies managing expenses smarter</p>
                    </div>
                    
                    <div class="space-y-4 mb-8">
                        <button onclick="navigateTo('login')" class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
                            <i data-lucide="log-in" class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"></i>
                            Sign In to Your Account
                        </button>
                        <button onclick="navigateTo('signup')" class="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
                            <i data-lucide="user-plus" class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"></i>
                            Create New Account
                        </button>
                    </div>
                    
                    <div class="border-t border-gray-200 pt-6">
                        <p class="text-sm text-gray-600 mb-4 font-medium">🚀 Try Demo Accounts:</p>
                        <div class="grid grid-cols-1 gap-3">
                            <button onclick="quickLogin('admin@kharcha.com')" class="w-full bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-red-700 py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center group border border-red-200">
                                <span class="text-lg mr-2">👨‍💼</span>
                                <span class="group-hover:font-semibold transition-all">Admin Dashboard</span>
                                <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                            <div class="grid grid-cols-2 gap-3">
                                <button onclick="quickLogin('manager@kharcha.com')" class="bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 py-3 px-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center group border border-blue-200">
                                    <span class="text-sm mr-1">👩‍💼</span>
                                    <span class="text-sm group-hover:font-semibold transition-all">Manager</span>
                                </button>
                                <button onclick="quickLogin('employee@kharcha.com')" class="bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 text-green-700 py-3 px-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center group border border-green-200">
                                    <span class="text-sm mr-1">👨‍💻</span>
                                    <span class="text-sm group-hover:font-semibold transition-all">Employee</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Trust Indicators -->
                <div class="mt-16 fade-in" style="animation-delay: 1.5s;">
                    <p class="text-sm text-gray-500 mb-6">Trusted by 10,000+ companies worldwide</p>
                    <div class="flex items-center justify-center space-x-8 opacity-60">
                        <div class="text-2xl font-bold text-gray-400">TechCorp</div>
                        <div class="text-2xl font-bold text-gray-400">InnovateLab</div>
                        <div class="text-2xl font-bold text-gray-400">GlobalTech</div>
                        <div class="text-2xl font-bold text-gray-400">StartupXYZ</div>
                    </div>
                </div>
            </div>
        </div>
    `;

// Enhanced Header Component
const Header = () => {
    const user = AppState.currentUser;
    const unreadNotifications = AppState.notifications.filter(n => !n.read).length;
    
    return `
        <header class="glass border-b backdrop-blur-md sticky top-0 z-40">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center space-x-8">
                        <div class="flex items-center cursor-pointer group" onclick="navigateTo('dashboard')">
                            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform">
                                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                                    <path d="M9 12l2 2 4-4" stroke="white" stroke-width="2" fill="none"/>
                                </svg>
                            </div>
                            <h1 class="text-xl font-bold group-hover:scale-105 transition-transform">
                                <span class="gradient-text">Kharcha</span><span class="text-indigo-600">Kart</span>
                            </h1>
                        </div>
                        <nav class="hidden md:flex space-x-6">
                            <button onclick="navigateTo('dashboard')" class="text-gray-600 hover:text-gray-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 ${AppState.currentView === 'dashboard' ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''}">
                                <i data-lucide="home" class="w-4 h-4 mr-1 inline"></i>
                                Dashboard
                            </button>
                            <button onclick="navigateTo('submit')" class="text-gray-600 hover:text-gray-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 ${AppState.currentView === 'submit' ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''}">
                                <i data-lucide="plus-circle" class="w-4 h-4 mr-1 inline"></i>
                                Submit
                            </button>
                            <button onclick="navigateTo('expenses')" class="text-gray-600 hover:text-gray-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 ${AppState.currentView === 'expenses' ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''}">
                                <i data-lucide="receipt" class="w-4 h-4 mr-1 inline"></i>
                                Expenses
                            </button>
                            ${user.role !== 'employee' ? `
                            <button onclick="navigateTo('approvals')" class="text-gray-600 hover:text-gray-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 relative ${AppState.currentView === 'approvals' ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''}">
                                <i data-lucide="check-square" class="w-4 h-4 mr-1 inline"></i>
                                Approvals
                                ${AppState.expenses.filter(e => e.status === 'pending' && (user.role === 'admin' || user.role === 'finance' || (user.role === 'manager' && e.currentApprover === 'manager'))).length > 0 ? `
                                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">${AppState.expenses.filter(e => e.status === 'pending' && (user.role === 'admin' || user.role === 'finance' || (user.role === 'manager' && e.currentApprover === 'manager'))).length}</span>
                                ` : ''}
                            </button>
                            ` : ''}
                            <button onclick="navigateTo('analytics')" class="text-gray-600 hover:text-gray-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 ${AppState.currentView === 'analytics' ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''}">
                                <i data-lucide="bar-chart-3" class="w-4 h-4 mr-1 inline"></i>
                                Analytics
                            </button>
                        </nav>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <!-- Enhanced Notifications -->
                        <div class="relative">
                            <button onclick="window.toggleNotifications()" class="text-gray-600 hover:text-gray-900 relative transition-all transform hover:scale-110 p-2 rounded-lg hover:bg-gray-100">
                                <i data-lucide="bell" class="w-5 h-5"></i>
                                ${unreadNotifications > 0 ? `
                                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse font-bold">
                                        ${unreadNotifications > 9 ? '9+' : unreadNotifications}
                                    </span>
                                ` : ''}
                            </button>
                            
                            <div id="notificationPanel" class="hidden absolute right-0 mt-2 w-96 glass rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-hidden">
                                <div class="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-lg font-bold text-gray-800 flex items-center">
                                            <i data-lucide="bell" class="w-5 h-5 mr-2 text-blue-600"></i>
                                            Notifications
                                        </h3>
                                        ${AppState.notifications.length > 0 ? `
                                        <button onclick="window.clearAllNotifications()" class="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors px-3 py-1 rounded-lg hover:bg-blue-100">
                                            Clear All
                                        </button>
                                        ` : ''}
                                    </div>
                                    ${unreadNotifications > 0 ? `
                                        <p class="text-xs text-blue-600 mt-1">${unreadNotifications} unread notification${unreadNotifications > 1 ? 's' : ''}</p>
                                    ` : ''}
                                </div>
                                <div class="max-h-80 overflow-y-auto custom-scrollbar">
                                    ${AppState.notifications.length > 0 ? AppState.notifications.map((notification, index) => `
                                        <div class="px-6 py-4 border-b border-gray-100 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all cursor-pointer ${!notification.read ? 'bg-blue-25' : ''}" onclick="window.handleNotificationClick('${notification.id}')">
                                            <div class="flex items-start space-x-4">
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                                                    notification.type === 'success' ? 'bg-green-100' :
                                                    notification.type === 'error' ? 'bg-red-100' :
                                                    notification.type === 'warning' ? 'bg-yellow-100' :
                                                    'bg-blue-100'
                                                }">
                                                    <i data-lucide="${
                                                        notification.type === 'success' ? 'check-circle' :
                                                        notification.type === 'error' ? 'x-circle' :
                                                        notification.type === 'warning' ? 'alert-triangle' :
                                                        'info'
                                                    }" class="w-5 h-5 ${
                                                        notification.type === 'success' ? 'text-green-600' :
                                                        notification.type === 'error' ? 'text-red-600' :
                                                        notification.type === 'warning' ? 'text-yellow-600' :
                                                        'text-blue-600'
                                                    }"></i>
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <div class="flex items-center justify-between">
                                                        <p class="text-sm font-semibold text-gray-800">${notification.title}</p>
                                                        ${!notification.read ? `
                                                            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                        ` : ''}
                                                    </div>
                                                    <p class="text-sm text-gray-600 mt-1">${notification.message}</p>
                                                    <div class="flex items-center justify-between mt-2">
                                                        <p class="text-xs text-gray-400">${formatTimeAgo(notification.timestamp)}</p>
                                                        <button onclick="event.stopPropagation(); window.dismissNotification('${notification.id}')" class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded hover:bg-gray-200">
                                                            <i data-lucide="x" class="w-3 h-3"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('') : `
                                        <div class="px-6 py-12 text-center">
                                            <i data-lucide="bell-off" class="w-16 h-16 text-gray-300 mx-auto mb-4"></i>
                                            <p class="text-sm text-gray-500 font-medium">No notifications yet</p>
                                            <p class="text-xs text-gray-400 mt-1">You'll see updates here when they arrive</p>
                                        </div>
                                    `}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Enhanced Profile Dropdown -->
                        <div class="relative">
                            <button onclick="window.toggleProfileMenu()" class="flex items-center space-x-3 text-gray-600 hover:text-gray-900 focus:outline-none transition-all transform hover:scale-105 p-2 rounded-lg hover:bg-gray-100">
                                <div class="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center text-lg shadow-md">
                                    ${user.avatar}
                                </div>
                                <div class="text-left hidden sm:block">
                                    <p class="text-sm font-semibold text-gray-800">${user.name}</p>
                                    <p class="text-xs text-gray-600 capitalize">${user.role} • ${user.department}</p>
                                </div>
                                <i data-lucide="chevron-down" class="w-4 h-4"></i>
                            </button>
                            
                            <div id="profileMenu" class="hidden absolute right-0 mt-2 w-64 glass rounded-xl shadow-2xl border border-gray-200 z-50">
                                <div class="p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center text-xl">
                                            ${user.avatar}
                                        </div>
                                        <div>
                                            <p class="font-semibold text-gray-800">${user.name}</p>
                                            <p class="text-xs text-gray-600">${user.email}</p>
                                            <p class="text-xs text-blue-600 capitalize">${user.role} • ${user.department}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <button onclick="navigateTo('profile')" class="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 flex items-center transition-colors group">
                                        <i data-lucide="user" class="w-4 h-4 mr-3 group-hover:scale-110 transition-transform"></i>
                                        Profile Settings
                                    </button>
                                    <button onclick="navigateTo('analytics')" class="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 flex items-center transition-colors group">
                                        <i data-lucide="bar-chart-3" class="w-4 h-4 mr-3 group-hover:scale-110 transition-transform"></i>
                                        Analytics Dashboard
                                    </button>
                                    <button onclick="navigateTo('settings')" class="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 flex items-center transition-colors group">
                                        <i data-lucide="settings" class="w-4 h-4 mr-3 group-hover:scale-110 transition-transform"></i>
                                        Settings
                                    </button>
                                    <div class="border-t border-gray-100 my-1"></div>
                                    <button onclick="window.logout()" class="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center transition-colors group">
                                        <i data-lucide="log-out" class="w-4 h-4 mr-3 group-hover:scale-110 transition-transform"></i>
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
};

// Enhanced Dashboard with v8 features
const Dashboard = () => {
    const user = AppState.currentUser;
    const userExpenses = user.role === 'employee' 
        ? AppState.expenses.filter(e => e.submittedById === user.id)
        : AppState.expenses;
    const pendingApprovals = AppState.expenses.filter(e => 
        e.status === 'pending' && 
        (user.role === 'admin' || user.role === 'finance' || 
         (user.role === 'manager' && e.currentApprover === 'manager'))
    );

    // Enhanced Analytics
    const totalAmount = userExpenses.reduce((sum, e) => sum + convertCurrency(e.amount, e.currency), 0);
    const thisMonthExpenses = userExpenses.filter(e => {
        const expenseDate = new Date(e.date);
        const now = new Date();
        return expenseDate.getMonth() === now.getMonth() && expenseDate.getFullYear() === now.getFullYear();
    });
    const thisMonthAmount = thisMonthExpenses.reduce((sum, e) => sum + convertCurrency(e.amount, e.currency), 0);
    const avgExpenseAmount = userExpenses.length > 0 ? totalAmount / userExpenses.length : 0;
    const approvalRate = userExpenses.length > 0 ? 
        (userExpenses.filter(e => e.status === 'approved').length / userExpenses.length) * 100 : 0;

    return `
        <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            ${Header()}
            <div class="max-w-7xl mx-auto px-4 py-8">
                <!-- Enhanced Welcome Section -->
                <div class="mb-8 fade-in">
                    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div class="mb-4 lg:mb-0">
                            <h1 class="text-4xl font-bold text-gray-800 mb-2">
                                Welcome back, ${user.name}! 
                                <span class="text-3xl">${user.avatar}</span>
                            </h1>
                            <div class="flex items-center space-x-4 text-gray-600">
                                <span class="flex items-center">
                                    <i data-lucide="building" class="w-4 h-4 mr-1"></i>
                                    ${user.department}
                                </span>
                                <span class="flex items-center">
                                    <i data-lucide="shield" class="w-4 h-4 mr-1"></i>
                                    ${user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                </span>
                                <span class="flex items-center">
                                    <i data-lucide="calendar" class="w-4 h-4 mr-1"></i>
                                    Since ${new Date(user.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                        </div>
                        <div class="glass rounded-2xl p-6 text-center">
                            <p class="text-sm text-gray-600 mb-1">Total Expenses</p>
                            <p class="text-3xl font-bold gradient-text">${formatCurrency(totalAmount)}</p>
                            <p class="text-xs text-gray-500">${userExpenses.length} transactions</p>
                        </div>
                    </div>
                </div>

                <!-- Enhanced Stats Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="glass rounded-2xl shadow-lg p-6 card-hover fade-in" style="animation-delay: 0.1s;">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <i data-lucide="receipt" class="w-6 h-6 text-white"></i>
                            </div>
                            <div class="text-right">
                                <p class="text-2xl font-bold text-gray-800">${userExpenses.length}</p>
                                <p class="text-xs text-blue-600 font-medium">Total Expenses</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <span class="text-gray-600">This month: ${thisMonthExpenses.length}</span>
                            <span class="text-green-600 font-medium">+${Math.round(Math.random() * 20)}%</span>
                        </div>
                        <div class="mt-3 bg-gray-200 rounded-full h-2">
                            <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style="width: ${Math.min((thisMonthExpenses.length / Math.max(userExpenses.length, 1)) * 100, 100)}%"></div>
                        </div>
                    </div>
                    
                    <div class="glass rounded-2xl shadow-lg p-6 card-hover fade-in" style="animation-delay: 0.2s;">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                <i data-lucide="check-circle" class="w-6 h-6 text-white"></i>
                            </div>
                            <div class="text-right">
                                <p class="text-2xl font-bold text-gray-800">${userExpenses.filter(e => e.status === 'approved').length}</p>
                                <p class="text-xs text-green-600 font-medium">Approved</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <span class="text-gray-600">Approval rate</span>
                            <span class="text-green-600 font-medium">${Math.round(approvalRate)}%</span>
                        </div>
                        <div class="mt-3 bg-gray-200 rounded-full h-2">
                            <div class="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style="width: ${approvalRate}%"></div>
                        </div>
                    </div>
                    
                    <div class="glass rounded-2xl shadow-lg p-6 card-hover fade-in" style="animation-delay: 0.3s;">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                                <i data-lucide="trending-up" class="w-6 h-6 text-white"></i>
                            </div>
                            <div class="text-right">
                                <p class="text-2xl font-bold text-gray-800">${formatCurrency(avgExpenseAmount).replace('₹', '₹')}</p>
                                <p class="text-xs text-yellow-600 font-medium">Avg Amount</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <span class="text-gray-600">This month: ${formatCurrency(thisMonthAmount)}</span>
                        </div>
                        <div class="mt-3 bg-gray-200 rounded-full h-2">
                            <div class="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style="width: ${Math.min((thisMonthAmount / Math.max(totalAmount, 1)) * 100, 100)}%"></div>
                        </div>
                    </div>
                    
                    <div class="glass rounded-2xl shadow-lg p-6 card-hover fade-in" style="animation-delay: 0.4s;">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <i data-lucide="${user.role !== 'employee' ? 'users' : 'clock'}" class="w-6 h-6 text-white"></i>
                            </div>
                            <div class="text-right">
                                <p class="text-2xl font-bold text-gray-800">${user.role !== 'employee' ? pendingApprovals.length : userExpenses.filter(e => e.status === 'pending').length}</p>
                                <p class="text-xs text-purple-600 font-medium">${user.role !== 'employee' ? 'Pending Approvals' : 'Pending'}</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <span class="text-gray-600">Needs attention</span>
                            ${(user.role !== 'employee' ? pendingApprovals.length : userExpenses.filter(e => e.status === 'pending').length) > 0 ? 
                                '<span class="text-red-600 font-medium animate-pulse">Urgent</span>' : 
                                '<span class="text-green-600 font-medium">All clear</span>'
                            }
                        </div>
                        <div class="mt-3 bg-gray-200 rounded-full h-2">
                            <div class="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full animate-pulse" style="width: ${(user.role !== 'employee' ? pendingApprovals.length : userExpenses.filter(e => e.status === 'pending').length) > 0 ? '100' : '0'}%"></div>
                        </div>
                    </div>
                </div>

                <!-- Enhanced Main Content Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Quick Actions - Enhanced -->
                    <div class="lg:col-span-4">
                        <div class="glass rounded-2xl shadow-lg p-6 fade-in">
                            <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                                    <i data-lucide="zap" class="w-4 h-4 text-white"></i>
                                </div>
                                Quick Actions
                            </h2>
                            <div class="space-y-4">
                                <button onclick="navigateTo('submit')" class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center group transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    <i data-lucide="plus-circle" class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
                                    Submit New Expense
                                    <i data-lucide="arrow-right" class="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform"></i>
                                </button>
                                
                                <button onclick="navigateTo('expenses')" class="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center group transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    <i data-lucide="list" class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
                                    View All Expenses
                                    <i data-lucide="arrow-right" class="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform"></i>
                                </button>
                                
                                ${user.role !== 'employee' ? `
                                <button onclick="navigateTo('approvals')" class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center group transform hover:scale-105 shadow-lg hover:shadow-xl relative">
                                    <i data-lucide="check-square" class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
                                    Review Approvals
                                    ${pendingApprovals.length > 0 ? `<span class="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">${pendingApprovals.length}</span>` : ''}
                                    <i data-lucide="arrow-right" class="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform"></i>
                                </button>
                                ` : ''}
                                
                                <button onclick="navigateTo('analytics')" class="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center group transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    <i data-lucide="bar-chart-3" class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
                                    View Analytics
                                    <i data-lucide="arrow-right" class="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform"></i>
                                </button>
                            </div>
                            
                            <!-- Quick Stats -->
                            <div class="mt-6 pt-6 border-t border-gray-200">
                                <h3 class="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h3>
                                <div class="grid grid-cols-2 gap-3">
                                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
                                        <p class="text-xs text-blue-600 font-medium">This Week</p>
                                        <p class="text-lg font-bold text-blue-800">${Math.floor(Math.random() * 5) + 1}</p>
                                    </div>
                                    <div class="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg">
                                        <p class="text-xs text-green-600 font-medium">Avg Time</p>
                                        <p class="text-lg font-bold text-green-800">${Math.floor(Math.random() * 24) + 1}h</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Enhanced Recent Activity -->
                    <div class="lg:col-span-8">
                        <div class="glass rounded-2xl shadow-lg p-6 fade-in">
                            <div class="flex items-center justify-between mb-6">
                                <h2 class="text-xl font-bold text-gray-800 flex items-center">
                                    <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                                        <i data-lucide="activity" class="w-4 h-4 text-white"></i>
                                    </div>
                                    Recent Activity
                                </h2>
                                <div class="flex items-center space-x-3">
                                    <button onclick="window.refreshActivity()" class="text-gray-400 hover:text-gray-600 transition-colors transform hover:rotate-180 duration-300 p-2 rounded-lg hover:bg-gray-100" title="Refresh">
                                        <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                                    </button>
                                    <button onclick="navigateTo('expenses')" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 flex items-center">
                                        View All
                                        <i data-lucide="external-link" class="w-3 h-3 ml-1"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div class="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                                ${userExpenses.length > 0 ? userExpenses
                                    .sort((a, b) => new Date(b.submittedAt || b.date) - new Date(a.submittedAt || a.date))
                                    .slice(0, 8).map((expense, index) => `
                                    <div class="expense-item group relative flex items-center p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl cursor-pointer border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300" onclick="window.viewExpenseDetail('${expense.id}')" style="animation-delay: ${index * 0.1}s">
                                        <!-- Enhanced Status Indicator -->
                                        <div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl status-indicator ${
                                            expense.status === 'approved' ? 'bg-gradient-to-b from-green-400 to-green-600' : 
                                            expense.status === 'rejected' ? 'bg-gradient-to-b from-red-400 to-red-600' :
                                            'bg-gradient-to-b from-yellow-400 to-yellow-600'
                                        }"></div>
                                        
                                        <div class="flex items-center space-x-4 flex-1">
                                            <!-- Category Icon -->
                                            <div class="relative">
                                                <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${
                                                    expense.status === 'approved' ? 'from-green-100 to-green-200' : 
                                                    expense.status === 'rejected' ? 'from-red-100 to-red-200' :
                                                    'from-yellow-100 to-yellow-200'
                                                } flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                                    <span class="text-xl">${getCategoryIcon(expense.category)}</span>
                                                </div>
                                                ${expense.status === 'pending' ? `
                                                    <div class="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse flex items-center justify-center">
                                                        <div class="w-2 h-2 bg-white rounded-full"></div>
                                                    </div>
                                                ` : ''}
                                            </div>
                                            
                                            <!-- Expense Details -->
                                            <div class="flex-1 min-w-0">
                                                <div class="flex items-center space-x-3 mb-2">
                                                    <h3 class="font-semibold text-gray-800 text-sm group-hover:text-blue-700 transition-colors truncate">
                                                        ${expense.description.length > 35 ? expense.description.substring(0, 35) + '...' : expense.description}
                                                    </h3>
                                                    <span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                                                        expense.status === 'approved' ? 'bg-green-100 text-green-700 group-hover:bg-green-200' : 
                                                        expense.status === 'rejected' ? 'bg-red-100 text-red-700 group-hover:bg-red-200' :
                                                        'bg-yellow-100 text-yellow-700 group-hover:bg-yellow-200'
                                                    } transition-all">
                                                        ${expense.status.toUpperCase()}
                                                    </span>
                                                </div>
                                                <div class="flex items-center space-x-4 text-xs text-gray-600 group-hover:text-blue-600 transition-colors">
                                                    <span class="flex items-center bg-gray-100 px-2 py-1 rounded-md">
                                                        <i data-lucide="tag" class="w-3 h-3 mr-1"></i>
                                                        ${expense.category}
                                                    </span>
                                                    <span class="flex items-center">
                                                        <i data-lucide="calendar" class="w-3 h-3 mr-1"></i>
                                                        ${new Date(expense.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                    </span>
                                                    <span class="flex items-center">
                                                        <i data-lucide="user" class="w-3 h-3 mr-1"></i>
                                                        ${expense.submittedBy.split(' ')[0]}
                                                    </span>
                                                    ${expense.location ? `
                                                        <span class="flex items-center">
                                                            <i data-lucide="map-pin" class="w-3 h-3 mr-1"></i>
                                                            ${expense.location.split(',')[0]}
                                                        </span>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- Amount and Actions -->
                                        <div class="flex items-center space-x-4">
                                            <div class="text-right">
                                                <p class="font-bold text-gray-800 text-lg group-hover:text-blue-700 transition-colors">
                                                    ${formatCurrency(expense.amount, expense.currency)}
                                                </p>
                                                ${expense.currency !== 'INR' ? `
                                                    <p class="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">
                                                        ${formatCurrency(convertCurrency(expense.amount, expense.currency))}
                                                    </p>
                                                ` : ''}
                                            </div>
                                            
                                            <!-- Action Buttons -->
                                            <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onclick="event.stopPropagation(); window.viewExpenseDetail('${expense.id}')" class="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition-all" title="View Details">
                                                    <i data-lucide="eye" class="w-4 h-4"></i>
                                                </button>
                                                ${expense.status === 'pending' && AppState.currentUser.id === expense.submittedById ? `
                                                    <button onclick="event.stopPropagation(); window.editExpense('${expense.id}')" class="p-2 text-green-500 hover:text-green-700 hover:bg-green-100 rounded-lg transition-all" title="Edit">
                                                        <i data-lucide="edit-2" class="w-4 h-4"></i>
                                                    </button>
                                                ` : ''}
                                            </div>
                                            
                                            <!-- Arrow Indicator -->
                                            <div class="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1">
                                                <i data-lucide="chevron-right" class="w-5 h-5 text-blue-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                `).join('') : `
                                    <div class="text-center py-16">
                                        <div class="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                                            <i data-lucide="receipt" class="w-12 h-12 text-gray-400"></i>
                                        </div>
                                        <h3 class="text-xl font-semibold text-gray-600 mb-3">No Activity Yet</h3>
                                        <p class="text-sm text-gray-500 mb-6 max-w-sm mx-auto">Start by submitting your first expense to see activity here. It's quick and easy!</p>
                                        <button onclick="navigateTo('submit')" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto">
                                            <i data-lucide="plus" class="w-5 h-5 mr-2"></i>
                                            Submit First Expense
                                        </button>
                                    </div>
                                `}
                            </div>
                            
                            <!-- Enhanced Activity Summary -->
                            ${userExpenses.length > 0 ? `
                                <div class="mt-6 pt-6 border-t border-gray-200">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-6">
                                            <div class="flex items-center space-x-2">
                                                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                                <span class="text-sm text-gray-600">
                                                    <span class="font-semibold text-green-600">${userExpenses.filter(e => e.status === 'approved').length}</span> approved
                                                </span>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                <span class="text-sm text-gray-600">
                                                    <span class="font-semibold text-yellow-600">${userExpenses.filter(e => e.status === 'pending').length}</span> pending
                                                </span>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                                <span class="text-sm text-gray-600">
                                                    <span class="font-semibold text-red-600">${userExpenses.filter(e => e.status === 'rejected').length}</span> rejected
                                                </span>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('expenses')" class="text-blue-500 hover:text-blue-700 font-medium transition-colors flex items-center text-sm">
                                            View All ${userExpenses.length}
                                            <i data-lucide="external-link" class="w-3 h-3 ml-1"></i>
                                        </button>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};
