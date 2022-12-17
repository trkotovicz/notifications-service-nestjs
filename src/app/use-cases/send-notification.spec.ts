import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepositoryMock = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepositoryMock);

    await sendNotification.execute({
      content: 'uma notificação legal',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
