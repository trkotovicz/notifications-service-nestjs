import { Content } from './content';

describe('Notification content', () => {
  describe('Success', () => {
    it('should be able to create a notification content', () => {
      const content = new Content('Você recebeu uma solicitação de amizade');
      expect(content).toBeTruthy();
    });
  });

  describe('Failure', () => {
    it('should not be able to create a notification content with less than 5 characters', () => {
      expect(() => new Content('oi')).toThrow();
    });
    it('should not be able to create a notification content with more than 240 characters', () => {
      expect(() => new Content('a'.repeat(241))).toThrow();
    });
  });
});
