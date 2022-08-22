import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Kafka producer")
    .setDescription("API that produces to Kafka")
    .setVersion("1.0")
    .addTag("kafka")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("", app, document);
  await app.listen(process.env.NODE_PORT || 3000);
}
bootstrap();
