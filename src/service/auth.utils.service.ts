import ENV  from 'src/util/ENV';
import { Injectable } from "@nestjs/common";
import { hash, compare } from "bcrypt";
import { KnexService } from "./knex.service";
@Injectable()
export class AuthUtilsService {
  constructor(private readonly knexService: KnexService) {}
  private solt = ENV.SOLT;
  async makeHashed(pass: string) {
    return await hash(pass, this.solt);
  }
  async compareHashed(hashedPass: string, newPass: string) {
    return await compare(newPass, hashedPass);
  }
  
}
