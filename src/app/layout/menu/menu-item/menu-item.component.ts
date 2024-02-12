import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Menu } from '../../../model/menuItem';
import { ExpandMenuDirective } from '../../../derective/expand-menu.directive';
import { MnuTheme } from '../../../model/data_mock.test';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [ExpandMenuDirective, RouterLink, RouterLinkActive],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() data!: Menu
  @Input() themeItem: MnuTheme = 'dark'
}
