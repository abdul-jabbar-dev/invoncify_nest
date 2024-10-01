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
exports.AuthService = void 0;
const jwt_service_1 = require("../service/jwt.service");
const auth_utils_service_1 = require("./../service/auth.utils.service");
const common_1 = require("@nestjs/common");
const knex_service_1 = require("../service/knex.service");
const mail_service_1 = require("../service/mail.service");
let AuthService = class AuthService {
    constructor(knexService, utils, jwt, sendMail) {
        this.knexService = knexService;
        this.utils = utils;
        this.jwt = jwt;
        this.sendMail = sendMail;
    }
    async getUsers() {
        return {};
    }
    async getUserById(id) {
        try {
            const result = await this.knexService
                .getKnex()
                .table("_users")
                .where({ id })
                .first();
            return result || null;
        }
        catch (error) {
            console.error("Error fetching user by ID:", error);
            throw new common_1.BadRequestException("Could not fetch user");
        }
    }
    async getUserByEmail(email) {
        try {
            const result = await this.knexService
                .getKnex()
                .table("_users")
                .where({ email })
                .first();
            return result || null;
        }
        catch (error) {
            console.error("Error fetching user by ID:", error);
            throw new common_1.BadRequestException("Could not fetch user");
        }
    }
    async loginUser(userInfo) {
        return "loginMyUser";
    }
    async registerUser() { }
    async userProfile(id) {
        try {
            const result = await this.knexService
                .getKnex()
                .table("_users")
                .where({ id: id });
            delete result[0].password;
            return result[0];
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async userUpdateProfile() { }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [knex_service_1.KnexService,
        auth_utils_service_1.AuthUtilsService,
        jwt_service_1.JwtAuthService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map