const DIALOG_ROW_TEMPLATE = (() => {
  const [row, sys, avatar, text, time] = Array.from({ length: 5 }, () => document.createElement('div'))
  const img = new Image()

  row.classList.add('dialog-row')
  sys.classList.add('dialog-system')
  avatar.classList.add('avatar')
  text.classList.add('text')
  time.classList.add('time')
  img.src = 'imgs/deepnatural-ci-1.png'

  row.append(sys)
  sys.append(avatar, text, time)
  avatar.append(img)

  return row
})()

const LABEL_SELECTION_ROW_TEMPLATE = (() => {
  const [row, name, text] = Array.from({ length: 3 }, () => document.createElement('div'))

  row.classList.add('labels-selection-row')
  name.classList.add('labels-selection-name')
  text.classList.add('labels-selection-text')

  row.append(name, text)

  return row
})()

const getDialogRowTemplate = ({ isAI, label }) => {
  const row = DIALOG_ROW_TEMPLATE.cloneNode(true)

  if (!isAI) {
    row.querySelector('.avatar').remove()
    row.querySelector('.dialog-system').className = 'dialog-user'
  }

  if (label) {
    row.querySelector('.dialog-user').dataset.label = label
  }

  return {
    row,
    text: row.querySelector('.text'),
    time: row.querySelector('.time')
  }
}

const getLabelSelectionRowTemplate = () => {
  const row = LABEL_SELECTION_ROW_TEMPLATE.cloneNode(true)

  return {
    row,
    name: row.querySelector('.labels-selection-name'),
    text: row.querySelector('.labels-selection-text')
  }
}

const generateDialog = (dialog) => {
  const { row, text, time } = getDialogRowTemplate(dialog)

  text.textContent = dialog.text
  time.textContent = dialog.time

  return row
}

const generateLabelSelection = (label) => {
  const { row, name, text } = getLabelSelectionRowTemplate()

  name.textContent = label.name
  text.textContent = label.text
  row.dataset.name = label.name

  return row
}

const setup = () => {
  const dialogsWrapper = document.querySelector('.dialogs-wrapper')
  
  dialogsWrapper.append(...DIALOGS.map(generateDialog))
  
  const labelsSelectionWrapper = document.querySelector('.labels-selection-wrapper')
  
  labelsSelectionWrapper.append(...LABELS.map(generateLabelSelection))
}

setup()

window.addEventListener('click', ({ target }) => {
  const dialogUser = target.closest('.dialog-user')
  const label = target.closest('div.labels-selection-row')

  if (dialogUser) {
    onClickDialogUser(dialogUser)
  }

  if (label) {
    onClickLabel(label)
  }
})

const onClickDialogUser = dialogUser => {
  document.querySelectorAll('.dialog-user').forEach(el => el.classList.remove('select'))
  
  dialogUser.classList.add('select')

  const selectedLabel = dialogUser.dataset.label

  selectLabel(selectedLabel)
}

const onClickLabel = label => {
  const selectedDialogUser = document.querySelector('.dialog-user.select')

  if (!selectedDialogUser) return

  const selectedLabel = label.dataset.name
  
  selectedDialogUser.dataset.label = selectedLabel

  selectLabel(selectedLabel)
}

const selectLabel = selectedLabel => {
  document.querySelectorAll(`.labels-selection-row`).forEach(el => el.classList.remove('select'))

  const label = document.querySelector(`.labels-selection-row[data-name="${selectedLabel}"]`)

  label?.classList.add('select')
}