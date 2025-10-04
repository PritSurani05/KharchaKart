// API Service for Backend Integration
const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
    constructor() {
        this.token = localStorage.getItem('auth_token');
    }

    setToken(token) {
        this.token = token;
        localStorage.setItem('auth_token', token);
    }

    clearToken() {
        this.token = null;
        localStorage.removeItem('auth_token');
    }

    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...(this.token && { 'Authorization': `Bearer ${this.token}` })
            },
            ...options
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Request failed');
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Authentication APIs
    async login(email, password) {
        return this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    }

    async register(userData) {
        return this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    async demoLogin(email) {
        return this.request('/auth/demo-login', {
            method: 'POST',
            body: JSON.stringify({ email })
        });
    }

    async verifyToken() {
        return this.request('/auth/verify', {
            method: 'POST',
            body: JSON.stringify({ token: this.token })
        });
    }

    // Expense APIs
    async getExpenses(filters = {}) {
        const params = new URLSearchParams(filters);
        return this.request(`/expenses?${params}`);
    }

    async createExpense(expenseData) {
        return this.request('/expenses', {
            method: 'POST',
            body: JSON.stringify(expenseData)
        });
    }

    async getExpense(id) {
        return this.request(`/expenses/${id}`);
    }

    async updateExpense(id, expenseData) {
        return this.request(`/expenses/${id}`, {
            method: 'PUT',
            body: JSON.stringify(expenseData)
        });
    }

    async deleteExpense(id) {
        return this.request(`/expenses/${id}`, {
            method: 'DELETE'
        });
    }

    async getExpenseStats() {
        return this.request('/expenses/stats');
    }

    // Approval APIs
    async getPendingApprovals() {
        return this.request('/approvals/pending');
    }

    async approveExpense(id) {
        return this.request(`/approvals/approve/${id}`, {
            method: 'POST'
        });
    }

    async rejectExpense(id, reason) {
        return this.request(`/approvals/reject/${id}`, {
            method: 'POST',
            body: JSON.stringify({ reason })
        });
    }

    async getApprovalStats() {
        return this.request('/approvals/stats');
    }

    // Notification APIs
    async getNotifications() {
        return this.request('/notifications');
    }

    async getUnreadCount() {
        return this.request('/notifications/unread');
    }

    async markAsRead(id) {
        return this.request(`/notifications/${id}/read`, {
            method: 'PUT'
        });
    }

    async markAllAsRead() {
        return this.request('/notifications/read-all', {
            method: 'PUT'
        });
    }

    async deleteNotification(id) {
        return this.request(`/notifications/${id}`, {
            method: 'DELETE'
        });
    }

    async clearAllNotifications() {
        return this.request('/notifications/clear-all', {
            method: 'DELETE'
        });
    }

    // User APIs
    async getProfile() {
        return this.request('/users/profile');
    }

    async updateProfile(profileData) {
        return this.request('/users/profile', {
            method: 'PUT',
            body: JSON.stringify(profileData)
        });
    }
}

// Global API instance
const api = new ApiService();
