const tech = [ 
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'React' },
    { label: 'Node' }
  ];
  
  const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter')
  };
  
  
refs.input.addEventListener('input', filterInput);
function filterInput(e) {
    const filter = e.target.value.toLowerCase();
    
    const filteredItems = tech.filter(el => el.label.toLowerCase().includes(filter));
    console.log(filteredItems);
  
    const listItemFilter = createListItem(filteredItems);
    refs.list.innerHTML = listItemFilter;
  }


  const listItem = createListItem(tech);
  refs.list.innerHTML = listItem;

  function createListItem(items) {
    return items.map(item => `<li>${item.label}</li>`).join(' ');
  }
  