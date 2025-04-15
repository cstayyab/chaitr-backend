import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private responses = [
    { pattern: /hello|hi/i, reply: 'Hi! I am your AI assistant.' },
    { pattern: /how are you/i, reply: 'I’m just a bot, but I’m doing fine!' },
    { pattern: /bye/i, reply: 'Goodbye!' },
    { pattern: /what is your name/i, reply: 'I am Chaitr' },
    {
      pattern: /tell me a joke/i,
      reply:
        'Why did the scarecrow win an award? Because he was outstanding in his field!',
    },
    {
      pattern: /what is your favorite color/i,
      reply: 'I like all colors equally!',
    },
    { pattern: /help|assist/i, reply: 'How can I assist you today?' },
    { pattern: /thank you|thanks/i, reply: 'You’re welcome!' },
    {
      pattern: /who created you/i,
      reply:
        'I was created by Muhammad Tayyab Sheikh aka CSTayyab. You can find more about him at https://cstayyab.com',
    },
    {
      pattern: /what can you do/i,
      reply: 'I can chat with you and answer your questions!',
    },
  ];

  getReply(message: string): string {
    for (const { pattern, reply } of this.responses) {
      if (pattern.test(message)) {
        return reply;
      }
    }
    return "I'm not sure how to respond to that.";
  }
}
