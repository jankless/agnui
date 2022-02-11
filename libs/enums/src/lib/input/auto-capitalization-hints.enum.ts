/**
 * @description The autocapitalize attribute is an enumerated attribute whose states are the possible autocapitalization hints. The autocapitalization hint specified by the attribute's state combines with other considerations to form the used autocapitalization hint, which informs the behavior of the user agent.
 * @documentation https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization
 */
export enum AutoCapitalizationHints {
  /**
   * @description The user agent and input method should use make their own determination of whether or not to enable autocapitalization.
   */
  Default = 'default',
  /**
   * @description No autocapitalization should be applied (all letters should default to lowercase).
   */
  None = 'none',
  /**
   * @description The first letter of each sentence should default to a capital letter; all other letters should default to lowercase.
   */
  Sentences = 'sentences',
  /**
   * @description The first letter of each word should default to a capital letter; all other letters should default to lowercase.
   */
  Words = 'words',
  /**
   * @description All letters should default to uppercase.
   */
  Characters = 'characters',
}
