import { fr, Faker } from '@faker-js/faker';

export const fake = new Faker({
  locale: [fr],
});

const productCount = 5;

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
        mediaUrl: "/nike.jpg",
        mediaType: fake.number.int({ min: 1, max: 5 })
      },
      categorization:
      {
        categoryId: 2490928,
        categoryName: "Garçon (2-14 ans)",
        gammeId: 2490929,
        gammeName: "T-shirts & chemises",
        nmUniverId: 7,
        nmFamilyId: 46,
        nmSubFamilyId: 104,
        nmUniversLabel: "PRÊT-À-PORTER",
        nmFamilyLabel: "Tops, t-shirts et chemises",
        nmSubFamilyLabel: "T-shirts"
      },
      productColor:
      {
        colorId: 39,
        colorName: "black"
      },

      productDescription: fake.commerce.productDescription(),
      productEAN: ["4237935465826", "4237935465827", "4237935465828"],
      productMedia:
        [
          {
            mediaType: 99,
            mediaUrl: "https://media-prod-eu-1.mirakl.net/SOURCE/ab88dcf3b7a7413687edbb1d32c8eb5f"
          },
          {
            mediaType: 50,
            mediaUrl: "https://media-prod-eu-1.mirakl.net/SOURCE/ab88dcf3b7a7413687edbb1d32c8eb5f"
          },
          {
            mediaType: 99,
            mediaUrl: "https://media-prod-eu-1.mirakl.net/SOURCE/ab88dcf3b7a7413687edbb1d32c8eb5f"
          },
          {
            mediaType: 99,
            mediaUrl: "https://media-prod-eu-1.mirakl.net/SOURCE/ab88dcf3b7a7413687edbb1d32c8eb5f"
          },
          {
            mediaType: 70,
            mediaUrl: "https://media-prod-eu-1.mirakl.net/SOURCE/ab88dcf3b7a7413687edbb1d32c8eb5f"
          },
          {
            mediaType: 82, //aide taille
            modelDetail: "<!-PDF->118029guide0342300-Obaibi-Okaidi_-_PAP.pdf"
          }
        ],
      productRecommendedRetailPrice: 99.00,
      productTitle: "MYC Paris - Calendrier  24 bijoux - Miss Noel - Finitions argentée et rosée - Argenté et Cristal ou blanc",
      productVariantGroupCode: "4cef1021-f2a3-46c2-8402-544464f4a9be",
      validation: "true",
      productCarton: 3541,
      productPriceJustification: "Prix public conseillé",
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
console.log(msg);