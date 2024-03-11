import { Controller, Get } from '@nestjs/common';

@Controller('ejercicio1')
export class Ejercicio1Controller {
    @Get()
    getHello(): string {
        return '¡Hello World!'
    }    
}
