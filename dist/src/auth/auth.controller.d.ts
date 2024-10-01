import { AuthService } from "./auth.service";
import { TUserResponse } from "src/types/User";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    myprofile({ user_id }: {
        user_id: any;
    }): Promise<any>;
    getUsers(data: any): Promise<{}>;
    getUser(id: string): Promise<TUserResponse | null>;
    loginUser({ email, password, meta }: {
        email: string;
        password: string;
        meta: any;
    }): Promise<string>;
}
