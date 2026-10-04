# Markdown Guide

Markdown is a lightweight markup language used to format text in a simple and readable way.

It allows you to create headings, lists, links, images, tables, code blocks, quotes, and other elements using plain text syntax.

---

## Basic Markdown Formatting

### Headings

Markdown supports six levels of headings.

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

Result:

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

### Emphasis

You can make text italic or bold.

#### Italic

```markdown
*This text is italic.*

_This text is also italic._
```

Result:

*This text is italic.*

*This text is also italic.*

#### Bold

```markdown
**This text is bold.**

__This text is also bold.__
```

Result:

**This text is bold.**

**This text is also bold.**

#### Bold and italic

You can combine both styles.

```markdown
_This text contains **bold** text._
```

Result:

*This text contains **bold** text.*

---

## Lists

### Unordered Lists

Use `*`, `-`, or `+` to create an unordered list.

```markdown
* Milk
* Bread
    * Wholegrain
* Butter
```

Result:

* Milk
* Bread

  * Wholegrain
* Butter

You can also use `-`:

```markdown
- First item
- Second item
- Third item
```

Result:

* First item
* Second item
* Third item

---

### Ordered Lists

Use numbers followed by a period.

```markdown
1. First step
2. Second step
3. Third step
```

Result:

1. First step
2. Second step
3. Third step

Ordered lists can also contain nested lists:

```markdown
1. Prepare the ingredients
    1. Wash the vegetables
    2. Cut the vegetables
2. Cook the meal
3. Serve
```

Result:

1. Prepare the ingredients

   1. Wash the vegetables
   2. Cut the vegetables
2. Cook the meal
3. Serve

---

## Images

Images use the following syntax:

```markdown
![Alternative text](image-url)
```

For example:

```markdown
![React logo](https://example.com/react-logo.png)
```

The text inside the square brackets is called **alternative text** (`alt text`).

It describes the image when the image cannot be displayed and can also be used by screen readers.

### Image with a title

You can optionally add a title:

```markdown
![React logo](https://example.com/react-logo.png "React")
```

---

## Links

Links use square brackets for the visible text and parentheses for the URL.

```markdown
[Visit the website](https://example.com)
```

Result:

[Visit the website](https://example.com)

The general syntax is:

```markdown
[link text](URL)
```

---

## Blockquotes

Use `>` to create a blockquote.

```markdown
> This is a blockquote.
```

Result:

> This is a blockquote.

Blockquotes can contain multiple paragraphs:

```markdown
> This is the first paragraph.
>
> This is the second paragraph.
```

You can also create nested blockquotes:

```markdown
> Main quote
>> Nested quote
```

---

## Horizontal Rules

Use three or more hyphens to create a horizontal line.

```markdown
---
```

Result:

---

You can also use asterisks:

```markdown
***
```

---

## Code

Markdown supports both inline code and code blocks.

### Inline Code

Use single backticks:

```markdown
Use the `useState()` hook to manage state.
```

Result:

Use the `useState()` hook to manage state.

### Code Blocks

Use three backticks to create a code block.

````markdown
```
const message = "Hello World!";
console.log(message);
```
````

Result:

```text
const message = "Hello World!";
console.log(message);
```

---

## Syntax Highlighting

You can specify a programming language after the opening backticks.

For example:

````markdown
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```
````

Result:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

You can use different language identifiers:

````markdown
```javascript
const name = "Nikita";
```

```typescript
const name: string = "Nikita";
```

```css
.container {
    display: flex;
}
```

```html
<h1>Hello World</h1>
```
````

This is especially useful in documentation because it makes source code easier to read.

---

## Reference Links

Markdown also supports reference-style links.

Instead of placing the URL directly inside the link, you can define it separately.

```markdown
The [React documentation][react] contains useful information.

[react]: https://example.com/react
```

Result:

The [React documentation][react] contains useful information.

[react]: https://example.com/react

This can make Markdown easier to read when a document contains many links.

---

## Escaping Characters

Some characters have special meaning in Markdown.

If you want to display one of these characters as normal text, you can escape it with a backslash.

For example:

```markdown
\*This is not italic\*
```

Result:

*This is not italic*

Common characters that can be escaped include:

```text
\*
\_
\#
\+
\-
\.
\!
\[
\]
\(
\)
```

---

## HTML

Markdown can sometimes contain raw HTML.

For example:

```html
<button>Save</button>
```

However, support for raw HTML depends on the Markdown parser and the application rendering the Markdown.

For example, when using `react-markdown`, raw HTML is not automatically interpreted as HTML elements without additional configuration.

---

# Advanced Markdown

Some Markdown features are extensions rather than part of the original basic Markdown syntax.

Support for these features depends on the Markdown implementation you are using.

---

## Strikethrough

Strikethrough is commonly supported by GitHub Flavored Markdown and other Markdown implementations.

Use two tildes:

```markdown
~~This text is deleted.~~
```

Result:

~~This text is deleted.~~

---

## Automatic Links

Some Markdown implementations automatically convert URLs into clickable links.

For example:

```markdown
https://example.com
```

Result:

https://example.com

You can also explicitly create a link:

```markdown
[Example website](https://example.com)
```

---

## Footnotes

Footnotes allow you to add additional information without interrupting the main text.

Example:

```markdown
Markdown is easy to learn.[^1]

[^1]: This is additional information about Markdown.
```

Result:

Markdown is easy to learn.[^1]

[^1]: This is additional information about Markdown.

Footnote support depends on the Markdown parser being used.

---

# GitHub Flavored Markdown

GitHub Flavored Markdown (GFM) extends standard Markdown with additional features such as tables, task lists, and other GitHub-specific behavior.

These features are useful when writing documentation, README files, issues, and pull requests.

---

## Tables

Tables use pipes `|` to separate columns and hyphens `-` to separate the header from the table body.

```markdown
| Name | Age | Role |
|------|-----|------|
| Alex | 25  | Developer |
| John | 30  | Designer |
| Anna | 28  | Tester |
```

Result:

| Name | Age | Role      |
| ---- | --- | --------- |
| Alex | 25  | Developer |
| John | 30  | Designer  |
| Anna | 28  | Tester    |

### Text Alignment

You can control column alignment using colons.

```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| Text | Text   | Text  |
| Text | Text   | Text  |
```

Result:

| Left | Center | Right |
| :--- | :----: | ----: |
| Text |  Text  |  Text |
| Text |  Text  |  Text |

---

## Task Lists

Task lists use square brackets.

```markdown
- [x] Learn Markdown
- [x] Learn React
- [ ] Learn TypeScript
- [ ] Build a project
```

Result:

* [x] Learn Markdown
* [x] Learn React
* [ ] Learn TypeScript
* [ ] Build a project

`[x]` represents a completed task.

`[ ]` represents an incomplete task.

---

## Combining Markdown Features

Markdown elements can be combined.

For example:

```markdown
## Frontend Technologies

- **JavaScript**
- **TypeScript**
- *React*
- `Redux`
- [HTML documentation](https://example.com)
```

Result:

## Frontend Technologies

* **JavaScript**
* **TypeScript**
* *React*
* `Redux`
* [HTML documentation](https://example.com)

---

## Line Breaks

A normal line break in Markdown does not always create a visible line break.

You can force a line break by adding two spaces at the end of a line:

```markdown
First line.  
Second line.
```

Result:

First line.
Second line.

You can also separate paragraphs with an empty line:

```markdown
This is the first paragraph.

This is the second paragraph.
```

Result:

This is the first paragraph.

This is the second paragraph.

---

## Escaping Markdown Syntax

If you want to display Markdown syntax instead of formatting it, use a backslash.

For example:

```markdown
\# This is not a heading
```

Result:

# This is not a heading

Another example:

```markdown
\**This is not bold\**
```

Result:

**This is not bold**

---

# Markdown Cheat Sheet

| Element         | Syntax                   |
| --------------- | ------------------------ |
| Heading         | `# Heading`              |
| Bold            | `**bold**`               |
| Italic          | `*italic*`               |
| Strikethrough   | `~~text~~`               |
| Unordered list  | `- item`                 |
| Ordered list    | `1. item`                |
| Link            | `[text](url)`            |
| Image           | `![alt](url)`            |
| Blockquote      | `> quote`                |
| Inline code     | `` `code` ``             |
| Code block      | ` ```code``` `           |
| Horizontal rule | `---`                    |
| Table           | `\| Column \| Column \|` |
| Task            | `- [ ] task`             |
| Completed task  | `- [x] task`             |

---

# Important Notes

Markdown is not a single completely uniform language. Different Markdown implementations can support different features.

For example, GitHub Flavored Markdown adds features such as tables and task lists, while other Markdown parsers may support a different set of extensions.

If Markdown is rendered inside a React application, the final result also depends on the Markdown library and its configuration.

For example, a project using `react-markdown` may support standard Markdown out of the box while requiring additional plugins for some extended syntax.

Therefore, when writing Markdown documentation for a specific project, always check which Markdown features are supported by the parser used by that project.
