import { Body, Controller, Post } from "@nestjs/common";
import { ProduceRequestDto } from "../dtos/produce-request.dto";
import { EventHelper } from "../helpers/events.helper";

@Controller({ version: "1", path: "/produce" })
export class AgentController {
  constructor(private readonly eventHelper: EventHelper) {}

  @Post()
  async sendRequest(@Body() produceRequest: ProduceRequestDto) {
    await this.eventHelper.sendEvent(
      produceRequest.message,
      produceRequest.topic,
    );
    return { message: "Request sent successfully!" };
  }
}
