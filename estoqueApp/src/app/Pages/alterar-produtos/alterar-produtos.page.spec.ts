import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarProdutosPage } from './alterar-produtos.page';

describe('AlterarProdutosPage', () => {
  let component: AlterarProdutosPage;
  let fixture: ComponentFixture<AlterarProdutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterarProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
