function button() {
  // Создаем элемент
  const element = document.createElement('div')
  // Добавляем к элементу класс
  element.className = 'button'
  // Возвращаем результат элемента
  return element
}

window.addEventListener('load', () => {
  const buttonElement = button()
  document.body.append(buttonElement)
})
