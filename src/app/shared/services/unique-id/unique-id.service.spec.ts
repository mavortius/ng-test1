import { UniqueIdService } from './unique-id.service';

const prefix = 'app';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate it when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix(prefix);

    expect(id.startsWith(prefix)).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicated id's when called multiple times`, () => {
    const sizeIds = 50;
    const ids = new Set();

    for (let i = 0; i < sizeIds; i++) {
      ids.add(service.generateUniqueIdWithPrefix(prefix));
    }

    expect(ids.size).toBe(sizeIds);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generated ids when called`, () => {
    service.generateUniqueIdWithPrefix(prefix);
    service.generateUniqueIdWithPrefix(prefix);

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});
