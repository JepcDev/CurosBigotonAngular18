import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit{

  userId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la ruta
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
