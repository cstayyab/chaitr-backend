import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  chat(@Body() body: { message: string }) {
    const reply = this.chatService.getReply(body.message);
    if (!reply) {
      return { error: 'No response found' };
    }
    return { reply };
  }
}
