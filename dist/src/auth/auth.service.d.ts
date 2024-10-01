import { JwtAuthService } from "src/service/jwt.service";
import { AuthUtilsService } from "./../service/auth.utils.service";
import { TUserResponse } from "./../types/User";
import { KnexService } from "src/service/knex.service";
import { MailService } from "src/service/mail.service";
export declare class AuthService {
    private readonly knexService;
    utils: AuthUtilsService;
    jwt: JwtAuthService;
    sendMail: MailService;
    constructor(knexService: KnexService, utils: AuthUtilsService, jwt: JwtAuthService, sendMail: MailService);
    getUsers(): Promise<{}>;
    getUserById(id: number): Promise<TUserResponse | null>;
    getUserByEmail(email: string): Promise<TUserResponse | null>;
    loginUser(userInfo: {
        email: string;
        password: string;
        meta: any;
    }): Promise<string>;
    registerUser(): Promise<void>;
    userProfile(id: string): Promise<any>;
    userUpdateProfile(): Promise<void>;
}
