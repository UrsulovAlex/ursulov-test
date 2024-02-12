import { Component } from '@angular/core';
import { MenuLayoutComponent } from '../menu/menu-layout/menu-layout.component';
import { RouterLink } from '@angular/router';
import { DATA_MENU } from '../../model/data_mock.test';
import { Menu } from '../../model/menuItem';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuLayoutComponent, RouterLink, MenuLayoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  dataMenu: Menu[] = DATA_MENU

}
