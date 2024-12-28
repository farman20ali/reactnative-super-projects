declare module '*.png'
declare module '*.mp3'
// index.d.ts
interface Currency {
    name: string;
    value: number;
    flag: string;
    symbol: string;
  }
  /// <reference types="nativewind/types" />


  interface Product {
    id: string;
    name: string;
    imageUrl: string;
    originalPrice: number;
    discountPrice: number;
    offerPercentage: number;
    rating: number;
    ratingCount: number;
    tags: string[]
}