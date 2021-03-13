export interface SearchResult {
  totalHits: number;
  currentPage: number;
  totalPages: number;
  pageList: number[];
  foodSearchCriteria: FoodSearchCriteria;
  foods: SearchFood[];
  aggregations: Aggregations;
}

export interface FoodSearchCriteria {
  query: string;
  generalSearchInput: string;
  pageNumber: number;
  numberOfResultsPerPage: number;
  pageSize: number;
  requireAllWords: boolean;
}

export enum DataType {
  BRANDED = "Branded",
  SURVEY = "Survey (FNDDS)",
  LEGACY = "SR Legacy",
  FOUNDATION = "Foundation",
}

export interface SearchFood {
  fdcId: number;
  description: string;
  lowercaseDescription: string;
  dataType: DataType;
  gtinUpc: string;
  publishedDate: string;
  brandOwner: string;
  ingredients: string;
  allHighlightFields: string;
  score: number;
  foodNutrients: SearchNutrient[];
}

export interface SearchNutrient {
  nutrientId: number;
  nutrientName: string;
  nutrientNumber: string;
  unitName: string;
  derivationCode: string;
  derivationDescription: string;
  value: number;
}

export interface Aggregations {
  dataType: {
    [dataType in DataType]: number;
  };
  nutrients: {};
}

export interface FDAErrorResponse {
  error: {
    code: string;
    message: string;
  };
}

interface FoodNutrient {
  type: "FoodNutrient";
  nutrient: {
    id: number;
    number: string;
    name: string;
    rank: number;
    unitName: string;
  };
  foodNutrientDerivation: {
    id: number;
    code: string;
    description: string;
  };
  id: number;
  amount: number;
}

interface FoodUpdateLog {
  foodAttributes: any[];
  fdcId: number;
  description: string;
  publicationDate: string;
  dataType: string;
  foodClass: string;
  modifiedDate: string;
  availableDate: string;
  brandOwner: string;
  dataSource: string;
  brandedFoodCategory: string;
  gtinUpc: string;
  householdServingFullText: string;
  ingredients: string;
  marketCountry: string;
  servingSize: number;
  servingSizeUnit: string;
}

export interface FoodResult {
  foodComponents: any[];
  foodAttributes: any[];
  foodPortions: any[];
  fdcId: number;
  description: string;
  publicationDate: string;
  foodNutrients: FoodNutrient[];
  dataType: DataType;
  foodClass: string;
  modifiedDate: string;
  availableDate: string;
  brandOwner: string;
  dataSource: string;
  brandedFoodCategory: string;
  gtinUpc: string;
  householdServingFullText: string;
  ingredients: string;
  marketCountry: string;
  servingSize: number;
  servingSizeUnit: string;
  foodUpdateLog: FoodUpdateLog[];
  labelNutrients: Record<string, { value: number }>;
}
