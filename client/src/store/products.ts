import { defineStore } from 'pinia';
import { Product, Category, Catalog } from './interfaces'

export const useProductsStore = defineStore('products', {
    state: (): Catalog => {
        return {
            items: new Map<Category, Product[]>()
        };
    },
    actions: {
        async getCatalog() {

        }
    },
    getters: {
        getCategories
    }
});