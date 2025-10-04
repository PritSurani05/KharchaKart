// Enhanced form handlers
const handleLogin = async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await api.login(email, password);
        api.setToken(response.token);
        AppState.currentUser = response.user;
        AppState.currentView = 'dashboard';
        showNotification(`Welcome back, ${response.user.name}!`, 'success');
        render();
    } catch (error) {
        showNotification('Login failed: ' + error.message, 'error');
    }
};

const handleSignup = async (event) => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const department = document.getElementById('department').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    try {
        const response = await api.register({
            name: `${firstName} ${lastName}`,
            email: email,
            password: password,
            department: department
        });
        api.setToken(response.token);
        AppState.currentUser = response.user;
        AppState.currentView = 'dashboard';
        showNotification(`Account created successfully! Welcome, ${response.user.name}!`, 'success');
        render();
    } catch (error) {
        showNotification('Registration failed: ' + error.message, 'error');
    }
};

// Expense Form Handlers
const handleExpenseSubmit = async (event) => {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const currency = document.getElementById('expenseCurrency').value;
    const category = document.getElementById('expenseCategory').value;
    const description = document.getElementById('expenseDescription').value;
    const date = document.getElementById('expenseDate').value;
    const location = document.getElementById('expenseLocation').value;
    const vendor = document.getElementById('expenseVendor').value;
    const notes = document.getElementById('expenseNotes').value;
    const tags = document.getElementById('expenseTags').value;
    
    if (!amount || !currency || !category || !description || !date) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    try {
        const response = await api.createExpense({
            amount: amount,
            currency: currency,
            category: category,
            description: description,
            date: date,
            location: location || null,
            vendor: vendor || null,
            notes: notes || null,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
            receipt: document.getElementById('expenseReceipt').files[0]?.name || null
        });
        
        showNotification('Expense submitted successfully!', 'success');
        navigateTo('expenses');
    } catch (error) {
        showNotification('Failed to submit expense: ' + error.message, 'error');
    }
};

const handleReceiptUpload = (event) => {
    const file = event.target.files[0];
    const preview = document.getElementById('receiptPreview');
    
    if (file) {
        preview.classList.remove('hidden');
        showNotification('Receipt uploaded successfully!', 'success');
    } else {
        preview.classList.add('hidden');
    }
};

// Approval Functions
window.approveExpense = async (expenseId) => {
    try {
        await api.approveExpense(expenseId);
        showNotification('Expense approved successfully!', 'success');
        render();
    } catch (error) {
        showNotification('Failed to approve expense: ' + error.message, 'error');
    }
};

window.rejectExpense = async (expenseId) => {
    const reason = prompt('Please provide a reason for rejection:');
    if (!reason) return;
    
    try {
        await api.rejectExpense(expenseId, reason);
        showNotification('Expense rejected successfully!', 'error');
        render();
    } catch (error) {
        showNotification('Failed to reject expense: ' + error.message, 'error');
    }
};

window.deleteExpense = async (expenseId) => {
    if (!confirm('Are you sure you want to delete this expense?')) return;
    
    try {
        await api.deleteExpense(expenseId);
        showNotification('Expense deleted successfully!', 'success');
        render();
    } catch (error) {
        showNotification('Failed to delete expense: ' + error.message, 'error');
    }
};

// Filter Functions
window.applyFilters = () => {
    const statusFilter = document.getElementById('statusFilter')?.value || 'all';
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const dateFilter = document.getElementById('dateFilter')?.value || 'all';
    const searchFilter = document.getElementById('searchFilter')?.value.toLowerCase() || '';
    
    const user = AppState.currentUser;
    let expenses = user.role === 'employee' 
        ? AppState.expenses.filter(e => e.submittedById === user.id)
        : AppState.expenses;
    
    // Apply filters
    if (statusFilter !== 'all') {
        expenses = expenses.filter(e => e.status === statusFilter);
    }
    
    if (categoryFilter !== 'all') {
        expenses = expenses.filter(e => e.category === categoryFilter);
    }
    
    if (dateFilter !== 'all') {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
        expenses = expenses.filter(e => {
            const expenseDate = new Date(e.date);
            
            switch (dateFilter) {
                case 'today':
                    return expenseDate >= today;
                case 'week':
                    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
                    return expenseDate >= weekAgo;
                case 'month':
                    return expenseDate.getMonth() === now.getMonth() && 
                           expenseDate.getFullYear() === now.getFullYear();
                case 'quarter':
                    const quarter = Math.floor(now.getMonth() / 3);
                    const expenseQuarter = Math.floor(expenseDate.getMonth() / 3);
                    return expenseQuarter === quarter && 
                           expenseDate.getFullYear() === now.getFullYear();
                default:
                    return true;
            }
        });
    }
    
    if (searchFilter) {
        expenses = expenses.filter(e => 
            e.description.toLowerCase().includes(searchFilter) ||
            e.category.toLowerCase().includes(searchFilter) ||
            e.submittedBy.toLowerCase().includes(searchFilter) ||
            (e.vendor && e.vendor.toLowerCase().includes(searchFilter)) ||
            (e.location && e.location.toLowerCase().includes(searchFilter))
        );
    }
    
    // Update table
    const tableBody = document.getElementById('expensesTableBody');
    if (tableBody) {
        tableBody.innerHTML = expenses.map(expense => `
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <span class="text-2xl mr-3">${getCategoryIcon(expense.category)}</span>
                        <div>
                            <div class="text-sm font-medium text-gray-900">${expense.description}</div>
                            <div class="text-sm text-gray-500">${expense.submittedBy}</div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">${formatCurrency(expense.amount, expense.currency)}</div>
                    ${expense.currency !== 'INR' ? `<div class="text-sm text-gray-500">${formatCurrency(convertCurrency(expense.amount, expense.currency))}</div>` : ''}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        ${expense.category}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${new Date(expense.date).toLocaleDateString()}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        expense.status === 'approved' ? 'bg-green-100 text-green-800' :
                        expense.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                    }">
                        ${expense.status.toUpperCase()}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div class="flex space-x-2">
                        <button onclick="window.viewExpenseDetail('${expense.id}')" class="text-blue-600 hover:text-blue-900 transition-colors">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                        ${expense.status === 'pending' && user.id === expense.submittedById ? `
                            <button onclick="window.editExpense('${expense.id}')" class="text-green-600 hover:text-green-900 transition-colors">
                                <i data-lucide="edit-2" class="w-4 h-4"></i>
                            </button>
                            <button onclick="window.deleteExpense('${expense.id}')" class="text-red-600 hover:text-red-900 transition-colors">
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                            </button>
                        ` : ''}
                    </div>
                </td>
            </tr>
        `).join('');
        
        // Re-initialize icons
        if (window.lucide) {
            lucide.createIcons();
        }
    }
};

// Enhanced password toggle function
window.togglePassword = (inputId) => {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.setAttribute('data-lucide', 'eye-off');
    } else {
        input.type = 'password';
        icon.setAttribute('data-lucide', 'eye');
    }
    
    if (window.lucide) {
        lucide.createIcons();
    }
};
