const integration = "rockerbox";
const name = "rockerbox";

const fs = require("fs");
const path = require("path");
const version = "v0";
const transformer = require(`../../src/${version}/destinations/${integration}/transform`);

// Processor Test Data
const testDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}.json`)
);
const testData = JSON.parse(testDataFile);

// Router Test files
const routerTestDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_router.json`)
);
const routerTestData = JSON.parse(routerTestDataFile);

describe(`${name} Tests`, () => {
  describe("Processor", () => {
    testData.forEach((dataPoint, index) => {
      it(`${index}. ${integration} - ${dataPoint.description}`, () => {
        try {
          const output = transformer.process(dataPoint.input);
          expect(output).toEqual(dataPoint.output);
        } catch (error) {
          expect(error.message).toEqual(dataPoint.output.error);
        }
      });
    });
  });

  describe("Router", () => {
    routerTestData.forEach((dataPoint, index) => {
      it(`${index}. ${integration} - ${dataPoint.description}`, async () => {
        const output = await transformer.processRouterDest(dataPoint.input);
        expect(output).toEqual(dataPoint.output);
      });
    });
  });
});
