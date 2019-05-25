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
        'imageUrl': 'https://www.mypornstarbook.net/pornstars/k/kelly_divine/gallery01/images/09.jpg',
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
        'imageUrl': 'http://brasseriepdx.com/imgs/cf103fc4865e75cebc18f2a1237cf1b4.jpg',
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
        'imageUrl': 'https://megapornpics.com/wp-content/uploads/2018/06/big_booty_brazili-5715.jpg',
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
        'imageUrl': 'https://i1.fuskator.com/large/fcEKypL3MQt/image-1.jpg',
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
        'imageUrl': 'http://www.sosexygirl.com/wp-content/uploads/2012/12/Big-Ass-Young-Brazilian-Anal-Sex-3.jpg',
        'category': 'Gaming'
      }
    ];
    return { products };
  }
}
