var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    startAt: '1',
    breakpoints: {
      800: {
        perView: 2,
      },
  
      420: {
        perView: 1
      }
    }
  
  })
  
  glide.mount()
