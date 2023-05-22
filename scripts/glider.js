var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    startAt: '1',
    breakpoints: {
      1200: {
        perView: 2,
        gap: 64,
      },
  
      420: {
        perView: 1
      }
    }
  
  })
  
  glide.mount()
