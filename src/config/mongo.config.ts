import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoDataBaseConfig = async (
  configService: ConfigService
): Promise<MongooseModuleOptions> => {
  return Promise.resolve({
    uri: configService.get('MONGO_URI'),
  });
};
