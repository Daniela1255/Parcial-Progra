import { Controller, Post } from '@nestjs/common';

@Controller('Ejercicio2Controller')
export class Ejercicio2Controller {
    @Post('mensaje')
    create(): string {

        const mensaje = 'Hola, ¿como estas?'
        return mensaje;
    }
}
