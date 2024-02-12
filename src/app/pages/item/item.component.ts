import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute)
  private destroyRef = inject(DestroyRef);
  title: string | undefined = ''

  ngOnInit(): void {
    this.activatedRoute.title.pipe(takeUntilDestroyed(this.destroyRef)).subscribe( title => this.title = title)
  }
}
