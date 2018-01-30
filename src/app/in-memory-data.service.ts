import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Composition } from './composition';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const compositions: Composition[] = [
      new Composition(0, 1, 1, 3, '7896071300186', '0', 1, 10, '1', 15, '2', 5, '0', 2, '2', 1800, '0'),
      new Composition(1, 2, 1, 2, '12345678', '2', 1, 10, '1', 15, '2', 5, '0', 2, '2', 1800, '0'),
      new Composition(2, null, 1, 1, '111222333444555', '3', 1, 10, '1', 15, '2', 5, '0', 2, '2', 1800, '0'),
      new Composition(3, 4, 2, 2, '7896071300186', '0', 1, 10, '1', 15, '2', 5, '0', 2, '2', 1800, '0'),
      new Composition(4, null, 2, 1, '22334455', '3', 3, 10, '1', 15, '2', 5, '0', 2, '2', 1800, '0')
    ];
    return {compositions};
  }
}
