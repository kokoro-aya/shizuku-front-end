/**
 * atom-dark theme for `prism.js`
 * Based on Atom's `atom-dark` theme: https://github.com/atom/atom-dark-syntax
 * @author Joe Gibson (@gibsjose)
 */

export const atom_dark = `
  code[class*="language-"],
  pre[class*="language-"] {
  \tcolor: #c5c8c6;
  \ttext-shadow: 0 1px rgba(0, 0, 0, 0.3);
  \tfont-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
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

  /* Code blocks */
  pre[class*="language-"] {
  \tpadding: 1em;
  \tmargin: .5em 0;
  \toverflow: auto;
  \tborder-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
  \tbackground: #1d1f21;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
  \tpadding: .1em;
  \tborder-radius: .3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
  \tcolor: #7C7C7C;
  }

  .token.punctuation {
  \tcolor: #c5c8c6;
  }

  .namespace {
  \topacity: .7;
  }

  .token.property,
  .token.keyword,
  .token.tag {
  \tcolor: #96CBFE;
  }

  .token.class-name {
  \tcolor: #FFFFB6;
  \ttext-decoration: underline;
  }

  .token.boolean,
  .token.constant {
  \tcolor: #99CC99;
  }

  .token.symbol,
  .token.deleted {
  \tcolor: #f92672;
  }

  .token.number {
  \tcolor: #FF73FD;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
  \tcolor: #A8FF60;
  }

  .token.variable {
  \tcolor: #C6C5FE;
  }

  .token.operator {
  \tcolor: #EDEDED;
  }

  .token.entity {
  \tcolor: #FFFFB6;
  \tcursor: help;
  }

  .token.url {
  \tcolor: #96CBFE;
  }

  .language-css .token.string,
  .style .token.string {
  \tcolor: #87C38A;
  }

  .token.atrule,
  .token.attr-value {
  \tcolor: #F9EE98;
  }

  .token.function {
  \tcolor: #DAD085;
  }

  .token.regex {
  \tcolor: #E9C062;
  }

  .token.important {
  \tcolor: #fd971f;
  }

  .token.important,
  .token.bold {
  \tfont-weight: bold;
  }

  .token.italic {
  \tfont-style: italic;
  }
`;
