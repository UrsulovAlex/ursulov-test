import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { Menu } from '../../../model/menuItem';
import { MnuTheme } from '../../../model/data_mock.test';

@Component({
  selector: 'app-menu-layout',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu-layout.component.html',
  styleUrl: './menu-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuLayoutComponent {
  @Input() data:Menu[] | null = []
  @Input() theme: MnuTheme = 'dark'
}
