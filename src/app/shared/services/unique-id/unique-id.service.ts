import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  private static generateUniqueId(): string {
    return uuidv4();
  }

  generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error('Prefix cannot be empty');
    }
    const uniqueId = UniqueIdService.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }
}
