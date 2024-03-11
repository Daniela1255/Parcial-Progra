import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ejercicio1Controller } from './ejercicio1/ejercicio1.controller';
import { Ejercicio2Controller } from './ejercicio2/ejercicio2.controller';
import { Ejercicio3Controller } from './ejercicio3/ejercicio3.controller';

@Module({
  imports: [],
  controllers: [AppController, Ejercicio1Controller, Ejercicio2Controller, Ejercicio3Controller],
  providers: [AppService],
})
export class AppModule {}
