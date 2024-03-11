import { Test, TestingModule } from '@nestjs/testing';
import { Ejercicio1Controller } from './ejercicio1.controller';

describe('Ejercicio1Controller', () => {
  let controller: Ejercicio1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ejercicio1Controller],
    }).compile();

    controller = module.get<Ejercicio1Controller>(Ejercicio1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
