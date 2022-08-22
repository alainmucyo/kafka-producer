import { ApiProperty } from "@nestjs/swagger";

export class ProduceRequestDto {
  @ApiProperty({ description: "Topic to send a request to" })
  topic: string;

  @ApiProperty({ description: "A JSON object to send" })
  message: any;
}
