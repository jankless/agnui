/**
 * @description How an <input> works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is text.
 * @documentation https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
 */
export enum Types {
  /**
   * @description A check box allowing single values to be selected/deselected.
   */
  Checkbox = 'checkbox',

  /**
   * @description A control for specifying a color; opening a color picker when active in supporting browsers.
   */
  Color = 'color',

  /**
   * @description A control for entering a date (year, month, and day, with no time). Opens a date picker or numeric wheels for year, month, day when active in supporting browsers.
   */
  Date = 'date',

  /**
   * @description A control for entering a date and time, with no time zone. Opens a date picker or numeric wheels for date- and time-components when active in supporting browsers.
   */
  DateTimeLocal = 'datetime-local',

  /**
   * @description A field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
   */
  Email = 'email',

  /**
   * @description A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
   */
  File = 'file',

  /**
   * @description A control that is not displayed but whose value is submitted to the server. There is an example in the next column, but it's hidden!
   */
  Hidden = 'hidden',

  /**
   * @description A graphical submit button. Displays an image defined by the src attribute. The alt attribute displays if the image src is missing.
   */
  Image = 'image',

  /**
   * @description A control for entering a month and year, with no time zone.
   */
  Month = 'month',

  /**
   * @description A control for entering a number. Displays a spinner and adds default validation when supported. Displays a numeric keypad in some devices with dynamic keypads.
   */
  Number = 'number',

  /**
   * @description A single-line text field whose value is obscured. Will alert user if site is not secure.
   */
  Password = 'password',

  /**
   * @description A radio button, allowing a single value to be selected out of multiple choices with the same name value.
   */
  Radio = 'radio',

  /**
   * @description A control for entering a number whose exact value is not important. Displays as a range widget defaulting to the middle value. Used in conjunction min and max to define the range of acceptable values.
   */
  Range = 'range',

  /**
   * @description A button that resets the contents of the form to default values. Not recommended.
   */
  Reset = 'reset',

  /**
   * @description A single-line text field for entering search strings. Line-breaks are automatically removed from the input value. May include a delete icon in supporting browsers that can be used to clear the field. Displays a search icon instead of enter key on some devices with dynamic keypads.
   */
  Search = 'search',

  /**
   * @description A control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.
   */
  Tel = 'tel',

  /**
   * @description The default value. A single-line text field. Line-breaks are automatically removed from the input value.
   */
  Text = 'text',

  /**
   * @description A control for entering a time value with no time zone.
   */
  Time = 'time',

  /**
   * @description A field for entering a URL. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
   */
  Url = 'url',

  /**
   * @description A control for entering a date consisting of a week-year number and a week number with no time zone.
   */
  Week = 'week',
}
