import { defineStore } from 'pinia';

interface User {
    id: String,
    name: String,
    verified: Boolean,
    phone: String 
}

var url = 'https://localhost:3000/api';

export const usersStore = defineStore('users', {
    state: () => ({
        users: [] as User[],
        isLoading: false,
        error: String as null | null
    }),
    actions: {
        async fetchUsers() {
            this.isLoading = true;
            try {
              const response = await fetch(url+'/users');
              this.users = await response.json();
            } catch (err) {
              this.error = err instanceof Error ? err.message : 'Cant get users';
            } finally {
              this.isLoading = false;
            }
        },
        async changeUserData(id: String, state: Boolean) {
            this.isLoading = true;
            try {
              const response = await fetch(url+'/users'+String);
              this.users = await response.json();
            } catch (err) {
              this.error = err instanceof Error ? err.message : 'Cant change user state';
            } finally {
              this.isLoading = false;
            }
        }
    }
});