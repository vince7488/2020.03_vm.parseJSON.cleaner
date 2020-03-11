# A Parsed JSON Cleaner

*- Vernard*

An application that consumes a provided API endpoint and parses the data according to specification. Once parsed, write the contents as JSON to a local directory.

> You may name the output file whatever you want.

#### Target API to Consume

`https://data-endpoint.herokuapp.com/data`

#### Data Shape

The items returned from the API can be malformed - albeit in somewhat predictable ways. The base interface should look like:

```typescript
interface FullData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}
```

However, possible issues with the data shape include:
- Missing fields entirely
- Null values
- Empty string as field value
- Phone as a number instead of hyphen separated string
- Malformed email address
- First & Last name in the firstName field
- First & Last name in the lastName field

The above possibilities mean that the data shape is more like:

```typescript
interface RealityOfData {
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | number | null;
  email?: string | null;
}
```

#### The More Specific Goal

Parse the data in such a way that it is returned as:

```typescript
interface DesiredDataShape {
  firstName: string | 'N/A';
  lastName: string | 'N/A';
  phone: string | 'N/A';
  email: string | 'N/A';
}
```

- Any missing data is formatted as the string `N/A`
- First & Last names seperated into their respective fields (when available)
- Phone is a string
- Email is a valid format (loose check is fine). If not, change to `N/A`

#### Installation

- clone: `https://github.com/vince7488/2020.03_vm.parseJSON.cleaner.git`
- `npm install --save express react react-dom`
- `npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-react @babel/plugin-proposal-class-properties @babel/parser html-webpack-plugin`

- `npm i --save-dev clean-webpack-plugin`
- `npm i --save-dev load-json-file`
- `npm i --save-dev write-json-file`
- `npm i --save-dev axios`