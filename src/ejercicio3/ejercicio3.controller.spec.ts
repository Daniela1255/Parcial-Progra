import { Test, TestingModule } from '@nestjs/testing';
import { Ejercicio3Controller } from './ejercicio3.controller';

describe('Ejercicio3Controller', () => {
  let controller: Ejercicio3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ejercicio3Controller],
    }).compile();

    controller = module.get<Ejercicio3Controller>(Ejercicio3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
