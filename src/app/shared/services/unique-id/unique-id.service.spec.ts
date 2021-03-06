import { UniqueIdService } from './unique-id.service';
import { TestBed } from '@angular/core/testing';

const prefix = 'app';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniqueIdService]
    });
    service = TestBed.inject(UniqueIdService);
  });

  it('Should create service', () => {
    expect(service).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
                should generate it when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix(prefix);

    expect(id.startsWith(prefix)).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
                should not generate duplicated id's when called multiple times`, () => {
    const sizeIds = 50;
    const ids = new Set();

    for (let i = 0; i < sizeIds; i++) {
      ids.add(service.generateUniqueIdWithPrefix(prefix));
    }

    expect(ids.size).toBe(sizeIds);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
                  should return the number of generated ids when called`, () => {
    service.generateUniqueIdWithPrefix(prefix);
    service.generateUniqueIdWithPrefix(prefix);

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
                should throw an error when called with empty`, () => {
    const emptyPrefixes = [null, undefined, '', '0', '1'];

    emptyPrefixes.forEach(pref => expect(() => service.generateUniqueIdWithPrefix(pref)).withContext(`Value: ${pref}`).toThrow());
  });
});
