## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

---

## 모듈 및 라이브러리의 용도와 선택한 이유

- **Next**
  - React 기반 / SSR
- **shadcn/ui**
  - Radix-ui 및 tailwind css를 사용하여 구축된 재사용 가능한 컴포넌트
  - 라이브러리를 설치하여 사용하는게 아닌 원하는 컴포넌트를 복붙해서 사용하는 형식
  - 자유로운 커스터마이징 가능 _(기획 요구사항)_
  - 불필요한 번들링이 필요 없어짐
  - 깔끔하고 세련된 디자인
- **Tailwind CSS / SCSS**
  - CSS 프레임워크 / CSS 전처리기
  - 편리하고 빠른 개발 / 코드 가독성을 높이고 유지보수가 쉽고 효율적
- **axios**
  - http 통신을 위한 promise 기반의 자바스크립트 라이브러리
  - 사용이 쉽고 익숙함
- **dayjs**
  - 날짜 계산 라이브러리
  - 사이즈가 매우 작고 코드가 간편함
- **exceljs**
  - sheetjs에 비해 무료로 많은 기능을 지원
- **lodash**
  - 객체, 배열과 같은 데이터 구조를 간편하게 함수형으로 다룰 수 있음
  - 지연평가 → 필요한 계산만 하여 성능 향상 효과
  - 고차함수의 파라미터에 객체값도 줄 수 있다.
- **react-uuid**
  - 고유한 id값을 자동으로 추가해줌
- **react-hook-form**
  - React 기반의 form 관리 라이브러리
  - 입력 필드의 값 변화만 추척 → 불필요한 렌더링 방지, 가상 DOM 업데이트 최소화
  - 내장된 유효성 검사 지원 → 필수값, 에러 메세지 설정 가능
- **zustand**
  - store를 활용하여 전역 상태 관리 라이브러리, top-down 방식
  - 사용 방법이 간결하고 가독성이 좋음
  - store 형태임에도 간단하게 상태관리 구성 가능
  - 일시적 업데이트 → 상태가 자주 바뀌더라도 매번 업데이트가 일어나지 않고 리렌더링을 제어하는 기능 탑재

---

## 폴더 구조

```bash
common-admin/
│
├── config/                     # env 파일 (gitignore)
│   └── .env
│
├── public/                     # 리소스들
│   ├── fonts/
│   ├── icons/
│   ├── images/
│
├── src/
│   ├── apis/                   # api와 관련된 로직
│   ├── app/                    # 라우팅 관련 파일 정의
│   │   └── page.tsx
│   │   └── layout.tsx
│   ├── components/             # 재사용 가능한 컴포넌트
│   ├── hooks/                  # 커스텀 React 훅
│   ├── lib/                    # 유틸리티 함수
│   ├── stores/                 # 전역 상태 관리
│   ├── styles/                 # 스타일 관련 파일(CSS, Tailwind 설정 등)
│   └── types/                  # 타입
│
```
