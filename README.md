# 🔥 문자열 덧셈 계산기 간단 설명

`유저에게 구분자와 양수를 가진 문자열을 입력받아 숫자만 추출하여 숫자의 합을 출력한다.`<br/>
`만약, 잘못된 값을 입력을 하면 그 즉시 [ERROR]를 포함한 에러 문구를 출력하고 프로그램을 종료한다.`
<br />
<br />

# 🛠️ 기능 구현 목록

- [ ] 기본 환경 세팅
  - [ ] `@woowacourse/mission-utils`를 import해 기본적인 환경을 세팅한다.
  - [ ] 코드의 재사용과 가독성을 위해 Utils 폴더를 생성하고, 안에 함수 단위로 파일을 생성한다.
- [ ] 정답 반환 함수 생성
  - [ ] 정답을 반환하는 함수
- [ ] 입력 값 확인 함수 생성
  - [ ] 입력 값이 비어있는 경우를 확인하는 함수
- [ ] 구분자 및 커스텀 구분자 여부 확인 함수 생성
  - [ ] 구분자 존재 여부 확인 함수
  - [ ] 커스텀 구분자 존재 여부 확인 함수
- [ ] 음수 값 확인 함수 생성
  - [ ] 음수 값이 문자열에 존재하는지 확인하는 함수
- [ ] 이상 문자열 여부 확인 함수 생성
  - [ ] 구분자와 양수 외에 다른 문자열 존재 여부 확인 함수
        <br />
        <br />

# 🤙 지켜야 하는 것

> **과제 진행 요구 사항**
>
> - 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
> - Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
>   - AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.

> **프로그래밍 요구 사항**
>
> - Node.js 20.17.0 버전에서 실행 가능해야 한다.
> - 프로그램 실행의 시작점은 App.js의 run()이다.
> - package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
> - 프로그램 종료 시 process.exit()를 호출하지 않는다.
> - 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
> - 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
>   - 기본적으로 JavaScript Style Guide를 원칙으로 한다.
>     > **라이브러리**
> - `@woowacourse/mission-utils`에서 제공하는 Console API를 사용하여 구현해야 한다.
>   - 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.
>     <br />

# 🙏 기능 요구 사항

> - 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
>   - 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
> - 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
>   - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
> - 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
>   <br/>

# ⌨️ **입력**

`구분자와 양수로 구성된 문자열`
<br/>
<br/>

# 🖥️ **출력**

```
결과 : 6
```
