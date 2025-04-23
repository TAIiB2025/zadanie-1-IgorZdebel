import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-koszyk',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent {
  wartoscKoszyka = 0;

  @Output() zresetowanoKoszyk = new EventEmitter<void>();

  dodajProdukt(cena: number): void {
    this.wartoscKoszyka += cena;
  }

  resetujKoszyk(): void {
    this.wartoscKoszyka = 0;
    this.zresetowanoKoszyk.emit();
  }
}
