import { Menu } from "./menuItem";


export const DATA_MENU: Menu[] = [
    {
        title: 'Smartphone', 
        icon: 'bi bi-phone', 
        route: 'smartphone',
        children: [
            {
                title: 'Motorola', 
                icon: 'bi bi-phone-fill', 
                route: 'smartphone/motorola',
            },
            {
                title: 'Nokia', 
                icon: 'bi bi-phone-fill', 
                route: 'smartphone/nokia',
            },
            {
                title: 'Samsung', 
                icon: 'bi bi-phone-fill', 
                route: 'smartphone/samsung',
            },
        ]
    },
    {
        title: 'Clock', 
        icon: 'bi bi-clock', 
        route: 'clock',
        children: null
    },
    {
        title: 'laptop', 
        icon: 'bi bi-laptop', 
        route: 'laptop',
        children: [
            {
                title: 'Asus', 
                icon: 'bi bi-laptop-fill', 
                route: 'laptop/asus',
            },
            {
                title: 'Samsung', 
                icon: 'bi bi-laptop-fill', 
                route: 'laptop/samsung',
            },
        ]
    },
]

export type MnuTheme = 'dark' | 'light';