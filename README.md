\# rollovercollection4 – BLOCKS



TYPO3 multicolumn rendering with seven box layouts for the content elements

\*\*textmedia, media, textpic and image\*\*. Useful for menus, galleries and teasers.

Requires \[bootstrap\_package](https://github.com/benjaminkott/bootstrap\_package) (Bootstrap 5).



| | |

|---|---|

| TYPO3 | 13.4 LTS, 14.3 LTS |

| bootstrap\_package | 16.x |

| PHP | 8.2+ |



The extension contains no PHP code and no database tables: it only adds Fluid partials,

TypoScript, page TSconfig and an SCSS theme on top of bootstrap\_package.



\## Layouts



Choose the layout in the content element, tab \*Appearance > Layout\*:



| Layout value | Name | Fields used (per image) |

|---|---|---|

| 2851 | BLOCKS: tergeste | title, description, link, alternative = button label |

| 2852 | BLOCKS: furio | title, description, link (image and overlay are shown only with a link) |

| 2853 | BLOCKS: uccio | title, description, link (image and overlay are shown only with a link) |

| 2854 | BLOCKS: ettore | title, description, link |

| 2855 | BLOCKS: selma | title, description, link, alternative = button label |

| 2856 | BLOCKS: mariucci | title, description, link, alternative = top label |

| 2857 | BLOCKS: nevio | title, link |



The number of columns is the field \*Number of columns\* of the content element.

Content elements with any other layout are rendered by bootstrap\_package as usual.



\## Installation



Composer:



&#x20;   composer require specialistaweb/rollovercollection4



Classic mode: upload the zip in \*Admin Tools > Extensions\*.



Then activate it for the site, in one of these two ways:



\* \*\*Site set (recommended):\*\* \*Site Management > Sites > edit site > Sets\*, add

&#x20; \*\*Rollovercollection 4 - BLOCKS\*\*. It depends on the set "Bootstrap Package: Full Package".

\* \*\*TypoScript record:\*\* add the static template \*\*Rollovercollection 4 - BLOCKS\*\* after the

&#x20; bootstrap\_package TypoScript.



Finally flush all caches.



\## Configuration



With the site set, every option is in \*Site Management > Settings\*, category

\*\*Rollovercollection 4 - BLOCKS\*\*. With a TypoScript record, the same options are constants

(Constant Editor, category \*bootstrap package: rollovercollection4-blocks\*).



General options (`plugin.tx\_rollovercollection4\_rollovereffect4.\*`):



| Option | Default | Meaning |

|---|---|---|

| `settings.titleRawdataOutput` | 0 | 1 = HTML typed in the image title is kept (cleaned by the TYPO3 HTML sanitizer), 0 = plain text |

| `settings.captionRawdataOutput` | 1 | same, for the image description |

| `settings.imageMaxWidth` | 1600 | images wider than this are scaled down before delivery, 0 = original file |

| `view.scssPath` | `EXT:rollovercollection4/Resources/Public/Scss/Theme/` | folder containing `theme.scss` |



Style options: 89 SCSS variables `plugin.bootstrap\_package.settings.scss.rollover4-\*`

(colors, sizes, borders of each layout). They are handed to the SCSS parser of bootstrap\_package,

so `plugin.bootstrap\_package.settings.overrideParserVariables` must be enabled (default).



The label of the MARIUCCI button is `lib.rollovercollection4.label.readMore`.



\## Upgrading from 8.x



Version 9 needs TYPO3 13.4+ and bootstrap\_package 16. Sites on TYPO3 12 or on

bootstrap\_package 15 or older stay on 8.0.x.



Changes that can be visible on an existing site:



\* \*\*Images are limited to 1600 px width\*\* (`imageMaxWidth`). Version 8 delivered the original

&#x20; file. Set the option to 0 to get the old behaviour.

\* \*\*"Raw" title and caption are sanitized.\*\* Formatting tags and links are kept; script tags,

&#x20; event handler attributes and `javascript:` links are removed.

\* \*\*Plain text title and caption are HTML-escaped\*\* (a title like `R\&D` now produces valid HTML).

\* \*\*SELMA:\*\* the description is no longer wrapped in a second `<p>` (invalid HTML that browsers

&#x20; repaired with two empty paragraphs); the space around the text can be slightly smaller.

\* The static template is now called "Rollovercollection 4 - BLOCKS" (it was "BLOCKS") and the

&#x20; unused plugin "rollovereffect4" is no longer registered.

\* Layout values 2858–2860 were reserved but had no markup; they are no longer intercepted.

\* Partials were renamed: `Media/Rendering/title` → `Title`, `Media/Rendering/description` →

&#x20; `Description`. Adjust your own overrides if you have any.

\* The unused constants `view.templateRootPath`, `view.partialRootPath`, `view.layoutRootPath`

&#x20; and `persistence.storagePid` were removed.

\* Default of `$rollover4-brand-primary` is now `$primary` (`$brand-primary` does not exist in

&#x20; Bootstrap 5; the variable is not used by the theme).



\### Inactive CSS rules



These rules of version 8 had an invalid selector, or one that could never match, so browsers

never applied them. They are commented out in the SCSS files (nothing changes on screen) and

can be enabled by fixing the selector:



| File | Selector in 8.x | Problem |

|---|---|---|

| `\_common.scss` | `.gallery-row.rollover4 gallery-item.rollover4` (max-width 1024px and 720px) | missing dot before `gallery-item`: the 3- and 2-column breakpoints were never active |

| `\_tergeste.scss` | `figure.2851.image a > img` | a class name can not start with a digit |

| `\_tergeste.scss` | `.gallery-item…rollover3.rollover4-layout2851` | class `rollover3` is never rendered |

| `\_tergeste.scss` | `rollovercollection4.block1 figcaption.caption p` | missing leading dot |

| `\_selma.scss` | `figure.2855.image a > img` | a class name can not start with a digit |



\### Known side effects of the theme (unchanged)



`\_common.scss` styles some generic class names without a `.rollover4` prefix: `.caption`,

`.fullheight`, `.gallery-item`, `div.vcontainer-ro`, `div.valign-ro`. They also apply to

content that does not use a BLOCKS layout (for example every bootstrap\_package caption gets

`font-style: normal; font-size: 16px`). They were left as they are to not change existing

sites; prefix them with `.rollover4` if this is not wanted.



\## License



GPL-2.0-or-later



