export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: boolean;
  Float: number;
  ID: string;
  Int: number;
  Map: any;
  String: string;
};

export type AreaSpecialist = {
  __typename?: 'AreaSpecialist';
  agent: User;
  organization: Organization;
};

export type Article = {
  __typename?: 'Article';
  cover: ArticleCover;
  id: Scalars['Int'];
  kind: Scalars['String'];
  snippet?: Maybe<Scalars['String']>;
  time?: Maybe<Time>;
  title: Scalars['String'];
  url: Scalars['String'];
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
  label: Scalars['String'];
  name: Scalars['String'];
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
  Address = `ADDRESS`,
  PhoneNumber = `PHONE_NUMBER`,
  Whatsapp = `WHATSAPP`,
  Email = `EMAIL`,
  FirebaseCloudMessagingToken = `FIREBASE_CLOUD_MESSAGING_TOKEN`,
  FacebookUid = `FACEBOOK_UID`,
  GoogleUid = `GOOGLE_UID`,
  Website = `WEBSITE`,
  ApplePushNotificationToken = `APPLE_PUSH_NOTIFICATION_TOKEN`
}

export type DeleteFavoriteRequest = {
  originId: Scalars['String'];
};

export type DeleteFavoriteResponse = {
  __typename?: 'DeleteFavoriteResponse';
  isSuccess?: Maybe<Scalars['Boolean']>;
  statusCode?: Maybe<Scalars['Int']>;
  statusMessage?: Maybe<Scalars['String']>;
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
  agentUuid: Scalars['String'];
  messages: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  propertyUuid: Scalars['String'];
  userUuid: Scalars['String'];
};

export type EnquiryRequest = {
  agentIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  agentUuid?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  originId?: Maybe<Scalars['String']>;
  pageLabel?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  propertyUuid?: Maybe<Scalars['String']>;
  subscribe?: Maybe<Scalars['Int']>;
  userUuid?: Maybe<Scalars['String']>;
};

export enum EnumFooterPage {
  Homepage = `HOMEPAGE`,
  Newlaunch = `NEWLAUNCH`,
  Srp = `SRP`
}

export enum EnumPriceType {
  Rent = `RENT`,
  Sale = `SALE`
}

export enum EnumSubChannel {
  All = `ALL`,
  NewLaunch = `NEW_LAUNCH`,
  SubRent = `SUB_RENT`,
  SubSale = `SUB_SALE`
}

export type FindPropertiesByFiltersRequest = {
  agents?: Maybe<Scalars['String']>;
  isCombineSearch?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  locations?: Maybe<Array<Scalars['String']>>;
  longitude?: Maybe<Scalars['Float']>;
  maxBathrooms: Scalars['Int'];
  maxBedrooms: Scalars['Int'];
  maxBuildingSize: Scalars['Int'];
  maxLandSize: Scalars['Int'];
  maxPrice: Scalars['Float'];
  minBathrooms: Scalars['Int'];
  minBedrooms: Scalars['Int'];
  minBuildingSize: Scalars['Int'];
  minLandSize: Scalars['Int'];
  minPrice: Scalars['Float'];
  paginationRequest?: Maybe<PaginationRequest>;
  portalIds?: Maybe<Array<Scalars['Int']>>;
  priceTypes?: Maybe<Array<Scalars['Int']>>;
  propertySort: PropertySearchSort;
  propertyTypes?: Maybe<Array<Scalars['Int']>>;
  query: Scalars['String'];
  subChannel: EnumSubChannel;
  title?: Maybe<Scalars['String']>;
  transactedIncluded: Scalars['Boolean'];
};

export type FindPropertiesByFiltersRequestParsed = {
  __typename?: 'FindPropertiesByFiltersRequestParsed';
  agents?: Maybe<Scalars['String']>;
  isCombineSearch?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  locations?: Maybe<Array<Scalars['String']>>;
  longitude?: Maybe<Scalars['Float']>;
  maxBathrooms: Scalars['Int'];
  maxBedrooms: Scalars['Int'];
  maxBuildingSize: Scalars['Int'];
  maxLandSize: Scalars['Int'];
  maxPrice: Scalars['Float'];
  minBathrooms: Scalars['Int'];
  minBedrooms: Scalars['Int'];
  minBuildingSize: Scalars['Int'];
  minLandSize: Scalars['Int'];
  minPrice: Scalars['Float'];
  paginationRequestParsed?: Maybe<PaginationRequestParsed>;
  portalIds?: Maybe<Array<Scalars['Int']>>;
  priceTypes?: Maybe<Array<Scalars['Int']>>;
  propertySort: PropertySearchSort;
  propertyTypes?: Maybe<Array<Scalars['Int']>>;
  query: Scalars['String'];
  subChannel: EnumSubChannel;
  title?: Maybe<Scalars['String']>;
  transactedIncluded: Scalars['Boolean'];
};

export type FindPropertiesByFiltersResponse = {
  __typename?: 'FindPropertiesByFiltersResponse';
  areaSpecialists?: Maybe<Array<Maybe<AreaSpecialist>>>;
  paginationResponse?: Maybe<PaginationResponse>;
  parsedRequest?: Maybe<FindPropertiesByFiltersRequestParsed>;
  properties?: Maybe<Array<Maybe<Property>>>;
};

export type Footer = {
  __typename?: 'Footer';
  footerItems?: Maybe<Array<Maybe<FooterItems>>>;
  title: Scalars['String'];
};

export type FooterItems = {
  __typename?: 'FooterItems';
  subtitle: Scalars['String'];
  url: Scalars['String'];
};

export type FormattedValue = {
  __typename?: 'FormattedValue';
  formattedValue: Scalars['String'];
  label: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type GetFavoritePropertiesRequest = {
  portalId: Scalars['Int'];
};

export type GetFavoritePropertiesResponse = {
  __typename?: 'GetFavoritePropertiesResponse';
  properties?: Maybe<Array<Maybe<Property>>>;
};

export type GetFooterRequest = {
  page?: Maybe<EnumFooterPage>;
  portalId?: Maybe<Scalars['Int']>;
  priceType?: Maybe<EnumPriceType>;
  propertyType?: Maybe<Scalars['Int']>;
  uuids?: Maybe<Array<Scalars['String']>>;
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
  portalId?: Maybe<Scalars['Int']>;
  uuid: Scalars['String'];
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
  description: Scalars['String'];
  title: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  building?: Maybe<Basic>;
  city?: Maybe<Basic>;
  country?: Maybe<Basic>;
  district?: Maybe<Basic>;
  estate?: Maybe<Basic>;
  level: Scalars['Int'];
  locationType: Scalars['Int'];
  name: Scalars['String'];
  postalCode?: Maybe<Basic>;
  province?: Maybe<Basic>;
  street?: Maybe<Basic>;
  text: Scalars['String'];
  uuid: Scalars['ID'];
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
  fulltext: Scalars['String'];
  level: Scalars['Int'];
  level0Name: Scalars['String'];
  level0Uuid: Scalars['String'];
  level1Name: Scalars['String'];
  level1Uuid: Scalars['String'];
  level2Name: Scalars['String'];
  level2Uuid: Scalars['String'];
  level3Name: Scalars['String'];
  level3Uuid: Scalars['String'];
  level4Name: Scalars['String'];
  level4Uuid: Scalars['String'];
  level5Name: Scalars['String'];
  level5Uuid: Scalars['String'];
  name: Scalars['String'];
  text: Scalars['String'];
  type: Scalars['Int'];
  uuid: Scalars['String'];
  weight: Scalars['Int'];
};

export type Media = {
  __typename?: 'Media';
  count: Scalars['Int'];
  mediaInfo?: Maybe<Array<Maybe<MediaInfo>>>;
  mediaType: MediaType;
  mediaTypeId: Scalars['Int'];
};

export type MediaInfo = {
  __typename?: 'MediaInfo';
  description?: Maybe<Scalars['String']>;
  formatUrl?: Maybe<Scalars['String']>;
  mediaUrl: Scalars['String'];
  order: Scalars['Int'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  time?: Maybe<Time>;
  title?: Maybe<Scalars['String']>;
};

export enum MediaType {
  Background = `BACKGROUND`,
  Cover = `COVER`,
  Regular = `REGULAR`,
  Facility = `FACILITY`,
  Siteplan = `SITEPLAN`,
  Youtube = `YOUTUBE`,
  Brochure = `BROCHURE`,
  Toc = `TOC`,
  Logo = `LOGO`,
  Vr360 = `VR360`
}

export type Mutation = {
  __typename?: 'Mutation';
  cancelOtp?: Maybe<CancelOtpResponse>;
  deleteFavorite?: Maybe<DeleteFavoriteResponse>;
  enquire?: Maybe<EnquireResponse>;
  nndAruok: Scalars['String'];
  requestOtp?: Maybe<RequestOtpResponse>;
  saveFavorite?: Maybe<SaveFavoriteResponse>;
  sendNps?: Maybe<SendNpsResponse>;
  verifyOtp?: Maybe<VerifyOtpResponse>;
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
  contacts?: Maybe<Array<Maybe<ContactInfo>>>;
  description: Scalars['String'];
  instanceInfo?: Maybe<InstanceInfo>;
  medias?: Maybe<Array<Maybe<Media>>>;
  name: Scalars['String'];
  organizationType: Scalars['Int'];
  originId: Scalars['String'];
  portalId: Scalars['Int'];
  slug: Scalars['String'];
  status: Scalars['Int'];
  time?: Maybe<Time>;
  url?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
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
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type PointOfInterest = {
  __typename?: 'PointOfInterest';
  distance: Scalars['String'];
  name: Scalars['String'];
  poiCategoryName: Scalars['String'];
};

export type Price = {
  __typename?: 'Price';
  currencyType: Scalars['Int'];
  display: Scalars['String'];
  maxValue?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
  offer: Scalars['Float'];
  subDisplay?: Maybe<Scalars['String']>;
  unitType: Scalars['Int'];
};

export type PrimaryProject = {
  __typename?: 'PrimaryProject';
  articles?: Maybe<Array<Maybe<Article>>>;
  keyPoints?: Maybe<Array<Maybe<KeyPoint>>>;
  pointsOfInterest?: Maybe<Array<Maybe<PointOfInterest>>>;
  projectPropertyTypes?: Maybe<Array<Maybe<FormattedValue>>>;
  promotion?: Maybe<Scalars['String']>;
  subUnits?: Maybe<Array<Maybe<SubUnit>>>;
  uniqueFeatures?: Maybe<Array<Maybe<UniqueFeature>>>;
};

export type Property = {
  __typename?: 'Property';
  additionalAddress: Scalars['String'];
  agent?: Maybe<User>;
  attributes?: Maybe<PropertyAttributes>;
  description: Scalars['String'];
  installment?: Maybe<FormattedValue>;
  instanceInfo?: Maybe<InstanceInfo>;
  location: Location;
  locationPin?: Maybe<LocationPin>;
  medias?: Maybe<Array<Maybe<Media>>>;
  originId?: Maybe<FormattedValue>;
  portalId: Scalars['Int'];
  price: Price;
  priceType: FormattedValue;
  primaryProject?: Maybe<PrimaryProject>;
  propertyType: FormattedValue;
  rentType: Scalars['Int'];
  slug: Scalars['String'];
  specialFlag?: Maybe<SpecialFlag>;
  subscriptionTierId: Scalars['Int'];
  subscriptionTypeId: Scalars['Int'];
  subtitle: Scalars['String'];
  time: Time;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type PropertyAttributes = {
  __typename?: 'PropertyAttributes';
  airConDesc?: Maybe<FormattedValue>;
  amenity?: Maybe<FormattedValue>;
  appoint?: Maybe<FormattedValue>;
  askingPSF?: Maybe<FormattedValue>;
  askingPrice?: Maybe<FormattedValue>;
  attachbath?: Maybe<FormattedValue>;
  avail?: Maybe<FormattedValue>;
  bathrooms?: Maybe<FormattedValue>;
  bathroomsMax?: Maybe<FormattedValue>;
  bathroomsMin?: Maybe<FormattedValue>;
  bedrooms?: Maybe<FormattedValue>;
  bedroomsMax?: Maybe<FormattedValue>;
  bedroomsMin?: Maybe<FormattedValue>;
  block?: Maybe<FormattedValue>;
  buildingAge?: Maybe<FormattedValue>;
  buildingName?: Maybe<FormattedValue>;
  buildingOrientation?: Maybe<FormattedValue>;
  buildingSize?: Maybe<FormattedValue>;
  buildingSizeMax?: Maybe<FormattedValue>;
  buildingSizeMin?: Maybe<FormattedValue>;
  buildingYear?: Maybe<FormattedValue>;
  carParkType?: Maybe<FormattedValue>;
  carports?: Maybe<FormattedValue>;
  certification?: Maybe<FormattedValue>;
  code?: Maybe<FormattedValue>;
  completionDate?: Maybe<FormattedValue>;
  conditions?: Maybe<FormattedValue>;
  country?: Maybe<FormattedValue>;
  districtCode?: Maybe<FormattedValue>;
  districtName?: Maybe<FormattedValue>;
  electricity?: Maybe<FormattedValue>;
  estate?: Maybe<FormattedValue>;
  expire?: Maybe<FormattedValue>;
  facilities?: Maybe<FormattedValue>;
  family?: Maybe<FormattedValue>;
  fixtures?: Maybe<FormattedValue>;
  fixtures2?: Maybe<FormattedValue>;
  floors?: Maybe<FormattedValue>;
  furnishing?: Maybe<FormattedValue>;
  garages?: Maybe<FormattedValue>;
  guests?: Maybe<FormattedValue>;
  isPremium?: Maybe<FormattedValue>;
  isRent?: Maybe<FormattedValue>;
  isSale?: Maybe<FormattedValue>;
  landSize?: Maybe<FormattedValue>;
  landSizeMax?: Maybe<FormattedValue>;
  landSizeMin?: Maybe<FormattedValue>;
  landSizePSF?: Maybe<FormattedValue>;
  lang?: Maybe<FormattedValue>;
  layDesc?: Maybe<FormattedValue>;
  level?: Maybe<FormattedValue>;
  listingPhoto?: Maybe<FormattedValue>;
  maidBathrooms?: Maybe<FormattedValue>;
  maidBedrooms?: Maybe<FormattedValue>;
  maintain?: Maybe<FormattedValue>;
  maintenanceFee?: Maybe<FormattedValue>;
  panolehURL?: Maybe<FormattedValue>;
  phoneLines?: Maybe<FormattedValue>;
  phoneOff?: Maybe<FormattedValue>;
  postalCode?: Maybe<FormattedValue>;
  postedDate?: Maybe<FormattedValue>;
  propertyGroupTypeCode?: Maybe<FormattedValue>;
  propertyGroupTypeDesc?: Maybe<FormattedValue>;
  propertyTypeCode?: Maybe<FormattedValue>;
  propertyTypeDesc?: Maybe<FormattedValue>;
  remarks?: Maybe<FormattedValue>;
  rentalPSF?: Maybe<FormattedValue>;
  rentalPrice?: Maybe<FormattedValue>;
  sizeMeasureCode?: Maybe<FormattedValue>;
  sizeUnit?: Maybe<FormattedValue>;
  source?: Maybe<FormattedValue>;
  status?: Maybe<FormattedValue>;
  storey?: Maybe<FormattedValue>;
  street?: Maybe<FormattedValue>;
  temporaryOccupationPermit?: Maybe<FormattedValue>;
  tenureDesc?: Maybe<FormattedValue>;
  tenureID?: Maybe<FormattedValue>;
  totalUnits?: Maybe<FormattedValue>;
  unit?: Maybe<FormattedValue>;
  utilities?: Maybe<FormattedValue>;
  views?: Maybe<FormattedValue>;
  youtubeID?: Maybe<FormattedValue>;
};

export enum PropertySearchSort {
  Default = `DEFAULT`,
  Newest = `NEWEST`,
  Rank = `RANK`,
  PriceAsc = `PRICE_ASC`,
  PriceDesc = `PRICE_DESC`
}

export type Query = {
  FindPropertiesByFilters?: Maybe<FindPropertiesByFiltersResponse>;
  GetFavoriteProperties?: Maybe<GetFavoritePropertiesResponse>;
  GetFooter?: Maybe<GetFooterResponse>;
  GetProperty?: Maybe<GetPropertyResponse>;
  GetPropertyByOriginID?: Maybe<GetPropertyByOriginIdResponse>;
  GetSearchSuggestionByLocationUUIDs?: Maybe<SearchSuggestionResponse>;
  GetSearchSuggestionByQuery?: Maybe<SearchSuggestionByQueryResponse>;
  GetSearchSuggestionDeveloperByOriginID?: Maybe<SearchSuggestionByQueryResponse>;
  GetSearchSuggestionLocationByURL?: Maybe<SearchSuggestionByQueryResponse>;
  GetSearchSuggestionLocationByUUIDs?: Maybe<SearchSuggestionByQueryResponse>;
  GetVersion?: Maybe<VersionResponse>;
  __typename?: 'Query';
  nndAruok: Scalars['String'];
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
  cancelledRequestId?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  portalId: Scalars['Int'];
};

export type RequestOtpResponse = {
  __typename?: 'RequestOtpResponse';
  nextEventWait: Scalars['Int'];
  pinExpiry: Scalars['Int'];
  requestId: Scalars['String'];
};

export type SaveFavoriteRequest = {
  originId: Scalars['String'];
};

export type SaveFavoriteResponse = {
  __typename?: 'SaveFavoriteResponse';
  isSuccess?: Maybe<Scalars['Boolean']>;
  statusCode?: Maybe<Scalars['Int']>;
  statusMessage?: Maybe<Scalars['String']>;
};

export type SearchSuggestionByQueryResponse = {
  __typename?: 'SearchSuggestionByQueryResponse';
  suggestionResult?: Maybe<Array<Maybe<SuggestionResult>>>;
};

export type SearchSuggestionLocationRequest = {
  countryId?: Maybe<Scalars['String']>;
  portalId?: Maybe<Scalars['Int']>;
  uuids?: Maybe<Array<Scalars['String']>>;
};

export type SearchSuggestionOriginIdRequest = {
  countryId?: Maybe<Scalars['String']>;
  originID: Scalars['String'];
  portalId?: Maybe<Scalars['Int']>;
};

export type SearchSuggestionQueryRequest = {
  countryId?: Maybe<Scalars['String']>;
  portalId?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
  subChannel?: Maybe<EnumSubChannel>;
};

export type SearchSuggestionResponse = {
  __typename?: 'SearchSuggestionResponse';
  locationResult?: Maybe<Array<Maybe<LocationResult>>>;
};

export type SearchSuggestionUrlRequest = {
  countryId?: Maybe<Scalars['String']>;
  portalId?: Maybe<Scalars['Int']>;
  urls?: Maybe<Array<Scalars['String']>>;
};

export type SendNpsRequest = {
  comment?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  npsCategoryId: Scalars['String'];
  score: Scalars['Int'];
};

export type SendNpsResponse = {
  __typename?: 'SendNpsResponse';
  isSuccess: Scalars['Boolean'];
  npsCategoryId: Scalars['String'];
  npsId: Scalars['String'];
};

export type SpecialFlag = {
  __typename?: 'SpecialFlag';
  isFavorite: Scalars['Boolean'];
  isNpl: Scalars['Boolean'];
  isPrimaryProject: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
};

export type SubUnit = {
  __typename?: 'SubUnit';
  name: Scalars['String'];
  properties?: Maybe<Array<Maybe<Property>>>;
};

export type SubscriptionProperty = {
  __typename?: 'SubscriptionProperty';
  parentSubscription?: Maybe<Scalars['String']>;
  propertyUuid: Scalars['String'];
  status: Scalars['Int'];
  subscriptionTierId: Scalars['Int'];
  time?: Maybe<Time>;
  usageCounter?: Maybe<Scalars['Int']>;
  usageQuota?: Maybe<Scalars['Int']>;
  uuid: Scalars['String'];
};

export enum SuggestionKind {
  Developer = `DEVELOPER`,
  Location = `LOCATION`,
  Property = `PROPERTY`
}

export type SuggestionResult = {
  __typename?: 'SuggestionResult';
  building?: Maybe<Basic>;
  city?: Maybe<Basic>;
  district?: Maybe<Basic>;
  estate?: Maybe<Basic>;
  kind: SuggestionKind;
  label: Scalars['String'];
  level?: Maybe<Scalars['Int']>;
  locationType?: Maybe<Scalars['Int']>;
  originId?: Maybe<Scalars['String']>;
  portalId: Scalars['Int'];
  postalCode?: Maybe<Basic>;
  propertyType?: Maybe<Scalars['Int']>;
  province?: Maybe<Basic>;
  street?: Maybe<Basic>;
  subTitle: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  village?: Maybe<Basic>;
  weight?: Maybe<Scalars['Int']>;
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
  featureDescription: Scalars['String'];
  featureImageUrl: Scalars['String'];
  featureTitle: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  alias: Scalars['String'];
  contacts?: Maybe<Array<Maybe<ContactInfo>>>;
  instanceInfo?: Maybe<InstanceInfo>;
  medias?: Maybe<Array<Maybe<Media>>>;
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  originId: Scalars['String'];
  portalId: Scalars['Int'];
  time?: Maybe<Time>;
  totalListing?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  userType: Scalars['Int'];
  username: Scalars['String'];
  uuid: Scalars['String'];
};

export type VerifyOtpRequest = {
  code: Scalars['String'];
  requestId: Scalars['String'];
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
  isForceUpdate: Scalars['Boolean'];
  platform: Scalars['String'];
  portalId: Scalars['Int'];
  version: Scalars['String'];
};
