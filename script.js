const onClickSubmit = () => {
  // 여기에 자유롭게 코드를 작성해 주세요.
}

const DIALOGS = [
  {
    isAI: true,
    text: 'What are you doing?',
    time: '오전 11:44:49',
  },
  {
    text: 'I have one more semester,\nbut it would be great to have a job lined up.',
    time: '오전 11:45:56',
    label: null
  },
  {
    isAI: true,
    text: 'How is your day going?',
    time: '오전 11:45:57',
  },
  {
    text: 'I\'m not even half done yet.',
    time: '오전 11:46:15',
    label: 'react'
  },
  {
    text: 'Hm……',
    time: '오전 10:55:25',
    label: null
  },
  {
    isAI: true,
    text: 'You feel stressed out now.',
    time: '오전 10:55:26',
  },
  {
    text: 'That\'s an understatement.',
    time: '오전 10:55:34',
    label: null
  },
  {
    isAI: true,
    text: 'What are you doing now?',
    time: '오전 10:55:35',
  },
  {
    text: 'I\'m watching TV.',
    time: '오전 10:55:48',
    label: null
  },
  {
    isAI: true,
    text: 'What’s that?',
    time: '오전 10:55:49',
  },
  {
    text: 'You want to do something?',
    time: '오전 10:56:01',
    label: null
  },
  {
    isAI: true,
    text: 'I\'m going to the bank.',
    time: '오전 10:56:02',
  },
  {
    text: '?',
    time: '오전 10:56:06',
    label: null
  },
  {
    isAI: true,
    text: 'God~',
    time: '오전 10:56:07',
  },
]

const LABELS = [
  { name: 'claim',  text: 'Express opinior' },
  { name: 'react',  text: 'Response to something' },
  { name: 'question',  text: 'Questioning the content' },
  { name: 'advice',  text: 'Provide helpful advice' },
  { name: 'request',  text: 'Ask the other person to do something' },
  { name: 'satisfaction',  text: 'Obtain satisfactory results' },
  { name: 'dissatisfaction',  text: 'Get unssatisfactory results' },
  { name: 'skip',  text: 'Hard to choose, no selection' },
]

document.querySelector('.btn-submit button').addEventListener('click', () => {
  onClickSubmit()
})