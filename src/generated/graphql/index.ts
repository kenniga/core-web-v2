export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Map: any;
};

export type AreaSpecialist = {
  __typename?: 'AreaSpecialist';
  agent: User;
  organization: Organization;
};

export type Article = {
  __typename?: 'Article';
  kind: Scalars['String'];
  id: Scalars['Int'];
  url: Scalars['String'];
  cover: ArticleCover;
  title: Scalars['String'];
  snippet?: Maybe<Scalars['String']>;
  time?: Maybe<Time>;
};

export type ArticleCover = {
  __typename?: 'ArticleCover';
  media?: Maybe<ArticleCoverMedia>;
};

export type ArticleCoverMedia = {
  __typename?: 'ArticleCoverMedia';
  type: Scalars['String'];
  url: Scalars['String'];
  urlTemplate: Scalars['String'];
};

export type Basic = {
  __typename?: 'Basic';
  id: Scalars['String'];
  name: Scalars['String'];
  label: Scalars['String'];
};

export type CancelOtpRequest = {
  requestId: Scalars['String'];
};

export type CancelOtpResponse = {
  __typename?: 'CancelOtpResponse';
  isSuccess: Scalars['Boolean'];
  requestId: Scalars['String'];
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  contactType: Scalars['Int'];
  type: ContactType;
  value: Scalars['String'];
};

export enum ContactType {
  Email = 'EMAIL',
  PhoneNumber = 'PHONE_NUMBER',
  Whatsapp = 'WHATSAPP',
  Address = 'ADDRESS',
  Website = 'WEBSITE',
  FacebookUid = 'FACEBOOK_UID',
  GoogleUid = 'GOOGLE_UID',
  FirebaseCloudMessagingToken = 'FIREBASE_CLOUD_MESSAGING_TOKEN',
  ApplePushNotificationToken = 'APPLE_PUSH_NOTIFICATION_TOKEN'
}

export type DeleteFavoriteRequest = {
  originId: Scalars['String'];
};

export type DeleteFavoriteResponse = {
  __typename?: 'DeleteFavoriteResponse';
  statusCode?: Maybe<Scalars['Int']>;
  statusMessage?: Maybe<Scalars['String']>;
  isSuccess?: Maybe<Scalars['Boolean']>;
};

export type EnquireResponse = {
  __typename?: 'EnquireResponse';
  enquiry?: Maybe<Enquiry>;
  isSucceeded?: Maybe<Scalars['Boolean']>;
  statusCode?: Maybe<Scalars['Int']>;
  statusMessage?: Maybe<Scalars['String']>;
};

export type Enquiry = {
  __typename?: 'Enquiry';
  userUuid: Scalars['String'];
  agentUuid: Scalars['String'];
  propertyUuid: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  messages: Scalars['String'];
};

export type EnquiryRequest = {
  userUuid?: Maybe<Scalars['String']>;
  agentUuid?: Maybe<Scalars['String']>;
  propertyUuid?: Maybe<Scalars['String']>;
  agentIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  originId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  pageLabel?: Maybe<Scalars['String']>;
  subscribe?: Maybe<Scalars['Int']>;
};

export enum EnumFooterPage {
  Homepage = 'HOMEPAGE',
  Srp = 'SRP',
  Newlaunch = 'NEWLAUNCH'
}

export enum EnumPriceType {
  Sale = 'SALE',
  Rent = 'RENT'
}

export enum EnumSubChannel {
  All = 'ALL',
  NewLaunch = 'NEW_LAUNCH',
  SubSale = 'SUB_SALE',
  SubRent = 'SUB_RENT'
}

export type FindPropertiesByFiltersRequest = {
  portalIds?: Maybe<Array<Scalars['Int']>>;
  title?: Maybe<Scalars['String']>;
  propertyTypes?: Maybe<Array<Scalars['Int']>>;
  priceTypes?: Maybe<Array<Scalars['Int']>>;
  minPrice: Scalars['Float'];
  maxPrice: Scalars['Float'];
  minBedrooms: Scalars['Int'];
  maxBedrooms: Scalars['Int'];
  minBathrooms: Scalars['Int'];
  maxBathrooms: Scalars['Int'];
  minLandSize: Scalars['Int'];
  maxLandSize: Scalars['Int'];
  minBuildingSize: Scalars['Int'];
  maxBuildingSize: Scalars['Int'];
  propertySort: PropertySearchSort;
  locations?: Maybe<Array<Scalars['String']>>;
  query: Scalars['String'];
  transactedIncluded: Scalars['Boolean'];
  subChannel: EnumSubChannel;
  paginationRequest?: Maybe<PaginationRequest>;
  agents?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  isCombineSearch?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type FindPropertiesByFiltersRequestParsed = {
  __typename?: 'FindPropertiesByFiltersRequestParsed';
  portalIds?: Maybe<Array<Scalars['Int']>>;
  title?: Maybe<Scalars['String']>;
  propertyTypes?: Maybe<Array<Scalars['Int']>>;
  priceTypes?: Maybe<Array<Scalars['Int']>>;
  minPrice: Scalars['Float'];
  maxPrice: Scalars['Float'];
  minBedrooms: Scalars['Int'];
  maxBedrooms: Scalars['Int'];
  minBathrooms: Scalars['Int'];
  maxBathrooms: Scalars['Int'];
  minLandSize: Scalars['Int'];
  maxLandSize: Scalars['Int'];
  minBuildingSize: Scalars['Int'];
  maxBuildingSize: Scalars['Int'];
  propertySort: PropertySearchSort;
  locations?: Maybe<Array<Scalars['String']>>;
  query: Scalars['String'];
  transactedIncluded: Scalars['Boolean'];
  subChannel: EnumSubChannel;
  paginationRequestParsed?: Maybe<PaginationRequestParsed>;
  agents?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  isCombineSearch?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type FindPropertiesByFiltersResponse = {
  __typename?: 'FindPropertiesByFiltersResponse';
  properties?: Maybe<Array<Maybe<Property>>>;
  areaSpecialists?: Maybe<Array<Maybe<AreaSpecialist>>>;
  paginationResponse?: Maybe<PaginationResponse>;
  parsedRequest?: Maybe<FindPropertiesByFiltersRequestParsed>;
};

export type Footer = {
  __typename?: 'Footer';
  title: Scalars['String'];
  footerItems?: Maybe<Array<Maybe<FooterItems>>>;
};

export type FooterItems = {
  __typename?: 'FooterItems';
  subtitle: Scalars['String'];
  url: Scalars['String'];
};

export type FormattedValue = {
  __typename?: 'FormattedValue';
  name: Scalars['String'];
  label: Scalars['String'];
  value: Scalars['String'];
  formattedValue: Scalars['String'];
};

export type GetFavoritePropertiesRequest = {
  portalId: Scalars['Int'];
};

export type GetFavoritePropertiesResponse = {
  __typename?: 'GetFavoritePropertiesResponse';
  properties?: Maybe<Array<Maybe<Property>>>;
};

export type GetFooterRequest = {
  uuids?: Maybe<Array<Scalars['String']>>;
  page?: Maybe<EnumFooterPage>;
  priceType?: Maybe<EnumPriceType>;
  propertyType?: Maybe<Scalars['Int']>;
  portalId?: Maybe<Scalars['Int']>;
};

export type GetFooterResponse = {
  __typename?: 'GetFooterResponse';
  footer: Array<Maybe<Footer>>;
};

export type GetPropertyByOriginIdRequest = {
  id: Scalars['String'];
  portalId: Scalars['Int'];
};

export type GetPropertyByOriginIdResponse = {
  __typename?: 'GetPropertyByOriginIDResponse';
  property: Property;
};

export type GetPropertyRequest = {
  uuid: Scalars['String'];
  portalId?: Maybe<Scalars['Int']>;
};

export type GetPropertyResponse = {
  __typename?: 'GetPropertyResponse';
  property: Property;
};

export type InstanceInfo = {
  __typename?: 'InstanceInfo';
  isRemoved: Scalars['Boolean'];
  status: Scalars['Int'];
};

export type KeyPoint = {
  __typename?: 'KeyPoint';
  title: Scalars['String'];
  description: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  uuid: Scalars['ID'];
  level: Scalars['Int'];
  name: Scalars['String'];
  locationType: Scalars['Int'];
  text: Scalars['String'];
  country?: Maybe<Basic>;
  province?: Maybe<Basic>;
  city?: Maybe<Basic>;
  district?: Maybe<Basic>;
  estate?: Maybe<Basic>;
  street?: Maybe<Basic>;
  building?: Maybe<Basic>;
  postalCode?: Maybe<Basic>;
  village?: Maybe<Basic>;
};

export type LocationPin = {
  __typename?: 'LocationPin';
  hideMarker: Scalars['Boolean'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocationResult = {
  __typename?: 'LocationResult';
  uuid: Scalars['String'];
  level: Scalars['Int'];
  text: Scalars['String'];
  fulltext: Scalars['String'];
  level0Uuid: Scalars['String'];
  level0Name: Scalars['String'];
  level1Uuid: Scalars['String'];
  level1Name: Scalars['String'];
  level2Uuid: Scalars['String'];
  level2Name: Scalars['String'];
  level3Uuid: Scalars['String'];
  level3Name: Scalars['String'];
  level4Uuid: Scalars['String'];
  level4Name: Scalars['String'];
  level5Uuid: Scalars['String'];
  level5Name: Scalars['String'];
  type: Scalars['Int'];
  weight: Scalars['Int'];
  name: Scalars['String'];
};


export type Media = {
  __typename?: 'Media';
  mediaTypeId: Scalars['Int'];
  mediaType: MediaType;
  count: Scalars['Int'];
  mediaInfo?: Maybe<Array<Maybe<MediaInfo>>>;
};

export type MediaInfo = {
  __typename?: 'MediaInfo';
  mediaUrl: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  formatUrl?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  time?: Maybe<Time>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum MediaType {
  Regular = 'REGULAR',
  Cover = 'COVER',
  Background = 'BACKGROUND',
  Siteplan = 'SITEPLAN',
  Facility = 'FACILITY',
  Youtube = 'YOUTUBE',
  Brochure = 'BROCHURE',
  Toc = 'TOC',
  Logo = 'LOGO',
  Vr360 = 'VR360'
}

export type Mutation = {
  __typename?: 'Mutation';
  nndAruok: Scalars['String'];
  deleteFavorite?: Maybe<DeleteFavoriteResponse>;
  enquire?: Maybe<EnquireResponse>;
  sendNps?: Maybe<SendNpsResponse>;
  requestOtp?: Maybe<RequestOtpResponse>;
  verifyOtp?: Maybe<VerifyOtpResponse>;
  cancelOtp?: Maybe<CancelOtpResponse>;
  saveFavorite?: Maybe<SaveFavoriteResponse>;
};


export type MutationNndAruokArgs = {
  input: Scalars['String'];
};


export type MutationDeleteFavoriteArgs = {
  request?: Maybe<DeleteFavoriteRequest>;
};


export type MutationEnquireArgs = {
  request?: Maybe<EnquiryRequest>;
};


export type MutationSendNpsArgs = {
  request?: Maybe<SendNpsRequest>;
};


export type MutationRequestOtpArgs = {
  request?: Maybe<RequestOtpRequest>;
};


export type MutationVerifyOtpArgs = {
  request?: Maybe<VerifyOtpRequest>;
};


export type MutationCancelOtpArgs = {
  request?: Maybe<CancelOtpRequest>;
};


export type MutationSaveFavoriteArgs = {
  request?: Maybe<SaveFavoriteRequest>;
};

export type Organization = {
  __typename?: 'Organization';
  uuid: Scalars['String'];
  name: Scalars['String'];
  organizationType: Scalars['Int'];
  description: Scalars['String'];
  originId: Scalars['String'];
  slug: Scalars['String'];
  status: Scalars['Int'];
  portalId: Scalars['Int'];
  medias?: Maybe<Array<Maybe<Media>>>;
  instanceInfo?: Maybe<InstanceInfo>;
  time?: Maybe<Time>;
  contacts?: Maybe<Array<Maybe<ContactInfo>>>;
  url?: Maybe<Scalars['String']>;
};

export type PaginationRequest = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  sort?: Maybe<Scalars['Map']>;
};

export type PaginationRequestParsed = {
  __typename?: 'PaginationRequestParsed';
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  sort?: Maybe<Scalars['Map']>;
};

export type PaginationResponse = {
  __typename?: 'PaginationResponse';
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalCount: Scalars['Int'];
  pageCount: Scalars['Int'];
};

export type PointOfInterest = {
  __typename?: 'PointOfInterest';
  name: Scalars['String'];
  distance: Scalars['String'];
  poiCategoryName: Scalars['String'];
};

export type Price = {
  __typename?: 'Price';
  minValue?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  currencyType: Scalars['Int'];
  display: Scalars['String'];
  offer: Scalars['Float'];
  unitType: Scalars['Int'];
  subDisplay?: Maybe<Scalars['String']>;
};

export type PrimaryProject = {
  __typename?: 'PrimaryProject';
  uniqueFeatures?: Maybe<Array<Maybe<UniqueFeature>>>;
  subUnits?: Maybe<Array<Maybe<SubUnit>>>;
  promotion?: Maybe<Scalars['String']>;
  pointsOfInterest?: Maybe<Array<Maybe<PointOfInterest>>>;
  articles?: Maybe<Array<Maybe<Article>>>;
  keyPoints?: Maybe<Array<Maybe<KeyPoint>>>;
  projectPropertyTypes?: Maybe<Array<Maybe<FormattedValue>>>;
};

export type Property = {
  __typename?: 'Property';
  uuid: Scalars['String'];
  attributes?: Maybe<PropertyAttributes>;
  agent?: Maybe<User>;
  description: Scalars['String'];
  additionalAddress: Scalars['String'];
  instanceInfo?: Maybe<InstanceInfo>;
  location: Location;
  locationPin?: Maybe<LocationPin>;
  originId?: Maybe<FormattedValue>;
  portalId: Scalars['Int'];
  propertyType: FormattedValue;
  priceType: FormattedValue;
  price: Price;
  installment?: Maybe<FormattedValue>;
  rentType: Scalars['Int'];
  subscriptionTypeId: Scalars['Int'];
  subscriptionTierId: Scalars['Int'];
  subtitle: Scalars['String'];
  slug: Scalars['String'];
  time: Time;
  title: Scalars['String'];
  medias?: Maybe<Array<Maybe<Media>>>;
  primaryProject?: Maybe<PrimaryProject>;
  specialFlag?: Maybe<SpecialFlag>;
  url?: Maybe<Scalars['String']>;
};

export type PropertyAttributes = {
  __typename?: 'PropertyAttributes';
  bedrooms?: Maybe<FormattedValue>;
  bathrooms?: Maybe<FormattedValue>;
  landSize?: Maybe<FormattedValue>;
  buildingSize?: Maybe<FormattedValue>;
  garages?: Maybe<FormattedValue>;
  carports?: Maybe<FormattedValue>;
  electricity?: Maybe<FormattedValue>;
  floors?: Maybe<FormattedValue>;
  certification?: Maybe<FormattedValue>;
  conditions?: Maybe<FormattedValue>;
  facilities?: Maybe<FormattedValue>;
  furnishing?: Maybe<FormattedValue>;
  buildingYear?: Maybe<FormattedValue>;
  maidBedrooms?: Maybe<FormattedValue>;
  maidBathrooms?: Maybe<FormattedValue>;
  phoneLines?: Maybe<FormattedValue>;
  sizeUnit?: Maybe<FormattedValue>;
  storey?: Maybe<FormattedValue>;
  views?: Maybe<FormattedValue>;
  buildingAge?: Maybe<FormattedValue>;
  buildingName?: Maybe<FormattedValue>;
  buildingOrientation?: Maybe<FormattedValue>;
  maintenanceFee?: Maybe<FormattedValue>;
  totalUnits?: Maybe<FormattedValue>;
  bathroomsMax?: Maybe<FormattedValue>;
  bathroomsMin?: Maybe<FormattedValue>;
  bedroomsMax?: Maybe<FormattedValue>;
  bedroomsMin?: Maybe<FormattedValue>;
  buildingSizeMax?: Maybe<FormattedValue>;
  buildingSizeMin?: Maybe<FormattedValue>;
  completionDate?: Maybe<FormattedValue>;
  landSizeMax?: Maybe<FormattedValue>;
  landSizeMin?: Maybe<FormattedValue>;
  airConDesc?: Maybe<FormattedValue>;
  amenity?: Maybe<FormattedValue>;
  appoint?: Maybe<FormattedValue>;
  askingPrice?: Maybe<FormattedValue>;
  askingPSF?: Maybe<FormattedValue>;
  attachbath?: Maybe<FormattedValue>;
  avail?: Maybe<FormattedValue>;
  block?: Maybe<FormattedValue>;
  carParkType?: Maybe<FormattedValue>;
  code?: Maybe<FormattedValue>;
  country?: Maybe<FormattedValue>;
  districtCode?: Maybe<FormattedValue>;
  districtName?: Maybe<FormattedValue>;
  estate?: Maybe<FormattedValue>;
  expire?: Maybe<FormattedValue>;
  family?: Maybe<FormattedValue>;
  fixtures?: Maybe<FormattedValue>;
  fixtures2?: Maybe<FormattedValue>;
  guests?: Maybe<FormattedValue>;
  isPremium?: Maybe<FormattedValue>;
  isRent?: Maybe<FormattedValue>;
  isSale?: Maybe<FormattedValue>;
  landSizePSF?: Maybe<FormattedValue>;
  lang?: Maybe<FormattedValue>;
  layDesc?: Maybe<FormattedValue>;
  level?: Maybe<FormattedValue>;
  listingPhoto?: Maybe<FormattedValue>;
  maintain?: Maybe<FormattedValue>;
  panolehURL?: Maybe<FormattedValue>;
  phoneOff?: Maybe<FormattedValue>;
  postalCode?: Maybe<FormattedValue>;
  postedDate?: Maybe<FormattedValue>;
  propertyGroupTypeCode?: Maybe<FormattedValue>;
  propertyGroupTypeDesc?: Maybe<FormattedValue>;
  propertyTypeCode?: Maybe<FormattedValue>;
  propertyTypeDesc?: Maybe<FormattedValue>;
  remarks?: Maybe<FormattedValue>;
  rentalPrice?: Maybe<FormattedValue>;
  rentalPSF?: Maybe<FormattedValue>;
  sizeMeasureCode?: Maybe<FormattedValue>;
  source?: Maybe<FormattedValue>;
  status?: Maybe<FormattedValue>;
  street?: Maybe<FormattedValue>;
  temporaryOccupationPermit?: Maybe<FormattedValue>;
  tenureDesc?: Maybe<FormattedValue>;
  tenureID?: Maybe<FormattedValue>;
  unit?: Maybe<FormattedValue>;
  utilities?: Maybe<FormattedValue>;
  youtubeID?: Maybe<FormattedValue>;
};

export enum PropertySearchSort {
  Default = 'DEFAULT',
  Rank = 'RANK',
  Newest = 'NEWEST',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC'
}

export type Query = {
  __typename?: 'Query';
  nndAruok: Scalars['String'];
  GetFooter?: Maybe<GetFooterResponse>;
  GetProperty?: Maybe<GetPropertyResponse>;
  GetPropertyByOriginID?: Maybe<GetPropertyByOriginIdResponse>;
  FindPropertiesByFilters?: Maybe<FindPropertiesByFiltersResponse>;
  GetFavoriteProperties?: Maybe<GetFavoritePropertiesResponse>;
  GetSearchSuggestionByLocationUUIDs?: Maybe<SearchSuggestionResponse>;
  GetSearchSuggestionByQuery?: Maybe<SearchSuggestionByQueryResponse>;
  GetSearchSuggestionLocationByURL?: Maybe<SearchSuggestionByQueryResponse>;
  GetSearchSuggestionLocationByUUIDs?: Maybe<SearchSuggestionByQueryResponse>;
  GetSearchSuggestionDeveloperByOriginID?: Maybe<SearchSuggestionByQueryResponse>;
  GetVersion?: Maybe<VersionResponse>;
};


export type QueryNndAruokArgs = {
  input: Scalars['String'];
  limit: Scalars['Int'];
};


export type QueryGetFooterArgs = {
  request?: Maybe<GetFooterRequest>;
};


export type QueryGetPropertyArgs = {
  request?: Maybe<GetPropertyRequest>;
};


export type QueryGetPropertyByOriginIdArgs = {
  request?: Maybe<GetPropertyByOriginIdRequest>;
};


export type QueryFindPropertiesByFiltersArgs = {
  request?: Maybe<FindPropertiesByFiltersRequest>;
};


export type QueryGetFavoritePropertiesArgs = {
  request?: Maybe<GetFavoritePropertiesRequest>;
};


export type QueryGetSearchSuggestionByLocationUuiDsArgs = {
  request?: Maybe<SearchSuggestionLocationRequest>;
};


export type QueryGetSearchSuggestionByQueryArgs = {
  request?: Maybe<SearchSuggestionQueryRequest>;
};


export type QueryGetSearchSuggestionLocationByUrlArgs = {
  request?: Maybe<SearchSuggestionUrlRequest>;
};


export type QueryGetSearchSuggestionLocationByUuiDsArgs = {
  request?: Maybe<SearchSuggestionLocationRequest>;
};


export type QueryGetSearchSuggestionDeveloperByOriginIdArgs = {
  request?: Maybe<SearchSuggestionOriginIdRequest>;
};


export type QueryGetVersionArgs = {
  request?: Maybe<VersionRequest>;
};

export type RequestOtpRequest = {
  phoneNumber: Scalars['String'];
  portalId: Scalars['Int'];
  cancelledRequestId?: Maybe<Scalars['String']>;
};

export type RequestOtpResponse = {
  __typename?: 'RequestOtpResponse';
  requestId: Scalars['String'];
  pinExpiry: Scalars['Int'];
  nextEventWait: Scalars['Int'];
};

export type SaveFavoriteRequest = {
  originId: Scalars['String'];
};

export type SaveFavoriteResponse = {
  __typename?: 'SaveFavoriteResponse';
  statusCode?: Maybe<Scalars['Int']>;
  statusMessage?: Maybe<Scalars['String']>;
  isSuccess?: Maybe<Scalars['Boolean']>;
};

export type SearchSuggestionByQueryResponse = {
  __typename?: 'SearchSuggestionByQueryResponse';
  suggestionResult?: Maybe<Array<Maybe<SuggestionResult>>>;
};

export type SearchSuggestionLocationRequest = {
  uuids?: Maybe<Array<Scalars['String']>>;
  portalId?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['String']>;
};

export type SearchSuggestionOriginIdRequest = {
  originID: Scalars['String'];
  portalId?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['String']>;
};

export type SearchSuggestionQueryRequest = {
  query: Scalars['String'];
  subChannel?: Maybe<EnumSubChannel>;
  countryId?: Maybe<Scalars['String']>;
  portalId?: Maybe<Scalars['Int']>;
};

export type SearchSuggestionResponse = {
  __typename?: 'SearchSuggestionResponse';
  locationResult?: Maybe<Array<Maybe<LocationResult>>>;
};

export type SearchSuggestionUrlRequest = {
  urls?: Maybe<Array<Scalars['String']>>;
  portalId?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['String']>;
};

export type SendNpsRequest = {
  npsCategoryId: Scalars['String'];
  score: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
};

export type SendNpsResponse = {
  __typename?: 'SendNpsResponse';
  isSuccess: Scalars['Boolean'];
  npsCategoryId: Scalars['String'];
  npsId: Scalars['String'];
};

export type SpecialFlag = {
  __typename?: 'SpecialFlag';
  isVerified: Scalars['Boolean'];
  isNpl: Scalars['Boolean'];
  isPrimaryProject: Scalars['Boolean'];
  isFavorite: Scalars['Boolean'];
};

export type SubUnit = {
  __typename?: 'SubUnit';
  name: Scalars['String'];
  properties?: Maybe<Array<Maybe<Property>>>;
};

export type SubscriptionProperty = {
  __typename?: 'SubscriptionProperty';
  uuid: Scalars['String'];
  parentSubscription?: Maybe<Scalars['String']>;
  subscriptionTierId: Scalars['Int'];
  status: Scalars['Int'];
  propertyUuid: Scalars['String'];
  usageCounter?: Maybe<Scalars['Int']>;
  usageQuota?: Maybe<Scalars['Int']>;
  time?: Maybe<Time>;
};

export enum SuggestionKind {
  Location = 'LOCATION',
  Property = 'PROPERTY',
  Developer = 'DEVELOPER'
}

export type SuggestionResult = {
  __typename?: 'SuggestionResult';
  uuid: Scalars['String'];
  kind: SuggestionKind;
  label: Scalars['String'];
  originId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  subTitle: Scalars['String'];
  weight?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  province?: Maybe<Basic>;
  city?: Maybe<Basic>;
  district?: Maybe<Basic>;
  propertyType?: Maybe<Scalars['Int']>;
  portalId: Scalars['Int'];
  locationType?: Maybe<Scalars['Int']>;
  estate?: Maybe<Basic>;
  street?: Maybe<Basic>;
  building?: Maybe<Basic>;
  postalCode?: Maybe<Basic>;
  village?: Maybe<Basic>;
};

export type Time = {
  __typename?: 'Time';
  created: Scalars['Int'];
  posted: Scalars['Int'];
  published: Scalars['Int'];
  removed: Scalars['Int'];
  updated: Scalars['Int'];
};

export type UniqueFeature = {
  __typename?: 'UniqueFeature';
  featureTitle: Scalars['String'];
  featureDescription: Scalars['String'];
  featureImageUrl: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  uuid: Scalars['String'];
  name: Scalars['String'];
  alias: Scalars['String'];
  userType: Scalars['Int'];
  portalId: Scalars['Int'];
  originId: Scalars['String'];
  username: Scalars['String'];
  instanceInfo?: Maybe<InstanceInfo>;
  medias?: Maybe<Array<Maybe<Media>>>;
  time?: Maybe<Time>;
  contacts?: Maybe<Array<Maybe<ContactInfo>>>;
  organization?: Maybe<Organization>;
  url?: Maybe<Scalars['String']>;
  totalListing?: Maybe<Scalars['Int']>;
};

export type VerifyOtpRequest = {
  requestId: Scalars['String'];
  code: Scalars['String'];
};

export type VerifyOtpResponse = {
  __typename?: 'VerifyOtpResponse';
  isSuccess: Scalars['Boolean'];
  requestId: Scalars['String'];
};

export type VersionRequest = {
  platform: Scalars['String'];
  portalId: Scalars['Int'];
};

export type VersionResponse = {
  __typename?: 'VersionResponse';
  platform: Scalars['String'];
  portalId: Scalars['Int'];
  version: Scalars['String'];
  isForceUpdate: Scalars['Boolean'];
};
