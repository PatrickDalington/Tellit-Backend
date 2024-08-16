// src/config/config.service.ts
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class Config {
  constructor(private env: ConfigService) {
    console.log('This is database name ' + env.get('POSTGRES_DATABASE'));
  }

  public isProduction() {
    const mode = this.env.get('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.env.get('POSTGRES_HOST'),
      port: parseInt(this.env.get('POSTGRES_PORT')),
      username: this.env.get('POSTGRES_USER'),
      password: this.env.get('POSTGRES_PASSWORD') as string,
      database: this.env.get('POSTGRES_DATABASE'),

      entities: ['**/*.entity{.ts,.js}'],

      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],

      // Remove the 'cli' property

      //ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService();
const config = new Config(configService);

export { config };
