import { Routes } from "@angular/router";
import { MainComponent } from "../pages/main/main.component";
import { ItemComponent } from "../pages/item/item.component";

export const LAPTOP_ROUTES: Routes = [
    { 
        path: '',
        children: [
            {
                path: '',
                title:'Laptop',  
                component: MainComponent,
            },
            {
                path: 'asus',  
                title: 'Asus',
                component: ItemComponent,
            },
            {
                path: 'samsung',  
                title: 'Samsung',
                component: ItemComponent,
            },
        ]
    },
]