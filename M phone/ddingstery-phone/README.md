# 띵스터리 - 피해자의 휴대폰

이 폴더는 GitHub Pages에 바로 올릴 수 있는 정적 웹사이트입니다.

## 필요한 이미지

`victim/images/` 폴더 안에 아래 두 파일을 넣으세요.

1. `Q. 민트초코.png`
2. `이력서.png`

파일명은 띄어쓰기와 확장자까지 정확히 같아야 합니다.

## 퀴즈 정답 바꾸기

`victim/script.js` 파일의 아래 줄만 수정하세요.

```js
const CORRECT_ANSWER = "정답";
```

예를 들어 정답이 `민초`라면:

```js
const CORRECT_ANSWER = "민초";
```

영문 정답은 대소문자를 구분하지 않습니다.

## GitHub Pages 주소 예시

저장소 이름이 `ddingstery-phone`이고 GitHub 아이디가 `example`이면:

`https://example.github.io/ddingstery-phone/victim/`

다른 인물 휴대폰은 `victim` 폴더를 복사해 이름만 바꾸면 별도 링크로 만들 수 있습니다.
