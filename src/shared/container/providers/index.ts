import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implements/DiskStorageProvider';

// import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
// import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorgeProvider',
  DiskStorageProvider,
);