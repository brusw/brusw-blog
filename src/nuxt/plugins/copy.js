if (process.env.NODE_ENV === 'production') {
  const copyText = `

---------------------
作者：Bruce Wei
来源：https://brusw.com/`

  document.addEventListener('copy', e => {
    if (!window.getSelection) {
      return
    }
    const content = window.getSelection().toString()
    e.clipboardData.setData('text/plain', content + copyText)
    e.clipboardData.setData('text/html', content + copyText)
    e.preventDefault()
  })
}
