const flatList = [
  {id: 1, parentId: null, name: 'root element 1'},
  {id: 2, parentdId: null, name: 'root element 2'},
  {id: 3, parentId: 1, name: 'child element 1'},
  {id: 4, parentdId: 2, name: 'child element 2'},
  {id: 5, parentId: 3, name: 'child element 3'},
  {id: 6, parentdId: 4, name: 'child element 4'},
  {id: 7, parentId: 6, name: 'child element 5'},
  {id: 8, parentdId: 7, name: 'child element 6'},
];

// after conversion:
const nestedList = [
  {id: 1, name: 'root element 1', children: [
    {id: 3, name: 'child element 1', children: [
      {id: 5, name: 'child element 3', children: []},
    ]},
  ]},
  {id: 2, name: 'root element 2', children: [
    {id: 4, name: 'child element2', children: [
      {id: 6, name: 'child element 4', children: [
        {id: 7, name: 'child element 5', children: [
          { id: 8, name: 'child element 6', children: []},
        ]},
      ]},
    ]},
  ]},
];