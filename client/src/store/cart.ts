import { defineStore } from 'pinia';
import { Product, Cart, CartItem } from '@/store/interfaces'
import { reactive } from 'vue';

export const useCartStore = defineStore('cart', {
    state: (): Cart => {
        const defaultCart = reactive({
            items: new Map<number, CartItem>(),
            total: 0,
            quantity: 0
        });

        const saved = localStorage.getItem('cart');
        if (saved) {
            const parsed = JSON.parse(saved);
            parsed.items?.forEach(([id, item]) => {
                defaultCart.items.set(id, item);
            });
            defaultCart.total = parsed.total;
            defaultCart.quantity = parsed.quantity;
        }
        return defaultCart
    },
    actions: {
        addItem(product: Product) {
            const cartProduct = this.items.get(product.id)
            if (cartProduct) {
                console.log('No')
                cartProduct.quantity++;
            } else {
                console.log('Yes')
                this.items.set(product.id, {
                    product: product,
                    quantity: 1
                });
            }
            this.updateTotals();
            this.saveCart();
        },
        decreaseItem(product: Product) {
            const cartProduct = this.items.get(product.id)
            if (cartProduct) {
                cartProduct.quantity--;
                if (cartProduct.quantity <= 0) {
                    this.items.delete(product.id)
                }
                this.updateTotals();
                this.saveCart();
            }
        },
        removeItem(product: Product) {
            const cartProduct = this.items.get(product.id)
            if (cartProduct) {
                this.total -= (product.price * cartProduct.quantity);
                this.quantity -= cartProduct.quantity;
                this.items.delete(product.id)
                this.updateTotals();
                this.saveCart();
            }
        },
        updateTotals() {
            this.total = Array.from(this.items.values()).reduce(
                (sum: number, item: CartItem) => sum + (item.product.price * item.quantity),
                0
            );
            this.quantity = Array.from(this.items.values()).reduce(
                (sum: number, item: CartItem) => sum + item.quantity,
                0
            );
        },
        saveCart() {
            const cartData = {
                items: Array.from(this.items.entries()),
                total: this.total,
                quantity: this.quantity
            };
            localStorage.setItem('cart', JSON.stringify(cartData));
        },
        clearCart() {
            const cartData = {
                items: new Map<number, CartItem>(),
                total: 0,
                quantity: 0
            };
            this.$patch(cartData);
            localStorage.removeItem('cart');
        }
    }
});