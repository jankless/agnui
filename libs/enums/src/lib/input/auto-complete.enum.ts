/**
 * @description HTML AutoComplete Types
 * @link https://wiki.whatwg.org/wiki/Autocomplete_Types
 */
export enum AutoComplete {
  Off = 'off',
  None = 'off',
  /**
   * @description full name
   */
  Name = 'name',
  /**
   * @description prefix or title (Mr., Mrs. Dr., etc.)
   */
  HonorificPrefix = 'honorific-prefix',
  /**
   * @description given or first name
   */
  GivenName = 'given-name',
  /**
   * @description additional or middle name
   */
  AdditionalName = 'additional-name',
  /**
   * @description additional or middle name initial
   */
  AdditionalNameInitial = 'additional-name-initial',
  /**
   * @description family name, surname, or last name
   */
  FamilyName = 'family-name',
  /**
   * @description suffix (Jr., II, etc.)
   */
  HonorificSuffix = 'honorific-suffix',
  /**
   * @description nickname
   */
  Nickname = 'nickname',
  /**
   * @description full street address condensed into one line
   */
  StreetAddress = 'street-address',
  /**
   * @description first line of street address
   */
  AddressLine1 = 'address-line1',
  /**
   * @description second line of street address
   */
  AddressLine2 = 'address-line2',
  /**
   * @description third line of street address
   */
  AddressLine3 = 'address-line3',
  /**
   * @description locality or city
   */
  Locality = 'locality',
  /**
   * @description same as locality
   */
  City = 'city',
  /**
   * @description administrative area, state, province, or region
   */
  AdministrativeArea = 'administrative-area',
  /**
   * @description same as administrative-area
   */
  State = 'state',
  /**
   * @description same as administrative-area
   */
  Province = 'province',
  /**
   * @description same as administrative-area
   */
  Region = 'region',
  /**
   * @description postal or ZIP code
   */
  PostalCode = 'postal-code',
  /**
   * @description country name
   */
  CountryName = 'country-name',
  /**
   * @description email address
   */
  Email = 'email',
  /**
   * @description full phone number, including country code
   */
  Tel = 'tel',
  /**
   * @description international country code
   */
  TelCountryCode = 'tel-country-code',
  /**
   * @description national phone number: full number minus country code
   */
  TelNational = 'tel-national',
  /**
   * @description area code
   */
  TelAreaCode = 'tel-area-code',
  /**
   * @description local phone number: full number minus country and area codes
   */
  TelLocal = 'tel-local',
  /**
   * @description phone extension number
   */
  TelExtension = 'tel-extension',
  /**
   * @description full fax number, including country code
   */
  Fax = 'fax',
  /**
   * @description international country code
   */
  FaxCountryCode = 'fax-country-code',
  /**
   * @description national fax number: full number minus country code
   */
  FaxNational = 'fax-national',
  /**
   * @description area code
   */
  FaxAreaCode = 'fax-area-code',
  /**
   * @description local fax number: full number minus country and area codes
   */
  FaxLocal = 'fax-local',
  /**
   * @description fax extension number
   */
  FaxExtension = 'fax-extension',
  /**
   * @description full name, as it appears on credit card
   */
  CcName = 'cc-name',
  /**
   * @description credit card number
   */
  CcNumber = 'cc-number',
  /**
   * @description month of expiration of credit card
   */
  CcExpMonth = 'cc-exp-month',
  /**
   * @description year of expiration of credit card (see note 3 below about formatting)
   */
  CcExpYear = 'cc-exp-year',
  /**
   * @description date of expiration of credit card (see note 4 below about formatting)
   */
  CcExp = 'cc-exp',
  /**
   * @description credit card security code
   */
  CcCsc = 'cc-csc',
  /**
   * @description preferred language
   */
  Language = 'language',
  /**
   * @description birthday (see note 4 below about formatting)
   */
  Bday = 'bday',
  /**
   * @description year of birthday (see note 3 below about formatting)
   */
  BdayYear = 'bday-year',
  /**
   * @description month of birthday
   */
  BdayMonth = 'bday-month',
  /**
   * @description day of birthday
   */
  BdayDay = 'bday-day',
  /**
   * @description company or organization
   */
  Org = 'org',
  /**
   * @description user's position or title within company or organization
   */
  OrganizationTitle = 'organization-title',
  /**
   * @description sex or gender
   */
  Sex = 'sex',
  /**
   * @description gender identity
   */
  GenderIdentity = 'gender-identity',
  /**
   * @description Website URL
   */
  Url = 'url',
  /**
   * @description photo or avatar
   */
  Photo = 'photo',
}
