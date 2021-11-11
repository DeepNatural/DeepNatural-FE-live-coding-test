문제를 풀기전에 상단에 있는 Run 버튼을 클릭 혹은 ctrl + Enter 눌러주세요.

좌측은 대화 영역입니다. 그리고 우측은 레이블 영역입니다.
대화 영역은 변수 `DIALOGS` 를 기반으로 렌더링 됩니다.
레이블 영역은 변수 `LABELS` 를 기반으로 렌더링 됩니다.

대화 영역에는 AI 와 사용자의 대화가 나옵니다.
(사용자의 대화는 아바타가 없는 대화를 말합니다.)
사용자의 대화를 선택하면 레이블 영역에서 레이블을 하나 선택할 수 있습니다.
레이블을 선택하면 사용자 대화에 레이블이 지정이 됩니다.

_Submit_ 버튼을 클릭 했을 때, `onClickSubmit` 함수가 실행 됩니다.
`onClickSubmit` 함수에서 사용자의 대화에 지정된 레이블이 `DIALOGS` 의 `label` 필드에 값이 들어갈 수 있도록 코드를 작성하고, `DIALOGS` 에서 사용자의 대화(`isAI` 필드가 없는)만 `console.log` 로 출력해주세요.

예를 들면 `text` 가 'I have one more semester,\nbut it would be great to have a job lined up.' 인 사용자의 대화에 'claim' 이라는 레이블이 선택됐다면,

```js
{
  text: 'I have one more semester,\nbut it would be great to have a job lined up.',
  time: '오전 11:45:56',
  label: 'claim'
}
```

이렇게 'claim' 이 `label` 필드에 들어가 있어야 합니다.

**참고 : 문제를 풀 때 개발자 도구를 활용 하셔도 됩니다.**