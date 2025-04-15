import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as os from 'os';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);

  const networkInterfaces = os.networkInterfaces();
  const localIps: string[] = [];

  for (const iface of Object.values(networkInterfaces)) {
    for (const alias of iface ?? []) {
      if (alias.family === 'IPv4' && !alias.internal) {
        localIps.push(alias.address);
      }
    }
  }

  const logger = new Logger('Bootstrap');

  logger.log(`Server running on:`);
  localIps.forEach((ip) => {
    logger.log(`> http://${ip}:${PORT}`);
  });
  logger.log(`> http://localhost:${PORT}`);
}
bootstrap();
