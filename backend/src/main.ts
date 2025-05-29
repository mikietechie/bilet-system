import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { conf } from './conf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Bilet System')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  await app.listen(conf.server.port, conf.server.host);
  const url = await app.getUrl();
  process.env.ADDRESS = url;
  console.log(`Application is running on ${url}`);
}
bootstrap();
