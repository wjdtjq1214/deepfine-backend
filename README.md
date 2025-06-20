## local 실행 방법

### 사전 준비

최상위 폴더에 아래 두 파일 생성

```
.env.docker-compose
config.json
```

### 실행 환경

node: 22.16.0

### 실행 방법

```bash
# 디비 도커로 띄우기
docker compose -f docker-compose.yml --env-file ./.env.docker-compose up -d

# 라이브러리 설치
npm install

# 프로젝트 실행
npm run start
```

## 기능 정리

url: http://127.0.0.1:3535/index

### import 기능

import 버튼 클릭 후 엑셀파일 업로드시 디비에 저장 됨

### refresh 기능

버튼 클릭시 마커 디비에 있는 값으로 현행화 됨

### search 기능

단어 입력 후 돋보기 버튼 클릭시 해당 단어를 포함한 마커가 하나인 경우 지도 중심이 해당 마커로 이동
