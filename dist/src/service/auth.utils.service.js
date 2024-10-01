"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUtilsService = void 0;
const ENV_1 = require("../util/ENV");
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const knex_service_1 = require("./knex.service");
let AuthUtilsService = class AuthUtilsService {
    constructor(knexService) {
        this.knexService = knexService;
        this.solt = ENV_1.default.SOLT;
    }
    async makeHashed(pass) {
        return await (0, bcrypt_1.hash)(pass, this.solt);
    }
    async compareHashed(hashedPass, newPass) {
        return await (0, bcrypt_1.compare)(newPass, hashedPass);
    }
};
exports.AuthUtilsService = AuthUtilsService;
exports.AuthUtilsService = AuthUtilsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [knex_service_1.KnexService])
], AuthUtilsService);
//# sourceMappingURL=auth.utils.service.js.map