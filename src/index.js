function demoComponent() {
  const el = document.createElement('div');

  el.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return el;
}

// Add html to the page by appending the abovecreated component
document.body.appendChild(demoComponent())