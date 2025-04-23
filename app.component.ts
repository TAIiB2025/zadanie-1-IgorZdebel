import { Component, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Product } from '../models/Product.class';
import { ProductComponent } from './product/product.component';
import { KoszykComponent } from './koszyk/koszyk.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent, KoszykComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'taiib_zadanie';

  produkty: Product[] = [
    new Product('Produkt 1', 20.00, new Date(2001, 8, 30), true),
    new Product('Produkt 2', 55.00, new Date(2020, 1, 15), false),
    new Product('Produkt 3', 99.99, new Date(2022, 11, 10), true),
    new Product('Produkt 4', 15.50, new Date(2019, 5, 5), false),
    new Product('Produkt 5', 75.00, new Date(2024, 2, 25), true),
  ];

  @ViewChild(KoszykComponent) koszykComponent!: KoszykComponent;
  @ViewChildren(ProductComponent) produktyComponentRefs!: QueryList<ProductComponent>;

  pokazProdukty = true;

  ngAfterViewInit(): void {
    
  }

  dodajDoKoszyka(cena: number): void {
    this.koszykComponent.dodajProdukt(cena);
  }

  toggleProdukty(): void {
    this.pokazProdukty = !this.pokazProdukty;
  }

  resetujIlosc(): void {
    this.produktyComponentRefs.forEach(p => p.resetujIlosc());
  }
}
