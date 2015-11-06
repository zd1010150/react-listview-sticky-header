# react listview with sticky header

This project is trying to achieve listview with sticky headers using React.

## Installation

### npm

```sh
npm install --save react-listview-sticky-header
```

## Usage

```js
<ReactListView 
        data={data} 
        headerAttName="headerName"
        itemsAttName="items" 
        styles={styles}
      />
```

## Options

#### `data`: PropTypes.array.isRequired

```js
const DATALIST = [
{
 	headerName : "ListA",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }]
},
{
 	headerName : "ListB",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }]
}
];
```
#### `headerAttName`: PropTypes.string.isRequired

headerName variable in your `data` object.


#### `itemsAttName`: PropTypes.string.isRequired

itemsAttName variable in your `data` object.

#### `itemsAttName`: PropTypes.object.isRequired

```js
let styles = {
  outerDiv: {
    height: '400px',
    overflowY: 'auto',
    outline: '1px dashed blue',
    width: '40%',
  },

  ul: {
    margin: '0px',
    listStyleType: 'none'
  },

  fixedPosition: {
    position : 'fixed',
    width : '300px',
    top: '0px'
  },

  listHeader: {
    width: '300px',
    height: '20px',
    background: 'green',
    color: 'white'
  },

  listItems: {
    color: 'blue'
  },
};
```

## Development

```bash
git clone git@github.com:cht8687/react-listview-sticky-header.git
```
```bash
cd react-listview-sticky-header
```
```bash
npm install
```
```bash
webpack-dev-server
```
`tips:` If you have already had webpack-dev-server running, you might have EADDRINUSE error, please ensure the port is not in use.

#Then 

```bash
open http://localhost:8080/webpack-dev-server/
```

## License

MIT