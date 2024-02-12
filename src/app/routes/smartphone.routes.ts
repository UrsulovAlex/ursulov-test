import { Routes } from "@angular/router";
import { MainComponent } from "../pages/main/main.component";
import { ItemComponent } from "../pages/item/item.component";

export const SMARTPHONE_ROUTES: Routes = [
    { 
        path: '',
        children: [
            {
                path: '',
                title:'Smartphone',
                component: MainComponent,
            },
            {
                path: 'motorola',  
                title: 'Motorola',
                component: ItemComponent,
            },
            {
                path: 'nokia',  
                title: 'Nokia',
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