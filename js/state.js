// Enhanced App State Management
const AppState = {
    currentUser: null,
    currentView: 'landing',
    expenses: [],
    approvals: [],
    notifications: [],
    settings: {
        theme: 'light',
        currency: 'INR',
        notifications: true,
        autoApproval: false
    },
    categories: [
        { name: 'Travel', icon: '✈️', color: 'blue' },
        { name: 'Meals', icon: '🍽️', color: 'green' },
        { name: 'Office Supplies', icon: '📎', color: 'yellow' },
        { name: 'Software', icon: '💻', color: 'purple' },
        { name: 'Marketing', icon: '📢', color: 'pink' },
        { name: 'Training', icon: '📚', color: 'indigo' },
        { name: 'Equipment', icon: '🔧', color: 'gray' },
        { name: 'Healthcare', icon: '🏥', color: 'red' },
        { name: 'Transportation', icon: '🚗', color: 'cyan' },
        { name: 'Other', icon: '📋', color: 'slate' }
    ],
    exchangeRates: { 
        USD: 83.12, EUR: 89.45, GBP: 104.23, INR: 1, 
        CAD: 61.45, AUD: 54.32, SGD: 61.89, JPY: 0.56 
    },
    expenseFilters: { 
        status: 'all', 
        category: 'all', 
        dateRange: 'all',
        amountRange: 'all'
    },
    
    // Enhanced User Database
    users: {
        'admin@kharcha.com': { 
            id: '1', 
            name: 'Alex Admin', 
            role: 'admin', 
            email: 'admin@kharcha.com', 
            password: 'admin123',
            department: 'Administration',
            joinDate: '2023-01-15',
            avatar: '👨‍💼',
            permissions: ['approve_all', 'view_analytics', 'manage_users'],
            approvalLimit: 100000
        },
        'manager@kharcha.com': { 
            id: '2', 
            name: 'Sarah Manager', 
            role: 'manager', 
            email: 'manager@kharcha.com', 
            password: 'manager123',
            department: 'Operations',
            joinDate: '2023-03-20',
            avatar: '👩‍💼',
            permissions: ['approve_team', 'view_team_analytics'],
            approvalLimit: 50000
        },
        'employee@kharcha.com': { 
            id: '3', 
            name: 'John Employee', 
            role: 'employee', 
            email: 'employee@kharcha.com', 
            password: 'employee123',
            department: 'Sales',
            joinDate: '2023-06-10',
            avatar: '👨‍💻',
            permissions: ['submit_expenses', 'view_own_expenses'],
            approvalLimit: 0
        },
        'finance@kharcha.com': { 
            id: '4', 
            name: 'Lisa Finance', 
            role: 'finance', 
            email: 'finance@kharcha.com', 
            password: 'finance123',
            department: 'Finance',
            joinDate: '2023-02-01',
            avatar: '👩‍💰',
            permissions: ['approve_all', 'view_analytics', 'export_data'],
            approvalLimit: 75000
        }
    },
    
    // Enhanced Sample Expenses
    sampleExpenses: [
        {
            id: '1',
            amount: 2500,
            currency: 'INR',
            category: 'Travel',
            description: 'Flight tickets to Mumbai for client meeting',
            date: '2024-01-15',
            status: 'pending',
            submittedBy: 'John Employee',
            submittedById: '3',
            approvalFlow: ['manager', 'admin'],
            currentApprover: 'manager',
            receipt: 'flight-receipt.pdf',
            submittedAt: '2024-01-16T10:30:00Z',
            notes: 'Urgent client meeting in Mumbai office',
            tags: ['urgent', 'client-meeting'],
            location: 'Mumbai, India',
            vendor: 'IndiGo Airlines'
        },
        {
            id: '2',
            amount: 150,
            currency: 'USD',
            category: 'Meals',
            description: 'Client dinner at The Oberoi',
            date: '2024-01-14',
            status: 'approved',
            submittedBy: 'John Employee',
            submittedById: '3',
            approvalFlow: ['manager'],
            currentApprover: null,
            receipt: 'dinner-receipt.jpg',
            submittedAt: '2024-01-15T09:15:00Z',
            approvedAt: '2024-01-15T14:20:00Z',
            approvedBy: 'Sarah Manager',
            tags: ['client-entertainment'],
            location: 'New Delhi, India',
            vendor: 'The Oberoi Hotel'
        },
        {
            id: '3',
            amount: 899,
            currency: 'USD',
            category: 'Software',
            description: 'Adobe Creative Suite Annual License',
            date: '2024-01-10',
            status: 'approved',
            submittedBy: 'John Employee',
            submittedById: '3',
            approvalFlow: ['manager', 'admin'],
            currentApprover: null,
            receipt: 'adobe-invoice.pdf',
            submittedAt: '2024-01-10T11:00:00Z',
            approvedAt: '2024-01-12T16:45:00Z',
            approvedBy: 'Alex Admin',
            tags: ['software', 'annual-license'],
            location: 'Online Purchase',
            vendor: 'Adobe Inc.'
        },
        {
            id: '4',
            amount: 45,
            currency: 'EUR',
            category: 'Office Supplies',
            description: 'Wireless mouse and keyboard',
            date: '2024-01-12',
            status: 'rejected',
            submittedBy: 'John Employee',
            submittedById: '3',
            approvalFlow: ['manager'],
            currentApprover: null,
            receipt: 'office-supplies.jpg',
            submittedAt: '2024-01-13T08:30:00Z',
            rejectedAt: '2024-01-13T15:10:00Z',
            rejectedBy: 'Sarah Manager',
            rejectionReason: 'Please use company-approved suppliers for office supplies',
            tags: ['office-equipment'],
            location: 'Amazon EU',
            vendor: 'Logitech'
        },
        {
            id: '5',
            amount: 1200,
            currency: 'INR',
            category: 'Training',
            description: 'React.js Advanced Workshop',
            date: '2024-01-08',
            status: 'pending',
            submittedBy: 'John Employee',
            submittedById: '3',
            approvalFlow: ['manager', 'admin'],
            currentApprover: 'admin',
            receipt: 'training-invoice.pdf',
            submittedAt: '2024-01-09T14:20:00Z',
            notes: 'Will help improve development skills for upcoming projects',
            tags: ['professional-development', 'react'],
            location: 'Bangalore, India',
            vendor: 'TechEd Institute'
        },
        {
            id: '6',
            amount: 75,
            currency: 'USD',
            category: 'Transportation',
            description: 'Uber rides for client meetings',
            date: '2024-01-20',
            status: 'approved',
            submittedBy: 'John Employee',
            submittedById: '3',
            approvalFlow: ['manager'],
            currentApprover: null,
            receipt: 'uber-receipts.pdf',
            submittedAt: '2024-01-21T08:00:00Z',
            approvedAt: '2024-01-21T12:30:00Z',
            approvedBy: 'Sarah Manager',
            tags: ['transportation', 'client-meetings'],
            location: 'Mumbai, India',
            vendor: 'Uber Technologies'
        }
    ]
};

// Initialize enhanced sample data
AppState.expenses = [...AppState.sampleExpenses];
AppState.notifications = [
    {
        id: 'notif1',
        title: '✅ Expense Approved',
        message: 'Your transportation expense of $75 has been approved by Sarah Manager',
        type: 'success',
        timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
        read: false,
        actionUrl: '/expenses/6'
    },
    {
        id: 'notif2',
        title: '📄 New Expense Submitted',
        message: 'John Employee submitted a travel expense for ₹2,500',
        type: 'info',
        timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
        read: false,
        actionUrl: '/approvals'
    },
    {
        id: 'notif3',
        title: '❌ Expense Rejected',
        message: 'Office supplies expense rejected - Please use approved suppliers',
        type: 'error',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        read: true,
        actionUrl: '/expenses/4'
    },
    {
        id: 'notif4',
        title: '⚠️ Approval Required',
        message: 'Training expense of ₹1,200 needs your approval',
        type: 'warning',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        read: false,
        actionUrl: '/approvals'
    },
    {
        id: 'notif5',
        title: '🎉 Monthly Report Ready',
        message: 'Your January expense report is ready for download',
        type: 'info',
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        read: false,
        actionUrl: '/analytics'
    }
];
