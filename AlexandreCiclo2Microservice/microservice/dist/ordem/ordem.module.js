"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdemModule = void 0;
const common_1 = require("@nestjs/common");
const ordem_controller_1 = require("./ordem.controller");
const ordem_service_1 = require("./ordem.service");
const prisma_service_1 = require("../prisma/prisma.service");
let OrdemModule = class OrdemModule {
};
exports.OrdemModule = OrdemModule;
exports.OrdemModule = OrdemModule = __decorate([
    (0, common_1.Module)({
        controllers: [ordem_controller_1.OrdemController],
        providers: [ordem_service_1.OrdemService, prisma_service_1.PrismaService],
    })
], OrdemModule);
//# sourceMappingURL=ordem.module.js.map