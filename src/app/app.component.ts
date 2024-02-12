import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLayoutComponent } from './layout/menu/menu-layout/menu-layout.component';
import { DATA_MENU } from './model/data_mock.test';
import { Menu } from './model/menuItem';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuLayoutComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ursulov-test';
  dataMenu: Menu[] = DATA_MENU
}
