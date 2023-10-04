import { fr, Faker } from '@faker-js/faker';
import * as fs from 'fs';

export const fake = new Faker({
  locale: [fr],
});

const productCount = 1000;

export class Generator {
  getProduct(): any {
    return {
      _id: fake.string.uuid(),
      productSrpId: fake.number.int(10000),
      productMiraklId: fake.string.uuid(),
      pimId: fake.number.int(10000),
      productSku: fake.number.int(10000),
      productUrls: fake.internet.url(),
      sizeId: fake.number.int(10000),
      standardSizeId: fake.number.int(200),
      modelName: fake.commerce.productName(),
      sizeName: fake.commerce.productAdjective(),
      productOrdinal: fake.number.int({ min: 1, max: 10 }),
      modelOrdinal: fake.number.int({ min: 10, max: 300 }),
      sizeOrdinal: fake.number.int({ min: 10, max: 300 }),

      creationDate: fake.date.recent(),
      updateDate: fake.date.recent(),
      productBrand:
      {
        brandId: fake.commerce.productMaterial,
        mediaUrl: fake.image.url(),
        mediaType: fake.number.int({ min: 1, max: 5 })
      },
      categorization:
      {
        categoryId: 2490928,
        categoryName: fake.commerce.department(),
        gammeId: fake.number.int({ min: 156312, max: 256312 }),
        gammeName: `${fake.commerce.department()} & ${fake.commerce.department()}`,
        nmUniverId: fake.number.int({ min: 1, max: 15 }),
        nmFamilyId: fake.number.int({ min: 1, max: 50 }),
        nmSubFamilyId: fake.number.int({ min: 1, max: 200 }),
        nmUniversLabel: fake.commerce.product(),
        nmFamilyLabel: `${fake.commerce.productAdjective()} et ${fake.commerce.productAdjective()}`,
        nmSubFamilyLabel: fake.commerce.productMaterial()
      },
      productColor:
      {
        colorId: 39,
        colorName: fake.helpers.arrayElement(['black', 'red', 'yellow'])
      },

      productDescription: fake.commerce.productDescription(),
      productEAN: [
        fake.helpers.multiple(() => 
            fake.number.int({ min: 1237935465826, max: 9237935465826 }), 
            { count: fake.number.int({ min: 1, max: 5 }) }
        )
      ],
      productMedia:
        [
          fake.helpers.multiple(() => {
            return {
              mediaType: fake.number.int({ min: 20, max: 99 }),
              mediaUrl: fake.internet.url()
            }
          }, { count: fake.number.int({ min: 1, max: 5 }) })
        ],
      productRecommendedRetailPrice: fake.commerce.price(),
      productTitle: fake.commerce.productDescription(),
      productVariantGroupCode: fake.string.uuid(),
      validation: true,
      productCarton: 3541,
      productPriceJustification: fake.lorem.sentence({ min: 1, max: 3 }),
      sizeHelpUrl: "iframe/aideTaille.aspx?ind=3",
      warranty:
      {
        warranty: null,
        warrantyTypeId: 0,
        warrantyType: null,
        warrantyPictoUrl: "/warranty.jpg",
        warrantyPictoType: 321
      },
      productOrigin: "France",
      originPictoUrl: "/madeinvendee.jpg",
      logistic:
      {
        return: true,
        weight: 0.15,
        isOutsized: false,
        unfolded: 100
      },
      disclaimerId: 56,
      pictosFP:
        [
          {
            pictoFPUrl: "/madeinvendee.jpg",
            pictoFPName: "made only in Vendee",
            pictoFPTypeId: 22
          },
          {
            pictoFPUrl: "/madeinfrance.jpg",
            pictoFPName: "made in France",
            pictoFPTypeId: 22
          },
          {
            pictoFPUrl: "/moveforward.jpg",
            pictoFPName: "allez les verts",
            pictoFPTypeId: 22
          }
        ],
      moveForward: true,
      ecoPartDEEEPrice: 0.50,
      ecoPartDEAPrice: 0.50,
      isCopiePrivee: true,
      reparabilityGrade: null,
      reparabilityPDF: null,
      isRecoverable: false
    }
  }
}

const generator = new Generator();
const collection: any[] = [];
for (let index = 0; index < productCount; index++) {
  collection.push(generator.getProduct());
}
var msg = JSON.stringify(collection);
fs.writeFile("test.json", msg, (err) => {
  if (err) throw err;
 });
console.log(msg);