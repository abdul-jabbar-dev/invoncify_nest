import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { TUser, TUserResponse, Tlogin } from "src/types/User";

@Controller("user")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("get_my_profile")
  async myprofile(@Body() { user_id }) {
    try {
      return await this.authService.userProfile(user_id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get("get_users")
  async getUsers(@Query() data) {
    return await this.authService.getUsers();
  }

  @Get("get_user/:id")
  async getUser(@Param("id") id: string): Promise<TUserResponse | null> {
    const userId = parseInt(id);
    return await this.authService.getUserById(userId);
  }

  // @Post("register")
  // async registerUser(
  //   @Body() user: TUser
  // ): Promise<{ data: TUserResponse; token: string } | null> {
  //   try {
  //     return await this.authService.registerUser();
  //   } catch (error) {
  //     throw new BadRequestException(error);
  //   }
  // }

  @Post("login")
  async loginUser(
    @Body()
    { email, password, meta }: { email: string; password: string; meta: any }
  ) {
    try {
      return await this.authService.loginUser({ email, password, meta });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
