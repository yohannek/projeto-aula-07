import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app =
    await NestFactory.create<NestExpressApplication>(
      AppModule,
    );

  // Serve os arquivos salvos em ./uploads diretamente via HTTP.
  app.useStaticAssets(
    join(import.meta.dirname, '..', 'uploads'),
    {
      prefix: '/uploads/',
    },
  );

  // Aula 17: documentação Swagger/OpenAPI, disponível em /docs.
  const config = new DocumentBuilder()
    .setTitle(
      'Backend NestJS - Codificação para Back-End',
    )
    .setDescription(
      'API construída ao longo das aulas do curso SENAI-CRTI.',
    )
    .setVersion('1.0')
    .addTag('produtos')
    .build();
  const document = SwaggerModule.createDocument(
    app,
    config,
  );
  SwaggerModule.setup('docs', app, document);

  // Aula 18: Atividade Prática "Cofre de Conexão".
  const configService = app.get(ConfigService);
  const databaseUrl =
    configService.get<string>('DATABASE_URL');

  // "A Prova de Fogo": confirma que o .env foi lido.
  // Só para teste: com senha na URI, NUNCA imprima.
  console.log(
    'DATABASE_URL carregada do .env:',
    databaseUrl,
  );

  try {
    await mongoose.connect(databaseUrl as string, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error(
      'Falha ao conectar ao MongoDB:',
      (error as Error).message,
    );
  }
  
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();