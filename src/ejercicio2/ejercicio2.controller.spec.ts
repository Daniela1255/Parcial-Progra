import { Test, TestingModule } from '@nestjs/testing';
import { Ejercicio2Controller } from './ejercicio2.controller';

describe('Ejercicio2Controller', () => {
  let controller: Ejercicio2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ejercicio2Controller],
    }).compile();

    controller = module.get<Ejercicio2Controller>(Ejercicio2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
