/**
 * 문제를 풀기전에 상단에 있는 Run 버튼을 클릭 혹은 ctrl + Enter 눌러주세요.
 * 
 * 좌측은 대화 영역입니다. 그리고 우측은 레이블 영역입니다.
 * 대화 영역은 변수 `DIALOGS` 를 기반으로 렌더링 됩니다.
 * 레이블 영역은 변수 `LABELS` 를 기반으로 렌더링 됩니다.
 * 
 * 대화 영역에는 AI 와 사용자의 대화가 나옵니다.
 * (사용자의 대화는 아바타가 없는 대화를 말합니다.)
 * 사용자의 대화를 선택하면 레이블 영역에서 레이블을 하나 선택할 수 있습니다.
 * 레이블을 선택하면 사용자 대화에 레이블이 지정이 됩니다.
 * 
 * _Submit_ 버튼을 클릭 했을 때, `onClickSubmit` 함수가 실행 됩니다.
 * `onClickSubmit` 함수에서 사용자의 대화에 지정된 레이블이 `DIALOGS` 의 `label`
 * 필드에 값이 들어갈 수 있도록 코드를 작성하고,
 * `DIALOGS` 에서 사용자의 대화(`isAI` 필드가 없는)만 `console.log` 로 출력해주세요.
 * 
 * 예를 들면 `text` 가 'I have one more semester,\nbut it would be great to have a job lined up.'  인
 * 사용자의 대화에 'claim' 이라는 레이블이 선택됐다면,
 * {
 *   text: 'I have one more semester,\nbut it would be great to have a job lined up.',
 *   time: '오전 11:45:56',
 *   label: 'claim'
 * }
 * 
 * 이렇게 'claim' 이 `label` 필드에 들어가 있어야 합니다.
 * 
 * 참고 : 문제를 풀 때 개발자 도구를 활용 하셔도 됩니다.
 */
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