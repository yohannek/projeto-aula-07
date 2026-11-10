var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateConvidadoDto } from './src/convidados/create-convidado.dto.js';
let ConvidadosController = class ConvidadosController {
    convidados = ['Ana', 'Bruno', 'Carlos'];
    listarTodos() {
        return this.convidados;
    }
    criar(createConvidadoDto) {
        console.log('Convidado recebido:', createConvidadoDto.nome);
        return {
            mensagem: `Convidado ${createConvidadoDto.nome} confirmado com sucesso!`,
            dados: createConvidadoDto,
        };
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ConvidadosController.prototype, "listarTodos", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateConvidadoDto]),
    __metadata("design:returntype", void 0)
], ConvidadosController.prototype, "criar", null);
ConvidadosController = __decorate([
    Controller('convidados')
], ConvidadosController);
export { ConvidadosController };
//# sourceMappingURL=convidados.controller.js.map