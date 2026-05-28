# Angular 14 Component Library

A reusable Angular 14 UI component library (`my-ui-components`) providing ready-to-use components.

## Components

### `<ui-card>`

A flexible card component with optional image, title, subtitle, and content projection.

**Inputs:**

| Input      | Type      | Default | Description                         |
| ---------- | --------- | ------- | ----------------------------------- |
| `title`    | `string`  | `''`    | Card title                          |
| `subtitle` | `string`  | `''`    | Card subtitle                       |
| `imageUrl` | `string`  | `''`    | URL for the card header image       |
| `elevated` | `boolean` | `true`  | Whether to show a box-shadow effect |

**Usage:**

```html
<ui-card title="Hello" subtitle="World" imageUrl="https://via.placeholder.com/400x200">
  <p>Any projected content goes here.</p>
</ui-card>
```

## Development

### Prerequisites

- Node.js 16.x
- Angular CLI 14

### Install dependencies

```bash
npm install
```

### Build the library

```bash
ng build my-ui-components
```

The built package will be in `dist/my-ui-components/`.

### Install in another project

You can install this library from GitHub using:

```bash
npm install github:lindahuang3846/angular14-component-library
```

Or link locally:

```bash
cd dist/my-ui-components
npm link
# In consumer project:
npm link my-ui-components
```
