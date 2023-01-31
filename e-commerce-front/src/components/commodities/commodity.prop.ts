export enum CATEGORY {
    CHAIR = "chair",
    TABLE = "table",
    SOFA = 'sofa',
    LOCKER = 'locker',
    BED = 'bed',
    LAMP = 'lamp'
}

export default interface commodity {
    id: number;
    title: string;
    imagePath: string;
    desc: string;
    category: CATEGORY;
    price: number;
}