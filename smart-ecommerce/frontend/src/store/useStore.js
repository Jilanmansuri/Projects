import { create } from 'zustand';

const useStore = create((set) => ({
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
    paymentMethod: localStorage.getItem('paymentMethod') || 'Stripe',

    setUserInfo: (info) => {
        localStorage.setItem('userInfo', JSON.stringify(info));
        set({ userInfo: info });
    },
    logout: () => {
        localStorage.removeItem('userInfo');
        set({ userInfo: null, cartItems: [], shippingAddress: {}, paymentMethod: '' });
    },

    addToCart: (item) => set((state) => {
        const existItem = state.cartItems.find((x) => x._id === item._id);
        let newCartItems;
        if (existItem) {
            newCartItems = state.cartItems.map((x) =>
                x._id === existItem._id ? item : x
            );
        } else {
            newCartItems = [...state.cartItems, item];
        }
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        return { cartItems: newCartItems };
    }),

    removeFromCart: (id) => set((state) => {
        const newCartItems = state.cartItems.filter((x) => x._id !== id);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        return { cartItems: newCartItems };
    }),

    saveShippingAddress: (data) => {
        localStorage.setItem('shippingAddress', JSON.stringify(data));
        set({ shippingAddress: data });
    },

    savePaymentMethod: (data) => {
        localStorage.setItem('paymentMethod', data);
        set({ paymentMethod: data });
    },

    clearCartItems: () => {
        localStorage.removeItem('cartItems');
        set({ cartItems: [] });
    },
}));

export default useStore;
