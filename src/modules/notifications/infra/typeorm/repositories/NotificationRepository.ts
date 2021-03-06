// repositorio de appointments especifico para typeorm
import { getMongoRepository, MongoRepository } from 'typeorm';

import INotificationsrepository from '@modules/notifications/repositories/INotificationsrepository';
import ICreateNotificationsDTO from '@modules/notifications/dtos/ICreateNotificationsDTO';

import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';

class NotificationsRepository implements INotificationsrepository {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationsDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      content,
      recipient_id,
    });

    await this.ormRepository.save(notification);

    return notification;
  }
}

export default NotificationsRepository;
