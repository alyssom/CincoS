import { TestBed, inject } from '@angular/core/testing';

import { GerenciadorDeUsuariosService } from './gerenciador-de-usuarios.service';

describe('GerenciadorDeUsuariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerenciadorDeUsuariosService]
    });
  });

  it('should be created', inject([GerenciadorDeUsuariosService], (service: GerenciadorDeUsuariosService) => {
    expect(service).toBeTruthy();
  }));
});
