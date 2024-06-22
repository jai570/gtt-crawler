import { Config } from "./src/config";

// export const defaultConfig: Config = {
//   url: "https://www.builder.io/c/docs/developers",
//   match: "https://www.builder.io/c/docs/**",
//   maxPagesToCrawl: 50,
//   outputFileName: "output.json",
//   maxTokens: 2000000,
// };
// export const defaultConfig: Config = {
//   // Start the crawl at this URL
//   url: "https://www.linkedin.com/in/jaikishansharma/",
//   // Only crawl URLs matching this pattern
//   match: "https://www.linkedin.com/in/*",
//   // Only grab the text from within this selector
//   selector: `.scaffold-layout__main`,
//   // Don't crawl more than 1000 pages
//   maxPagesToCrawl: 1000,
//   // The file name that our results will output to
//   outputFileName: "output.json",
// };

export const defaultConfig: Config = {
  // Start the crawl at this URL
  url: "https://flipshope.com/home",
  // Only crawl URLs matching this pattern
  match: "https://flipshope.com/**",
  // Only grab the text from within this selector
  selector: `.desktop_view`,
  // Don't crawl more than 1000 pages
  maxPagesToCrawl: 20,
  // The file name that our results will output to
  outputFileName: "output.json",
};
