import { Injectable } from "@nestjs/common";
import { KafkaHelper } from "./kafka.helper";

@Injectable()
export class EventHelper {
  constructor(private readonly kafkaHelper: KafkaHelper) {}

  async sendEvent(data: any, topic: string) {
    await this.kafkaHelper.send(data, "Produce a message", topic);
  }
}
