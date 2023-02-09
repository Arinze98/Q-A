const boxEl = document.querySelectorAll('#box1')

boxEl.forEach((box)=> {
  const plusBtn = box.querySelector('.fa-square-plus')
  const minusBtn = box.querySelector('.fa-square-minus')
  const articleEl = box.querySelector('article')
  const Q_buttonEl = box.querySelector('.Q_button')

  plusBtn.addEventListener('click', ()=> {
    articleEl.classList.add('article_display')
    Q_buttonEl.style.borderBottom = '1px solid black'

    boxEl.forEach(function(item) {
      if (item !== box) {
        item.classList.remove('article_display')
      }
    })
  })
  minusBtn.addEventListener('click', ()=> {
    articleEl.classList.remove('article_display')
    Q_buttonEl.style.borderBottom = '0px'
  })

})
