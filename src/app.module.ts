import { MailModule } from "./modules/Mail.module";
import { NotFoundExceptionFilter } from "./NotFound";

import { JwtService } from "@nestjs/jwt";
import { AuthModule } from "./auth/auth.module";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { KnexService } from "./service/knex.service";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthUtilsService } from "./service/auth.utils.service";
import { JwtAuthService } from "./service/jwt.service";
import { APP_FILTER } from "@nestjs/core";

@Module({
  imports: [AuthModule, MailModule],
  controllers: [AppController, AuthController],
  providers: [
    { provide: APP_FILTER, useClass: NotFoundExceptionFilter },
    AppService,
    KnexService,
    AuthService,
    AuthUtilsService,
    JwtAuthService,
    JwtService,
  ],
})
export class AppModule {}
