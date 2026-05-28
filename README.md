# BofA Digital Banking UI

An Angular 14 component library providing Bank of America's design system components for digital banking applications.

## Components

### `<bofa-button>`

A themed button component following BofA brand guidelines.

| Input       | Type                                  | Default     | Description                        |
| ----------- | ------------------------------------- | ----------- | ---------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'text'` | `'primary'` | Button visual style                |
| `size`      | `'small' \| 'medium' \| 'large'`     | `'medium'`  | Button size                        |
| `disabled`  | `boolean`                             | `false`     | Whether the button is disabled     |
| `fullWidth` | `boolean`                             | `false`     | Whether the button spans full width|
| `type`      | `'button' \| 'submit' \| 'reset'`    | `'button'`  | HTML button type                   |

| Output    | Type         | Description                |
| --------- | ------------ | -------------------------- |
| `clicked` | `MouseEvent` | Emitted on button click    |

### `<bofa-form-field>`

A form input field with label, validation, and hint support.

| Input          | Type                                              | Default  | Description              |
| -------------- | ------------------------------------------------- | -------- | ------------------------ |
| `label`        | `string`                                          | `''`     | Field label              |
| `placeholder`  | `string`                                          | `''`     | Input placeholder        |
| `type`         | `'text' \| 'email' \| 'password' \| 'number' \| 'tel'` | `'text'` | Input type          |
| `value`        | `string`                                          | `''`     | Current value            |
| `required`     | `boolean`                                         | `false`  | Show required indicator  |
| `disabled`     | `boolean`                                         | `false`  | Disable the input        |
| `errorMessage` | `string`                                          | `''`     | Validation error message |
| `hint`         | `string`                                          | `''`     | Helper hint text         |

| Output        | Type     | Description                    |
| ------------- | -------- | ------------------------------ |
| `valueChange` | `string` | Emitted when the value changes |

## Development

### Prerequisites

- Node.js 16.x
- Angular CLI 14

### Build the library

```bash
npm install
ng build bofa-ui-components
```

### Install in a consumer project

```bash
npm install github:lindahuang3846/bofa-digital-banking-ui#dist
```

Then import `BofaUiComponentsModule` in your app module:

```typescript
import { BofaUiComponentsModule } from 'bofa-ui-components';

@NgModule({
  imports: [BofaUiComponentsModule]
})
export class AppModule { }
```
