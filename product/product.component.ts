import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/Product.class';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() produkt!: Product;
  @Output() dodanoDoKoszyka = new EventEmitter<number>();

  iloscWKoszyku = 0;

  kliknijDodaj(): void {
    this.iloscWKoszyku++;
    this.dodanoDoKoszyka.emit(this.produkt.cena);
  }
  resetujIlosc(): void {
    this.iloscWKoszyku = 0;
  }
  ukryty = false;

toggleWidok(): void {
  this.ukryty = !this.ukryty;
}
}
