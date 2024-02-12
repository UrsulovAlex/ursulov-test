export interface MenuItem {
    title: string, 
    icon: string, 
    route: string,
}

export interface Menu extends MenuItem{
    children: MenuItem[] | null,
}