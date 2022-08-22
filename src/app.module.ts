import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { AgentController } from "./producer/controllers/agent.controller";
import { KafkaHelper } from "./producer/helpers/kafka.helper";
import { EventHelper } from "./producer/helpers/events.helper";

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AgentController],
  providers: [AppService, KafkaHelper, EventHelper],
})
export class AppModule {}
