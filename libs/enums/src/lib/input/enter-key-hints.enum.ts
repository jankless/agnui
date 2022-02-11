/**
 * @description The enterkeyhint content attribute is an enumerated attribute that specifies what action label (or icon) to present for the enter key on virtual keyboards. This allows authors to customize the presentation of the enter key in order to make it more helpful for users.
 * @documentation https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute
 */
export enum EnterKeyHints {
  /**
   * @description The user agent should present a cue for the operation 'enter', typically inserting a new line.
   */
  Enter = 'enter',
  /**
   * @description The user agent should present a cue for the operation 'done', typically meaning there is nothing more to input and the input method editor (IME) will be closed.
   */
  Done = 'done',
  /**
   * @description The user agent should present a cue for the operation 'go', typically meaning to take the user to the target of the text they typed.
   */
  Go = 'go',
  /**
   * @description The user agent should present a cue for the operation 'next', typically taking the user to the next field that will accept text.
   */
  Next = 'next',
  /**
   * @description The user agent should present a cue for the operation 'previous', typically taking the user to the previous field that will accept text.
   */
  Previous = 'previous',
  /**
   * @description The user agent should present a cue for the operation 'search', typically taking the user to the results of searching for the text they have typed.
   */
  Search = 'search',
  /**
   * @description The user agent should present a cue for the operation 'send', typically delivering the text to its target.
   */
  Send = 'send',
}
