const colors = [
    { hex: '#f0f8ff', rgb: '240, 250, 285' },
    { hex: '#85c0a3', rgb: '133, 192, 163' },
    { hex: '#9a85c0', rgb: '154, 133, 192' },
    { hex: '#c085b2', rgb: '192, 133, 178' }
  ];
  
  console.log(createColorMarkup(colors));
  
  function createColorMarkup(colors) {
    const markup = colors.map(color => {
      return `
        <div class="color-card">
          <div class="color-swatch" data-hex="${color.hex}" data-rgba="${color.rgb}" style="background-color: ${color.hex};"></div>
          <div class="color-meta">
            <p>hex: ${color.hex}</p>
            <p>rgba: ${color.rgb}</p>
          </div>
        </div>
      `;
    })
     // join() объединяет массив строк в одну строку
  
    console.log (markup)
  }
  