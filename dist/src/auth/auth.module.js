"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const auth_utils_service_1 = require("./../service/auth.utils.service");
const jwt_service_1 = require("./../service/jwt.service");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const knex_service_1 = require("../service/knex.service");
const ENV_1 = require("../util/ENV");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const Mail_module_1 = require("../modules/Mail.module");
let AuthModule = class AuthModule {
    configure(consumer) {
        consumer
            .apply(authorization_middleware_1.AuthorizationMiddleware)
            .forRoutes({ path: "user/get_users", method: common_1.RequestMethod.GET }, { path: "user/delete", method: common_1.RequestMethod.DELETE }, { path: "user/update_profile", method: common_1.RequestMethod.PUT }, { path: "user/get_my_profile", method: common_1.RequestMethod.GET });
    }
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            Mail_module_1.MailModule,
            jwt_1.JwtModule.register({
                secret: ENV_1.default.SECRET,
                signOptions: { expiresIn: "60m" },
            })
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            knex_service_1.KnexService,
            jwt_service_1.JwtAuthService,
            auth_utils_service_1.AuthUtilsService
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map