const flatList = [
  {id: 1, parentId: null, name: 'root element 1'},
  {id: 2, parentId: null, name: 'root element 2'},
  {id: 3, parentId: 1, name: 'child element 1'},
  {id: 4, parentId: 2, name: 'child element 2'},
  {id: 5, parentId: 3, name: 'child element 3'},
  {id: 6, parentId: 4, name: 'child element 4'},
  {id: 7, parentId: 6, name: 'child element 5'},
  {id: 8, parentId: 7, name: 'child element 6'},
];

// helper function
const checkForchildren = (item) => {
  const children = flatList.filter(childItem => childItem.parentId === item.id);
  let childrenArray = [];
  if(children.length > 0) {
    childrenArray = children.map(child => checkForchildren(child));
  };
  return Object.assign({}, item, {children: childrenArray})
}
// solution
const nestedList = flatList
  .filter(el => el.parentId === null)
  .map(checkForchildren);

console.log(nestedList);
