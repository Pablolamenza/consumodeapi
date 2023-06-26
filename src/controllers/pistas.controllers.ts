
import { Controller, Get } from "@nestjs/common";
import { AppService } from "src/app.service";
import { Pista } from '../class/pistas';

@Controller("pistas")
export class PistasController {
    constructor(private readonly AppService: AppService) {}
   
 @Get()
    getPistas(): any {

        const Pistas = [];

        for (let i = 0; 1 < 20; i++) {
        const pista = new Pista(
            i,
            "N" + this.AppService.getRamdomString(),
            360,
            "I" + this.AppService.getRamdomString(),
        );
        
        Pistas.push(pista);
        }

        const data = {
            cant: Pista.length,
            pistas: Pistas,
        };

    return data;
    } 
 }
