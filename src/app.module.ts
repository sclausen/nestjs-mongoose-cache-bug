import { CacheModule, Module } from '@nestjs/common';
import * as mongooseStore from 'cache-manager-mongoose';
import mongoose from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => {
        await mongoose.connect('mongodb://foo:foo@mongodb:27017/foo');

        return {
          mongoose,
          store: mongooseStore,
          ttl: 10,
        };
      },
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
