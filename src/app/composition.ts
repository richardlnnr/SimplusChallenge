export class Composition {
    constructor(id: number, fatherId: number, compositionNumber: number, index: number, dunCode: string,
        packingUnit: string, quantity: number, height: number, heightUnit: string, width: number,
        widthUnit: string, depth: number, depthUnit: string, grossHeight: number, grossHeightUnit: string,
        netHeight: number, netHeightUnit: string) {
        this.id = id;
        this.fatherId = fatherId;
        this.compositionNumber = compositionNumber;
        this.index = index;
        this.dunCode = dunCode;
        this.packingUnit = packingUnit;
        this.quantity = quantity;
        this.height = height;
        this.heightUnit = heightUnit;
        this.width = width;
        this.widthUnit = widthUnit;
        this.depth = depth;
        this.depthUnit = depthUnit;
        this.grossHeight = grossHeight;
        this.grossHeightUnit = grossHeightUnit;
        this.netHeight = netHeight;
        this.netHeightUnit = netHeightUnit;
        this.expanded = false;
    }

    id: number;
    index: number;
    fatherId: number;
    compositionNumber: number;
    dunCode: string;
    packingUnit: string;
    quantity: number;
    height: number;
    heightUnit: string;
    width: number;
    widthUnit: string;
    depth: number;
    depthUnit: string;
    grossHeight: number;
    grossHeightUnit: string;
    netHeight: number;
    netHeightUnit: string;
    expanded: boolean;
}
