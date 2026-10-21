/* 개념 목록. 항목은 slug 알파벳순으로 유지합니다 (화면 정렬은 common.js가 처리). */
window.CONCEPTS = [
  {
    slug: 'aes',
    title: 'AES',
    sub: '에이이에스 · Advanced Encryption Standard',
    summary: '전 세계가 함께 쓰는 공통키 암호 표준',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'anti-passback',
    title: 'Anti-Passback',
    sub: '안티패스백 · 되돌림 방지',
    summary: '한 카드로 두 번 연속 들어갈 수 없게 막는 출입 규칙',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'botnet',
    title: '봇넷',
    sub: 'botnet',
    summary: '공격자가 한꺼번에 조종하는 감염된 기기 무리',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'bpm',
    title: 'BPM',
    sub: '비피엠 · Business Process Management',
    summary: '일이 흘러가는 순서를 그려 놓고 계속 고쳐 나가는 활동',
    category: '업무 시스템',
    date: '2026-10-21'
  },
  {
    slug: 'c2-server',
    title: 'C&C 서버',
    sub: '씨앤씨 서버 · Command and Control',
    summary: '감염된 기기에 명령을 내리는 공격자의 지휘소',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'client',
    title: '클라이언트',
    sub: 'client · 서비스를 받는 쪽',
    summary: '서버에 먼저 요청을 보내 결과를 받아 쓰는 쪽',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'control-chart',
    title: '관리도',
    sub: 'control chart · 컨트롤 차트',
    summary: '시간에 따라 값을 찍고 한계선으로 이상을 가려내는 그림',
    category: '품질관리',
    date: '2026-10-21'
  },
  {
    slug: 'cookie',
    title: '쿠키',
    sub: 'cookie · HTTP 쿠키',
    summary: '웹사이트가 내 브라우저에 맡겨 두는 작은 메모',
    category: '웹',
    date: '2026-10-21'
  },
  {
    slug: 'csma-cd',
    title: 'CSMA/CD',
    sub: '씨에스엠에이 씨디 · 충돌 감지 방식',
    summary: '한 줄을 여럿이 나눠 쓸 때 말이 겹치지 않게 하는 규칙',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'ddos',
    title: 'DDoS',
    sub: '디도스 · Distributed Denial of Service',
    summary: '수많은 기기로 접속을 몰아 서비스를 마비시키는 공격',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'digital-forensics',
    title: '디지털 포렌식',
    sub: 'digital forensics',
    summary: '디지털 흔적을 바꾸지 않고 찾아내 증거로 만드는 일',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'digital-signature',
    title: '전자서명',
    sub: 'digital signature',
    summary: '비밀키로 만드는 작성자와 변조 여부의 증명',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'erp',
    title: 'ERP',
    sub: '이알피 · Enterprise Resource Planning',
    summary: '회사의 돈·물건·사람 정보를 한 시스템에 모아 쓰는 통합 시스템',
    category: '업무 시스템',
    date: '2026-10-21'
  },
  {
    slug: 'ethernet',
    title: 'Ethernet',
    sub: '이더넷 · 유선 LAN 표준',
    summary: '유선 LAN에서 가장 널리 쓰이는 연결 규격',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'fishbone-diagram',
    title: '특성요인도',
    sub: 'fishbone diagram · 이시카와 다이어그램',
    summary: '하나의 결과에 영향을 준 원인을 생선뼈 모양으로 펼친 그림',
    category: '품질관리',
    date: '2026-10-21'
  },
  {
    slug: 'hash',
    title: '해시',
    sub: 'hash · 해시 함수',
    summary: '데이터를 정해진 길이의 지문 하나로 바꾸는 계산',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'histogram',
    title: '히스토그램',
    sub: 'histogram · 도수분포도',
    summary: '값이 어느 구간에 몇 개씩 모여 있는지 보는 막대그림',
    category: '품질관리',
    date: '2026-10-21'
  },
  {
    slug: 'lan',
    title: 'LAN',
    sub: '랜 · Local Area Network',
    summary: '집·사무실처럼 좁은 범위를 묶은 네트워크',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'lan-topology',
    title: 'LAN 접속 형태',
    sub: '토폴로지 · topology · 망 구성 방식',
    summary: '기기를 어떤 모양으로 잇느냐 — 스타형·버스형·링형',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'osi-model',
    title: 'OSI 참조 모델',
    sub: 'OSI model · 개방형 시스템 상호연결',
    summary: '네트워크가 하는 일을 일곱 층으로 나눠 정리한 지도',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'packet',
    title: '패킷',
    sub: 'packet · 꾸러미',
    summary: '데이터를 작게 잘라 주소와 순서를 붙인 조각',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'pandas',
    title: 'pandas',
    sub: '판다스',
    summary: '표 데이터를 파이썬 코드로 다루는 라이브러리',
    category: 'Python',
    date: '2026-10-20'
  },
  {
    slug: 'pareto-chart',
    title: '파레토 차트',
    sub: 'Pareto chart · 파레토도',
    summary: '원인을 많은 순서대로 세워 무엇부터 고칠지 정하는 그림',
    category: '품질관리',
    date: '2026-10-21'
  },
  {
    slug: 'protocol',
    title: '프로토콜',
    sub: 'protocol · 통신 규약',
    summary: '기계끼리 말이 통하도록 미리 맞춰 둔 약속',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'public-private-key',
    title: '공개키-비밀키',
    sub: '비대칭키 · public key / private key',
    summary: '잠그는 열쇠와 여는 열쇠를 다르게 만든 암호 방식',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'pypi',
    title: 'PyPI',
    sub: '파이파이',
    summary: '파이썬 패키지를 모아 둔 공용 창고',
    category: 'Python',
    date: '2026-10-20'
  },
  {
    slug: 'rsa',
    title: 'RSA',
    sub: '알에스에이 · Rivest-Shamir-Adleman',
    summary: '소인수분해의 어려움에 기댄 공개키 암호',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'server',
    title: '서버',
    sub: 'server · 서비스를 주는 쪽',
    summary: '요청을 받아 처리해 주는 쪽. 기계가 아니라 역할의 이름',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'sha-256',
    title: 'SHA-256',
    sub: '샤-256 · Secure Hash Algorithm',
    summary: '무엇을 넣어도 64자리 값이 나오는 대표 해시 함수',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'spf',
    title: 'SPF',
    sub: '에스피에프 · Sender Policy Framework',
    summary: '도메인의 메일을 보낼 수 있는 서버를 DNS에 적어 두는 규칙',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'ssid',
    title: 'SSID',
    sub: '에스에스아이디 · Service Set Identifier',
    summary: '와이파이의 이름. 목록에 뜨는 그 글자',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'symmetric-key',
    title: '공통키',
    sub: '대칭키 · symmetric key',
    summary: '잠글 때와 열 때 같은 열쇠를 쓰는 암호 방식',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'uv',
    title: 'uv',
    sub: '유브이',
    summary: 'Rust로 만든 파이썬 패키지·프로젝트 관리 도구',
    category: 'Python',
    date: '2026-10-20'
  },
  {
    slug: 'wan',
    title: 'WAN',
    sub: '완 · Wide Area Network',
    summary: '멀리 떨어진 LAN들을 이어 주는 넓은 범위의 네트워크',
    category: '네트워크',
    date: '2026-10-21'
  }
];
