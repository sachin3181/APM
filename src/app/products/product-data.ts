import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        'id': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2018',
        'description': 'Leaf rake with 48-inch wooden handle',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://thumb-p9.xhcdn.com/a/oTFmWvXbyeV92kxiy1HZDQ/000/249/365/029_1000.jpg',
        'category': 'Garden',
        'tags': ['rake', 'leaf', 'yard', 'home']
      },
      {
        'id': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2018',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://thumb-p1.xhcdn.com/a/QuYE4azBUC87zuMOL5NbIQ/000/179/491/251_1000.jpg',
        'category': 'Garden'
      },
      {
        'id': 5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2018',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://thumb-p5.xhcdn.com/a/lcbvC71yJhzrEfjHRIB8gQ/000/117/750/905_1000.jpg',
        'category': 'Toolbox',
        'tags': ['tools', 'hammer', 'construction']
      },
      {
        'id': 8,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2018',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'https://thumb-p7.xhcdn.com/a/Zif_pxPTAis-DJY0a1kfMQ/000/249/364/887_1000.jpg',
        'category': 'Toolbox'
      },
      {
        'id': 10,
        'productName': 'Video Game Controller',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2018',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'https://thumb-p6.xhcdn.com/a/PEE97lr8gefLQlVgHImJzw/000/249/364/696_1000.jpg',
        'category': 'Gaming'
      }
    ];
    return { products };
  }
}
