import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { inMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to count all the recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const countNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova solicitação de amizade!'),
        category: 'social',
        recipientId: 'recipient-id-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova solicitação de amizade!'),
        category: 'social',
        recipientId: 'recipient-id-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova solicitação de amizade!'),
        category: 'social',
        recipientId: 'recipient-id-2',
      }),
    );

    const { count } = await countNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
