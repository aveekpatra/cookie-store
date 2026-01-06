'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

interface Order {
    id: string;
    date: string;
    items: { name: string; quantity: number; price: number }[];
    total: number;
    status: 'processing' | 'shipped' | 'delivered';
}

interface UserContextType {
    user: User | null;
    isLoggedIn: boolean;
    orders: Order[];
    login: (email: string, password: string) => boolean;
    logout: () => void;
    updateProfile: (data: Partial<User>) => void;
}

const mockUser: User = {
    id: 'user-1',
    name: 'Ana Novak',
    email: 'ana.novak@email.si',
    phone: '+386 40 123 456',
    address: 'Prešernova 10, 1000 Ljubljana',
};

const mockOrders: Order[] = [
    {
        id: 'ORD-001',
        date: '2024-01-05',
        items: [
            { name: 'Poročna torta', quantity: 1, price: 89.99 },
            { name: 'Kremšnita', quantity: 6, price: 4.50 },
        ],
        total: 116.99,
        status: 'delivered',
    },
    {
        id: 'ORD-002',
        date: '2024-01-02',
        items: [
            { name: 'Mešani piškoti (1kg)', quantity: 2, price: 24.99 },
        ],
        total: 49.98,
        status: 'shipped',
    },
];

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(mockUser); // Pre-logged in for demo
    const [orders] = useState<Order[]>(mockOrders);

    const login = (email: string, password: string) => {
        // Fake login - always succeeds
        setUser(mockUser);
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    const updateProfile = (data: Partial<User>) => {
        if (user) {
            setUser({ ...user, ...data });
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                isLoggedIn: !!user,
                orders,
                login,
                logout,
                updateProfile,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
