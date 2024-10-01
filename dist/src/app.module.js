"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const Mail_module_1 = require("./modules/Mail.module");
const NotFound_1 = require("./NotFound");
const jwt_1 = require("@nestjs/jwt");
const auth_module_1 = require("./auth/auth.module");
const auth_controller_1 = require("./auth/auth.controller");
const auth_service_1 = require("./auth/auth.service");
const knex_service_1 = require("./service/knex.service");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_utils_service_1 = require("./service/auth.utils.service");
const jwt_service_1 = require("./service/jwt.service");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, Mail_module_1.MailModule],
        controllers: [app_controller_1.AppController, auth_controller_1.AuthController],
        providers: [
            { provide: core_1.APP_FILTER, useClass: NotFound_1.NotFoundExceptionFilter },
            app_service_1.AppService,
            knex_service_1.KnexService,
            auth_service_1.AuthService,
            auth_utils_service_1.AuthUtilsService,
            jwt_service_1.JwtAuthService,
            jwt_1.JwtService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map