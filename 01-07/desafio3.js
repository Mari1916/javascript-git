const names = ['João Grilo', 'Chicó', 'Rosinha'];

let htmlTemplate = '';

for (let i = 0; i < names.length; i++) {
  htmlTemplate += `<li>${names[i]}</li>`;
}

console.log(htmlTemplate);