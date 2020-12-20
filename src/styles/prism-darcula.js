/**
 * Darcula theme
 *
 * Adapted from a theme based on:
 * IntelliJ Darcula Theme (https://github.com/bulenkov/Darcula)
 *
 * @author Alexandre Paradis <service.paradis@gmail.com>
 * @version 1.0
 */

export const darcula = `
  code[class*="language-"],
  pre[class*="language-"] {
  \tcolor: #a9b7c6;
  \tfont-family: Consolas, Monaco, 'Andale Mono', monospace;
  \tdirection: ltr;
  \ttext-align: left;
  \twhite-space: pre;
  \tword-spacing: normal;
  \tword-break: normal;
  \tline-height: 1.5;

  \t-moz-tab-size: 4;
  \t-o-tab-size: 4;
  \ttab-size: 4;

  \t-webkit-hyphens: none;
  \t-moz-hyphens: none;
  \t-ms-hyphens: none;
  \thyphens: none;
  }

  pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  \tcolor: inherit;
  \tbackground: rgba(33, 66, 131, .85);
  }

  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  code[class*="language-"]::selection, code[class*="language-"] ::selection {
  \tcolor: inherit;
  \tbackground: rgba(33, 66, 131, .85);
  }

  /* Code blocks */
  pre[class*="language-"] {
  \tpadding: 1em;
  \tmargin: .5em 0;
  \toverflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
  \tbackground: #2b2b2b;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
  \tpadding: .1em;
  \tborder-radius: .3em;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
  \tcolor: #808080;
  }

  .token.delimiter,
  .token.boolean,
  .token.keyword,
  .token.selector,
  .token.important,
  .token.atrule {
  \tcolor: #cc7832;
  }

  .token.operator,
  .token.punctuation,
  .token.attr-name {
  \tcolor: #a9b7c6;
  }

  .token.tag,
  .token.tag .punctuation,
  .token.doctype,
  .token.builtin {
  \tcolor: #e8bf6a;
  }

  .token.entity,
  .token.number,
  .token.symbol {
  \tcolor: #6897bb;
  }

  .token.property,
  .token.constant,
  .token.variable {
  \tcolor: #9876aa;
  }

  .token.string,
  .token.char {
  \tcolor: #6a8759;
  }

  .token.attr-value,
  .token.attr-value .punctuation {
  \tcolor: #a5c261;
  }

  .token.attr-value .punctuation:first-child {
  \tcolor: #a9b7c6;
  }

  .token.url {
  \tcolor: #287bde;
  \ttext-decoration: underline;
  }

  .token.function {
  \tcolor: #ffc66d;
  }

  .token.regex {
  \tbackground: #364135;
  }

  .token.bold {
  \tfont-weight: bold;
  }

  .token.italic {
  \tfont-style: italic;
  }

  .token.inserted {
  \tbackground: #294436;
  }

  .token.deleted {
  \tbackground: #484a4a;
  }

  code.language-css .token.property,
  code.language-css .token.property + .token.punctuation {
  \tcolor: #a9b7c6;
  }

  code.language-css .token.id {
  \tcolor: #ffc66d;
  }

  code.language-css .token.selector > .token.class,
  code.language-css .token.selector > .token.attribute,
  code.language-css .token.selector > .token.pseudo-class,
  code.language-css .token.selector > .token.pseudo-element {
  \tcolor: #ffc66d;
  }
`
