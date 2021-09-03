import { TestBed } from '@angular/core/testing';

import { ProductsresolverService } from './productsresolver.service';

describe('ProductsresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsresolverService = TestBed.get(ProductsresolverService);
    expect(service).toBeTruthy();
  });
});
