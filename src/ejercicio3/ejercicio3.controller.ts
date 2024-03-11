import { Controller, Get, Param } from '@nestjs/common';

@Controller('ejercicio3')
export class Ejercicio3Controller {
    @Get(':Nelson')
    saludar(@Param('Nelson') nombre: string): string {
        return `¡Hola, ${nombre}!`;
    }
}
