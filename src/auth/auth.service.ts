import { JwtAuthService } from "src/service/jwt.service";
import { AuthUtilsService } from "./../service/auth.utils.service";
import { TUser, TUserResponse, Tlogin } from "./../types/User";
import { BadRequestException, Injectable } from "@nestjs/common";
import { KnexService } from "src/service/knex.service";
import { MailService } from "src/service/mail.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly knexService: KnexService,
    public utils: AuthUtilsService,
    public jwt: JwtAuthService,
    public sendMail: MailService
  ) {}

  async getUsers() {
    return {};
  }

  async getUserById(id: number): Promise<TUserResponse | null> {
    try {
      const result = await this.knexService
        .getKnex()
        .table<TUserResponse>("_users")
        .where({ id })
        .first();
      return result || null;
    } catch (error) {
      // Handle error appropriately
      console.error("Error fetching user by ID:", error);
      throw new BadRequestException("Could not fetch user");
    }
  }

  async getUserByEmail(email: string): Promise<TUserResponse | null> {
    try {
      const result = await this.knexService
        .getKnex()
        .table<TUserResponse>("_users")
        .where({ email })
        .first();
      return result || null;
    } catch (error) {
      // Handle error appropriately
      console.error("Error fetching user by ID:", error);
      throw new BadRequestException("Could not fetch user");
    }
  }

  async loginUser(userInfo: { email: string; password: string; meta: any }) {
    return "loginMyUser";
  }
  async registerUser() {}

  async userProfile(id: string) {
    try {
      const result = await this.knexService
        .getKnex()
        .table("_users")
        .where({ id: id });
      delete result[0].password;
      return result[0];
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async userUpdateProfile() {}
}
