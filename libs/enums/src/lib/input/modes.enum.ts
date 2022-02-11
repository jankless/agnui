/**
 * @description The inputmode content attribute is an enumerated attribute that specifies what kind of input mechanism would be most helpful for users entering content.
 * @documentation https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode
 */
export enum Modes {
  /**
   * @description The user agent should not display a virtual keyboard. This keyword is useful for content that renders its own keyboard control.
   */
  None = 'none',
  /**
   * @description The user agent should display a virtual keyboard capable of text input in the user's locale.
   */
  Text = 'text',
  /**
   * @description The user agent should display a virtual keyboard capable of telephone number input. This should including keys for the digits 0 to 9, the "#" character, and the "*" character. In some locales, this can also include alphabetic mnemonic labels (e.g., in the US, the key labeled "2" is historically also labeled with the letters A, B, and C).
   */
  Tel = 'tel',
  /**
   * @description The user agent should display a virtual keyboard capable of text input in the user's locale, with keys for aiding in the input of URLs, such as that for the "/" and "." characters and for quick input of strings commonly found in domain names such as "www." or ".com".
   */
  Url = 'url',
  /**
   * @description The user agent should display a virtual keyboard capable of text input in the user's locale, with keys for aiding in the input of email addresses, such as that for the "@" character and the "." character.
   */
  Email = 'email',
  /**
   * @description The user agent should display a virtual keyboard capable of numeric input. This keyword is useful for PIN entry.
   */
  Numeric = 'numeric',
  /**
   * @description The user agent should display a virtual keyboard capable of fractional numeric input. Numeric keys and the format separator for the locale should be shown.
   */
  Decimal = 'decimal',
  /**
   * @description The user agent should display a virtual keyboard optimized for search.
   */
  Search = 'search',
}
