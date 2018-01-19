import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Composition } from './composition';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const composition1 = {id: 2, dunCode: '7896071300186', packingUnit: 'U', quantity: 1, height: 10, heightUnit: 'CM',
    width: 15, widthUnit: 'M', depth: 5, depthUnit: 'MM', grossHeight: 2, grossHeightUnit: 'KG', netHeight: 1800,
    netHeightUnit: 'G', levels: []};

    const composition1Level1 = {id: 1, dunCode: '12345678', packingUnit: 'PC', quantity: 1, height: 10, heightUnit: 'CM', width: 15,
     widthUnit: 'M', depth: 5, depthUnit: 'MM', grossHeight: 2, grossHeightUnit: 'KG', netHeight: 1800, netHeightUnit: 'G', levels: []};
    composition1.levels.push(composition1Level1);

    const composition1Level2 = {id: 0, dunCode: '111222333444555', packingUnit: 'CX', quantity: 1, height: 10, heightUnit: 'CM', width: 15,
     widthUnit: 'M', depth: 5, depthUnit: 'MM', grossHeight: 2, grossHeightUnit: 'KG', netHeight: 1800, netHeightUnit: 'G', levels: []};
     composition1Level1.levels.push(composition1Level2);

     const composition2 = {id: 5, dunCode: '7896071300186', packingUnit: 'U', quantity: 1, height: 10, heightUnit: 'CM',
     width: 15, widthUnit: 'M', depth: 5, depthUnit: 'MM', grossHeight: 2, grossHeightUnit: 'KG', netHeight: 1800,
     netHeightUnit: 'G', levels: []};

     const composition2Level1 = {id: 4, dunCode: '12345678', packingUnit: 'PC', quantity: 1, height: 10, heightUnit: 'CM', width: 15,
      widthUnit: 'M', depth: 5, depthUnit: 'MM', grossHeight: 2, grossHeightUnit: 'KG', netHeight: 1800, netHeightUnit: 'G', levels: []};
      composition2.levels.push(composition2Level1);

     const composition2Level2 = {id: 3, dunCode: '111222333444555', packingUnit: 'CX', quantity: 1, height: 10, heightUnit: 'CM', width: 15,
      widthUnit: 'M', depth: 5, depthUnit: 'MM', grossHeight: 2, grossHeightUnit: 'KG', netHeight: 1800, netHeightUnit: 'G', levels: []};
      composition2Level1.levels.push(composition2Level2);

    const compositions: Composition[] = [ composition1, composition2 ];
    return {compositions};
  }
}
