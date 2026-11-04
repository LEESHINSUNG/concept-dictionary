/* 개념 목록. 항목은 slug 알파벳순으로 유지합니다 (화면 정렬은 common.js가 처리). */
window.CONCEPTS = [
  {
    slug: '3c-analysis',
    title: '3C 분석',
    sub: '삼씨 분석 · 3C analysis · Customer · Competitor · Company · 3C分析',
    summary: '고객·경쟁사·자사를 살펴 우리가 이길 자리를 찾는 방법',
    category: '업무 시스템',
    date: '2026-10-30'
  },
  {
    slug: '4p',
    title: '4P',
    sub: '포피 · 마케팅 믹스 · marketing mix · Product · Price · Place · Promotion',
    summary: '제품·가격·유통·판촉을 한 방향으로 맞추는 마케팅의 기본 틀',
    category: '업무 시스템',
    date: '2026-10-30'
  },
  {
    slug: '7s',
    title: '7S',
    sub: '세븐 에스 · 맥킨지 7S · McKinsey 7S framework',
    summary: '조직의 일곱 요소가 서로 맞물려 있는지 점검하는 틀',
    category: '업무 시스템',
    date: '2026-10-30'
  },
  {
    slug: 'ack-nack',
    title: 'ACK/NACK',
    sub: '애크 · 낵 · 확인 응답 · 긍정 응답 · 부정 응답 · acknowledgement · negative acknowledgement · 再送',
    summary: '받았다·못 받았다를 알려 주는 짧은 응답 신호',
    category: '네트워크',
    date: '2026-11-02'
  },
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
    slug: 'audit-trail',
    title: '감사 증적',
    sub: 'audit trail · 監査証跡',
    summary: '누가 언제 무엇을 했는지 되짚을 수 있게 남긴 기록',
    category: '보안',
    date: '2026-10-23'
  },
  {
    slug: 'audit-working-papers',
    title: '감사 조서',
    sub: 'audit working papers · 監査調書',
    summary: '감사인이 무엇을 보고 어떻게 판단했는지 남긴 기록',
    category: '업무 시스템',
    date: '2026-10-27'
  },
  {
    slug: 'aws-client-vpn',
    title: 'AWS Client VPN',
    sub: '에이더블유에스 클라이언트 VPN · 원격 접속 VPN · Amazon Web Services',
    summary: '직원이 자기 기기에서 AWS 안 사설망으로 들어가는 관리형 VPN',
    category: '네트워크',
    date: '2026-10-29'
  },
  {
    slug: 'background',
    title: '백그라운드',
    sub: '백그라운드 실행 · background · 포그라운드 · foreground',
    summary: '프로그램을 뒤에서 돌게 맡기고 바로 다른 일을 하는 실행 방식',
    category: '운영체제',
    date: '2026-10-29'
  },
  {
    slug: 'big-data',
    title: '빅데이터',
    sub: 'big data · ビッグデータ · 3V · Volume · Variety · Velocity',
    summary: '전에 쓰던 방법으로는 벅찰 만큼 크고 제각각이고 빨리 쏟아지는 데이터',
    category: '업무 시스템',
    date: '2026-11-05'
  },
  {
    slug: 'botnet',
    title: '봇넷',
    sub: 'botnet · ボットネット',
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
    slug: 'broken-windows-theory',
    title: '깨진 유리창 이론',
    sub: 'broken windows theory · 割れ窓理論',
    summary: '작은 흐트러짐을 두면 더 큰 문제가 따라온다는 생각',
    category: '보안',
    date: '2026-10-26'
  },
  {
    slug: 'brute-force-attack',
    title: '무차별 대입 공격',
    sub: '브루트 포스 · 무차별 대입 · 전수 조사 · brute force attack · ブルートフォース攻撃',
    summary: '맞을 때까지 가능한 값을 모두 넣어 보는 공격',
    category: '보안',
    date: '2026-11-02'
  },
  {
    slug: 'business-system',
    title: '비즈니스 시스템',
    sub: '비지니스 시스템 · 사업 시스템 · business system',
    summary: '일을 기능별로 줄 세워 어디서 이기고 어디를 맡길지 보는 틀',
    category: '업무 시스템',
    date: '2026-10-30'
  },
  {
    slug: 'c2-server',
    title: 'C&C 서버',
    sub: 'Command and Control (C2) · C&Cサーバ',
    summary: '감염된 기기에 명령을 내리는 공격자의 지휘소',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'captcha',
    title: 'CAPTCHA',
    sub: '캡차 · 사람과 컴퓨터를 가려내는 자동 시험',
    summary: '사람인지 프로그램인지 가려내려고 내는 시험',
    category: '보안',
    date: '2026-10-26'
  },
  {
    slug: 'cidr',
    title: 'CIDR 표기',
    sub: '사이더 표기 · Classless Inter-Domain Routing notation',
    summary: '주소 뒤 슬래시 숫자로 네트워크 몫을 적는 방식',
    category: '네트워크',
    date: '2026-10-29'
  },
  {
    slug: 'cio',
    title: 'CIO',
    sub: '씨아이오 · 최고정보책임자 · Chief Information Officer · 最高情報責任者 · 정보화 책임자',
    summary: '조직의 정보와 IT를 경영의 눈으로 책임지는 임원',
    category: '업무 시스템',
    date: '2026-11-02'
  },
  {
    slug: 'client',
    title: '클라이언트',
    sub: 'client · クライアント',
    summary: '서버에 먼저 요청을 보내 결과를 받아 쓰는 쪽',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'cloud-service-models',
    title: '클라우드 서비스 모델',
    sub: 'IaaS · PaaS · SaaS · DaaS',
    summary: '어디까지를 사업자가 맡느냐로 갈리는 네 가지',
    category: '네트워크',
    date: '2026-10-29'
  },
  {
    slug: 'control-chart',
    title: '관리도',
    sub: 'control chart · 管理図',
    summary: '시간에 따라 값을 찍고 한계선으로 이상을 가려내는 그림',
    category: '품질관리',
    date: '2026-10-21'
  },
  {
    slug: 'control-total-check',
    title: '컨트롤 토털 체크',
    sub: '합계 대조 검사 · control total check · コントロールトータルチェック',
    summary: '미리 낸 합계와 넣은 뒤의 합계를 맞춰 보는 검사',
    category: '업무 시스템',
    date: '2026-10-29'
  },
  {
    slug: 'cookie',
    title: '쿠키',
    sub: 'cookie · クッキー',
    summary: '웹사이트가 내 브라우저에 맡겨 두는 작은 메모',
    category: '웹',
    date: '2026-10-21'
  },
  {
    slug: 'correlation-analysis',
    title: '상관분석',
    sub: '상관관계 분석 · correlation analysis · 相関分析 · 상관계수 · 산점도',
    summary: '두 가지가 함께 움직이는지와 그 세기를 재는 방법',
    category: '품질관리',
    date: '2026-11-05'
  },
  {
    slug: 'crypto-compromise',
    title: '암호 알고리즘의 위태화',
    sub: 'cryptographic compromise · 暗号アルゴリズムの危殆化',
    summary: '시간이 지나며 암호가 약해져 더는 안전하지 않게 되는 일',
    category: '보안',
    date: '2026-10-22'
  },
  {
    slug: 'csirt',
    title: 'CSIRT',
    sub: '씨서트 · Computer Security Incident Response Team',
    summary: '보안 사고가 났을 때 움직이도록 미리 꾸려 둔 대응 팀',
    category: '보안',
    date: '2026-10-23'
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
    slug: 'csr',
    title: '기업의 사회적 책임',
    sub: 'CSR · Corporate Social Responsibility · 企業の社会的責任',
    summary: '이익만이 아니라 둘레에 미치는 영향까지 책임지는 것',
    category: '업무 시스템',
    date: '2026-10-29'
  },
  {
    slug: 'css',
    title: 'CSS',
    sub: '씨에스에스 · Cascading Style Sheets',
    summary: 'HTML로 세운 뼈대에 모양을 입히는 언어',
    category: '웹',
    date: '2026-10-22'
  },
  {
    slug: 'cve',
    title: 'CVE',
    sub: '공통 취약점 식별자 · Common Vulnerabilities and Exposures · 共通脆弱性識別子',
    summary: '취약점 하나하나에 전 세계가 함께 쓰는 번호를 붙이는 체계',
    category: '보안',
    date: '2026-10-27'
  },
  {
    slug: 'cvss',
    title: 'CVSS',
    sub: '공통 취약점 평가 시스템 · Common Vulnerability Scoring System · 共通脆弱性評価システム',
    summary: '취약점이 얼마나 위험한지를 공통 기준으로 점수 매기는 체계',
    category: '보안',
    date: '2026-10-27'
  },
  {
    slug: 'data-dictionary',
    title: '데이터 딕셔너리',
    sub: '데이터 사전 · data dictionary · データディクショナリ · 시스템 카탈로그',
    summary: '데이터 항목의 뜻과 모양을 적어 둔 사전',
    category: '업무 시스템',
    date: '2026-11-05'
  },
  {
    slug: 'data-lake',
    title: '데이터 레이크',
    sub: 'data lake · データレイク · 데이터 늪',
    summary: '가공하지 않은 원본 그대로 형식을 가리지 않고 부어 두는 저장소',
    category: '업무 시스템',
    date: '2026-11-05'
  },
  {
    slug: 'data-mart',
    title: '데이터 마트',
    sub: 'data mart · データマート',
    summary: '웨어하우스에서 한 부서·한 목적에 필요한 것만 떼어 만든 작은 창고',
    category: '업무 시스템',
    date: '2026-11-05'
  },
  {
    slug: 'data-mining',
    title: '데이터 마이닝',
    sub: '데이터 채굴 · data mining · データマイニング · 연관 규칙 · 장바구니 분석',
    summary: '쌓인 데이터를 뒤져 사람이 몰랐던 규칙과 패턴을 찾아내는 일',
    category: '업무 시스템',
    date: '2026-11-05'
  },
  {
    slug: 'data-warehouse',
    title: '데이터 웨어하우스',
    sub: 'DWH · data warehouse · データウェアハウス · ETL',
    summary: '흩어진 업무 데이터를 한곳에 모아 분석용으로 쌓아 두는 창고',
    category: '업무 시스템',
    date: '2026-11-05'
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
    slug: 'dhcp',
    title: 'DHCP',
    sub: '디에이치시피 · Dynamic Host Configuration Protocol · 동적 호스트 구성 프로토콜 · IP 자동 할당',
    summary: '네트워크에 들어온 기기에게 IP 주소와 설정을 자동으로 빌려주는 규약',
    category: '네트워크',
    date: '2026-11-02'
  },
  {
    slug: 'digital-forensics',
    title: '디지털 포렌식',
    sub: 'digital forensics · デジタルフォレンジック',
    summary: '디지털 흔적을 바꾸지 않고 찾아내 증거로 만드는 일',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'digital-signature',
    title: '전자서명',
    sub: 'digital signature · 電子署名',
    summary: '비밀키로 만드는 작성자와 변조 여부의 증명',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'disk-redundancy',
    title: '디스크 이중화 기술',
    sub: '디스크 다중화 · 미러링 · 듀플렉싱 · RAID · disk redundancy · ディスクの二重化',
    summary: '디스크가 망가져도 멈추지 않게 같은 내용이나 복구 정보를 함께 두는 기술',
    category: '품질관리',
    date: '2026-11-05'
  },
  {
    slug: 'django-orm',
    title: 'Django ORM',
    sub: '장고 ORM · 객체 관계 매핑 · Object-Relational Mapping · QuerySet · 마이그레이션 · N+1',
    summary: '파이썬 클래스와 메서드로 데이터베이스 표를 다루게 해 주는 Django의 번역기',
    category: 'Python',
    date: '2026-10-30'
  },
  {
    slug: 'dmz',
    title: 'DMZ',
    sub: '디엠지 · 비무장지대 · DeMilitarized Zone · 완충 구간 · 경계 네트워크',
    summary: '바깥에 보여 줄 서버만 모아 두는 인터넷과 내부망 사이의 중간 구역',
    category: '네트워크',
    date: '2026-11-02'
  },
  {
    slug: 'dns-cache-poisoning',
    title: 'DNS 캐시 포이즈닝',
    sub: 'DNS cache poisoning · DNSキャッシュポイズニング',
    summary: '주소록에 가짜 답을 심어 엉뚱한 서버로 보내는 공격',
    category: '보안',
    date: '2026-10-27'
  },
  {
    slug: 'docker',
    title: 'Docker',
    sub: '도커 · 컨테이너 · container',
    summary: '프로그램을 환경째 상자에 담아 어디서나 똑같이 돌리는 도구',
    category: '운영체제',
    date: '2026-10-29'
  },
  {
    slug: 'ecc',
    title: '타원곡선 암호',
    sub: 'ECC · Elliptic Curve Cryptography · 楕円曲線暗号',
    summary: '짧은 열쇠로 같은 안전함을 내는 공개키 암호',
    category: '보안',
    date: '2026-10-22'
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
    slug: 'euc-control',
    title: 'EUC 통제 감사',
    sub: 'End User Computing control · EUC統制',
    summary: '현업이 직접 만든 엑셀·도구를 관리 대상으로 올려 점검하는 일',
    category: '업무 시스템',
    date: '2026-10-27'
  },
  {
    slug: 'ev-certificate',
    title: 'EV 인증서',
    sub: '확장 검증 인증서 · Extended Validation certificate · EV証明書',
    summary: '운영 주체가 실재하는 법인인지까지 확인하고 내주는 인증서',
    category: '보안',
    date: '2026-10-26'
  },
  {
    slug: 'file-descriptor',
    title: '파일 디스크립터',
    sub: '파일 기술자 · file descriptor · ファイルディスクリプタ',
    summary: '열어 둔 통로마다 운영체제가 붙여 주는 번호표',
    category: '운영체제',
    date: '2026-10-26'
  },
  {
    slug: 'fishbone-diagram',
    title: '특성요인도',
    sub: '이시카와 다이어그램 · fishbone diagram · 特性要因図',
    summary: '하나의 결과에 영향을 준 원인을 생선뼈 모양으로 펼친 그림',
    category: '품질관리',
    date: '2026-10-21'
  },
  {
    slug: 'fraud-triangle',
    title: '부정 트라이앵글 이론',
    sub: 'fraud triangle · 不正のトライアングル理論',
    summary: '부정은 기회·동기·정당화가 모두 모일 때 일어난다는 생각',
    category: '보안',
    date: '2026-10-26'
  },
  {
    slug: 'hacktivist',
    title: '핵티비스트',
    sub: 'hacktivist · ハクティビスト',
    summary: '돈이 아니라 주장을 알리려고 해킹하는 사람',
    category: '보안',
    date: '2026-10-23'
  },
  {
    slug: 'handshake',
    title: '핸드셰이크',
    sub: '핸드쉐이크 · 악수 · handshake · TLS 핸드셰이크 · 3-way handshake',
    summary: '본론 전에 방식과 신원을 맞추고 준비를 확인하는 인사 절차',
    category: '네트워크',
    date: '2026-11-02'
  },
  {
    slug: 'hash',
    title: '해시',
    sub: '해시 함수 · hash · ハッシュ',
    summary: '데이터를 정해진 길이의 지문 하나로 바꾸는 계산',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'hids',
    title: 'HIDS',
    sub: '호스트 침입 탐지 시스템 · Host-based IDS · ホスト型IDS',
    summary: '기기 한 대 안을 들여다보며 침입을 찾는 IDS',
    category: '보안',
    date: '2026-10-26'
  },
  {
    slug: 'histogram',
    title: '히스토그램',
    sub: '도수분포도 · histogram · ヒストグラム',
    summary: '값이 어느 구간에 몇 개씩 모여 있는지 보는 막대그림',
    category: '품질관리',
    date: '2026-10-21'
  },
  {
    slug: 'hot-standby',
    title: '핫 스탠바이 방식',
    sub: '핫 스탠바이 · hot standby · ホットスタンバイ方式 · 이중화 · 현용계 · 대기계 · 페일오버',
    summary: '예비 장비를 켜 둔 채 대기시켰다가 장애 시 곧바로 넘기는 이중화 방식',
    category: '품질관리',
    date: '2026-11-02'
  },
  {
    slug: 'html',
    title: 'HTML',
    sub: '에이치티엠엘 · HyperText Markup Language',
    summary: '웹 페이지의 뼈대와 뜻을 적는 언어',
    category: '웹',
    date: '2026-10-22'
  },
  {
    slug: 'icann',
    title: 'ICANN',
    sub: '아이칸 · 국제 인터넷 주소 관리 기구',
    summary: '인터넷의 이름과 번호가 겹치지 않도록 관리하는 기구',
    category: '네트워크',
    date: '2026-10-23'
  },
  {
    slug: 'ids',
    title: 'IDS',
    sub: '침입 탐지 시스템 · Intrusion Detection System · 侵入検知システム',
    summary: '침입으로 보이는 움직임을 알아채 알려 주는 시스템',
    category: '보안',
    date: '2026-10-26'
  },
  {
    slug: 'ietf',
    title: 'IETF',
    sub: '아이이티에프 · Internet Engineering Task Force',
    summary: '인터넷의 통신 규칙(RFC)을 만들고 다듬는 공개 모임',
    category: '네트워크',
    date: '2026-10-23'
  },
  {
    slug: 'information-security-audit-standard',
    title: '정보보안 감사 기준',
    sub: '정보보안 감사기준 · 情報セキュリティ監査基準 · information security audit standard · 일반기준 · 실시기준 · 보고기준',
    summary: '감사인이 어떻게 감사해야 하는지를 정해 둔 행동 기준',
    category: '보안',
    date: '2026-11-05'
  },
  {
    slug: 'information-security-management-standard',
    title: '정보보안 관리 기준',
    sub: '정보보안 관리기준 · 情報セキュリティ管理基準 · information security management standard · ISMS · ISO/IEC 27001',
    summary: '정보보안을 무엇에 비춰 볼지 적어 둔 점검 항목 모음',
    category: '보안',
    date: '2026-11-05'
  },
  {
    slug: 'ips',
    title: 'IPS',
    sub: '침입 방지 시스템 · Intrusion Prevention System · 侵入防止システム',
    summary: '침입으로 보이는 통신을 그 자리에서 끊어 버리는 시스템',
    category: '보안',
    date: '2026-10-26'
  },
  {
    slug: 'ipsec',
    title: 'IPsec',
    sub: '아이피섹 · IP Security',
    summary: 'IP 패킷 자체를 암호로 감싸는 규약. VPN의 바탕',
    category: '네트워크',
    date: '2026-10-27'
  },
  {
    slug: 'issue-tree',
    title: '이슈 트리',
    sub: '이슈트리 · How 트리 · 가설 트리 · issue tree · hypothesis tree',
    summary: '질문을 쪼개 가지마다 가설을 세우고 검증하는 나무 (How 트리)',
    category: '업무 시스템',
    date: '2026-10-30'
  },
  {
    slug: 'javascript',
    title: 'JavaScript',
    sub: '자바스크립트 · JS',
    summary: '웹 페이지를 움직이게 만드는 프로그래밍 언어',
    category: '웹',
    date: '2026-10-22'
  },
  {
    slug: 'jvn',
    title: 'JVN',
    sub: '일본 취약점 정보 포털 · Japan Vulnerability Notes',
    summary: '일본에서 취약점과 제조사 대응을 모아 공개하는 포털',
    category: '보안',
    date: '2026-10-27'
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
    slug: 'lan-analyzer',
    title: 'LAN 애널라이저',
    sub: '프로토콜 애널라이저 · 패킷 캡처 · 스니퍼 · LAN analyzer · LANアナライザ · protocol analyzer',
    summary: '네트워크에 흐르는 패킷을 붙잡아 속을 펼쳐 보는 도구',
    category: '네트워크',
    date: '2026-11-05'
  },
  {
    slug: 'lan-topology',
    title: 'LAN 접속 형태',
    sub: '토폴로지 · network topology · ネットワークトポロジー',
    summary: '기기를 어떤 모양으로 잇느냐 — 스타형·버스형·링형',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'linux',
    title: '리눅스',
    sub: 'Linux · 리눅스 커널 · Linux kernel',
    summary: '누구나 공짜로 쓰고 고칠 수 있는 운영체제의 심장(커널)',
    category: '운영체제',
    date: '2026-10-29'
  },
  {
    slug: 'load-balancing',
    title: '로드 밸런싱',
    sub: '부하 분산 · 로드 밸런서 · load balancing · load balancer · ロードバランシング',
    summary: '들어오는 요청을 여러 서버에 나눠 보내 몰림과 멈춤을 막는 방법',
    category: '네트워크',
    date: '2026-11-02'
  },
  {
    slug: 'logic-tree',
    title: '로직 트리',
    sub: '로직트리 · Why 트리 · logic tree · 논리 나무',
    summary: '문제를 MECE하게 쪼개 원인을 찾아가는 나무 (Why 트리)',
    category: '업무 시스템',
    date: '2026-10-30'
  },
  {
    slug: 'mece',
    title: 'MECE',
    sub: '미시 · 중복 없이 누락 없이 · Mutually Exclusive and Collectively Exhaustive · 漏れなくダブりなく',
    summary: '겹치지 않게, 빠짐없이 나누자는 생각 정리 원칙',
    category: '업무 시스템',
    date: '2026-10-29'
  },
  {
    slug: 'message-queue',
    title: '메시지 큐',
    sub: '메세지큐 · 메시지 대기열 · message queue (MQ) · メッセージキュー · 비동기 처리',
    summary: '보내는 쪽과 받는 쪽 사이에서 메시지를 줄 세워 쌓아 두는 중간 통로',
    category: '네트워크',
    date: '2026-11-02'
  },
  {
    slug: 'metadata',
    title: '메타데이터',
    sub: 'metadata · メタデータ · 데이터에 대한 데이터',
    summary: '데이터를 설명하는 데이터. 찾고 믿는 데 쓰이는 꼬리표',
    category: '업무 시스템',
    date: '2026-11-05'
  },
  {
    slug: 'mirror-port',
    title: '미러 포트',
    sub: '포트 미러링 · mirror port · port mirroring · ミラーポート · SPAN',
    summary: '다른 포트의 통신을 복사해서 내보내 주는 스위치 포트',
    category: '네트워크',
    date: '2026-11-05'
  },
  {
    slug: 'mtbf',
    title: 'MTBF',
    sub: '평균 고장 간격 · Mean Time Between Failures · 平均故障間隔',
    summary: '고장과 고장 사이에 평균 얼마나 버티는가',
    category: '품질관리',
    date: '2026-10-29'
  },
  {
    slug: 'mttr',
    title: 'MTTR',
    sub: '평균 복구 시간 · Mean Time To Repair · 平均修復時間',
    summary: '고장 뒤 다시 돌아오기까지 걸리는 평균 시간',
    category: '품질관리',
    date: '2026-10-29'
  },
  {
    slug: 'nextjs',
    title: 'Next.js',
    sub: '넥스트 제이에스',
    summary: 'React로 사이트를 만들 때 필요한 것을 갖춘 프레임워크',
    category: '웹',
    date: '2026-10-22'
  },
  {
    slug: 'nids',
    title: 'NIDS',
    sub: '네트워크 침입 탐지 시스템 · Network-based IDS · ネットワーク型IDS',
    summary: '네트워크를 흐르는 통신을 보며 침입을 찾는 IDS',
    category: '보안',
    date: '2026-10-26'
  },
  {
    slug: 'osi-model',
    title: 'OSI 참조 모델',
    sub: 'OSI reference model · OSI参照モデル',
    summary: '네트워크가 하는 일을 일곱 층으로 나눠 정리한 지도',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'packet',
    title: '패킷',
    sub: 'packet · パケット',
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
    sub: '파레토도 · Pareto chart · パレート図',
    summary: '원인을 많은 순서대로 세워 무엇부터 고칠지 정하는 그림',
    category: '품질관리',
    date: '2026-10-21'
  },
  {
    slug: 'php',
    title: 'PHP',
    sub: '피에이치피',
    summary: '서버에서 HTML을 만들어 내보내는 프로그래밍 언어',
    category: '웹',
    date: '2026-10-22'
  },
  {
    slug: 'positioning-matrix',
    title: '포지셔닝 매트릭스',
    sub: '포지셔닝 맵 · positioning matrix · positioning map · ポジショニングマップ',
    summary: '기준 두 개를 축으로 잡고 우리와 경쟁자를 찍어 빈 자리를 찾는 그림',
    category: '업무 시스템',
    date: '2026-11-03'
  },
  {
    slug: 'postprocessing',
    title: '후처리',
    sub: '후처리 · postprocessing · 後処理 · 뒷정리',
    summary: '본 작업이 내놓은 결과를 받는 쪽이 쓸 수 있는 모양으로 다듬는 단계',
    category: 'Python',
    date: '2026-11-01'
  },
  {
    slug: 'ppp',
    title: 'PPP',
    sub: '점대점 프로토콜 · Point-to-Point Protocol',
    summary: '두 지점을 선 하나로 직접 이을 때 쓰는 규약',
    category: '네트워크',
    date: '2026-10-27'
  },
  {
    slug: 'preprocessing',
    title: '전처리',
    sub: '데이터 전처리 · preprocessing · data cleaning · 前処理',
    summary: '본 작업에 들어가기 전에 데이터를 쓸 수 있는 모양으로 다듬는 단계',
    category: 'Python',
    date: '2026-11-01'
  },
  {
    slug: 'protocol',
    title: '프로토콜',
    sub: '통신 규약 · protocol · プロトコル',
    summary: '기계끼리 말이 통하도록 미리 맞춰 둔 약속',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'proxy-server',
    title: '프록시 서버',
    sub: '프록시 · 대리 서버 · proxy server · reverse proxy · プロキシサーバ',
    summary: '클라이언트와 서버 사이에서 통신을 대신 주고받아 주는 중계 서버',
    category: '네트워크',
    date: '2026-11-02'
  },
  {
    slug: 'public-private-key',
    title: '공개키-비밀키',
    sub: '비대칭키 · public key / private key · 公開鍵・秘密鍵',
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
    slug: 'raid5',
    title: 'RAID 5',
    sub: '레이드 5 · RAID 5 · RAID5 · 분산 패리티 · distributed parity · パリティ',
    summary: '패리티를 모든 디스크에 흩어 두어 한 개 고장까지 되살리는 방식',
    category: '품질관리',
    date: '2026-11-05'
  },
  {
    slug: 'rasis',
    title: 'RASIS',
    sub: '라시스 · 신뢰성 · 가용성 · 보수성 · 완전성 · 안전성 · Reliability · Availability · Serviceability · Integrity · Security',
    summary: '시스템의 믿음직함을 신뢰성·가용성·보수성·완전성·안전성으로 나눠 보는 평가 틀',
    category: '품질관리',
    date: '2026-11-02'
  },
  {
    slug: 'rc4',
    title: 'RC4',
    sub: '알씨 포 · Rivest Cipher 4',
    summary: '한때 널리 쓰였지만 약점이 드러나 금지된 공통키 암호',
    category: '보안',
    date: '2026-10-22'
  },
  {
    slug: 'rce',
    title: '원격 코드 실행',
    sub: 'Remote Code Execution (RCE) · リモートコード実行',
    summary: '멀리 있는 공격자가 남의 서버에서 명령을 돌리게 되는 취약점',
    category: '보안',
    date: '2026-10-29'
  },
  {
    slug: 'react',
    title: 'React',
    sub: '리액트',
    summary: '화면을 조각으로 나눠 만드는 JavaScript 라이브러리',
    category: '웹',
    date: '2026-10-22'
  },
  {
    slug: 'rfid',
    title: 'RFID',
    sub: '알에프아이디 · Radio Frequency Identification · 무선 주파수 인식 · 전자 태그 · NFC',
    summary: '전파로 태그에 든 번호를 닿지 않고 읽는 기술',
    category: '네트워크',
    date: '2026-11-02'
  },
  {
    slug: 'risk-acceptance',
    title: '위험 수용',
    sub: 'risk acceptance · リスク受容',
    summary: '알면서도 손대지 않기로 정하는 위험 대응',
    category: '보안',
    date: '2026-10-29'
  },
  {
    slug: 'risk-analysis-steps',
    title: '위험 분석 작업 순서',
    sub: '리스크 분석 순서 · リスク分析の作業順序 · risk analysis steps · 리스크 어세스먼트 · 정보자산 식별',
    summary: '자산을 꼽고 위협을 찾고 크기를 재어 우선순위를 정하는 차례',
    category: '보안',
    date: '2026-11-05'
  },
  {
    slug: 'risk-based-authentication',
    title: '위험 기반 인증',
    sub: 'Risk-Based Authentication (RBA) · リスクベース認証',
    summary: '상황이 수상한 정도에 따라 확인 절차의 세기를 바꾸는 방식',
    category: '보안',
    date: '2026-10-26'
  },
  {
    slug: 'risk-management-process',
    title: '위험관리 프로세스',
    sub: 'risk management process · リスクマネジメントプロセス (JIS Q 31000:2019)',
    summary: '위험을 다루는 일을 정해진 차례로 돌리는 틀',
    category: '보안',
    date: '2026-10-29'
  },
  {
    slug: 'rootkit',
    title: '루트킷',
    sub: 'rootkit · 루트권한 은닉 도구 · 스텔스',
    summary: '침입 뒤 자기 존재를 숨기려고 시스템의 답을 바꿔 다는 도구 묶음',
    category: '보안',
    date: '2026-11-02'
  },
  {
    slug: 'router',
    title: '라우터',
    sub: 'router · ルータ',
    summary: '네트워크 사이에서 다음 길을 골라 주는 장치',
    category: '네트워크',
    date: '2026-10-22'
  },
  {
    slug: 'rpo',
    title: 'RPO',
    sub: '목표 복구 시점 · Recovery Point Objective · 目標復旧時点',
    summary: '사고 때 어디까지의 자료를 포기할지 정한 목표',
    category: '보안',
    date: '2026-10-29'
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
    slug: 'rto',
    title: 'RTO',
    sub: '목표 복구 시간 · Recovery Time Objective · 目標復旧時間',
    summary: '멈춘 뒤 언제까지 돌려놓을지 정한 목표',
    category: '보안',
    date: '2026-10-29'
  },
  {
    slug: 'rust',
    title: 'Rust',
    sub: '러스트 · Rust programming language',
    summary: '빠르면서도 메모리 실수를 컴파일할 때 막아 주는 언어',
    category: '프로그래밍 언어',
    date: '2026-10-29'
  },
  {
    slug: 'safeguard',
    title: '세이프가드',
    sub: '보호 대책 · safeguard · セーフガード',
    summary: '위험을 줄이려고 실제로 걸어 두는 보호 대책',
    category: '보안',
    date: '2026-10-23'
  },
  {
    slug: 'sdn',
    title: 'SDN',
    sub: '소프트웨어 정의 네트워킹 · Software-Defined Networking · ソフトウェア定義ネットワーク · 오픈플로 · OpenFlow',
    summary: '길을 정하는 판단을 장비에서 떼어내 소프트웨어가 한곳에서 지휘하는 방식',
    category: '네트워크',
    date: '2026-11-05'
  },
  {
    slug: 'segment',
    title: '세그먼트',
    sub: 'segment · 네트워크 세그먼트 · TCP 세그먼트',
    summary: '큰 네트워크를 라우터로 나눈 한 구역 (TCP에서는 데이터 한 조각)',
    category: '네트워크',
    date: '2026-10-29'
  },
  {
    slug: 'server',
    title: '서버',
    sub: 'server · サーバ',
    summary: '요청을 받아 처리해 주는 쪽. 기계가 아니라 역할의 이름',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'session-hijacking',
    title: '세션 하이재킹',
    sub: '세션 가로채기 · session hijacking · セッションハイジャック',
    summary: '로그인한 사람의 출입증을 가로채 그 사람인 척하는 공격',
    category: '보안',
    date: '2026-10-23'
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
    slug: 'siem',
    title: 'SIEM',
    sub: 'Security Information and Event Management · セキュリティ情報イベント管理 · 보안 정보 이벤트 관리 · 로그 통합',
    summary: '흩어진 로그를 한곳에 모아 맞춰 보고 수상하면 알려 주는 체계',
    category: '보안',
    date: '2026-11-05'
  },
  {
    slug: 'social-engineering',
    title: '소셜 엔지니어링',
    sub: '사회공학 · 사회공학적 기법 · social engineering · ソーシャルエンジニアリング',
    summary: '기계가 아니라 사람을 속여 정보나 권한을 얻어 내는 수법',
    category: '보안',
    date: '2026-11-02'
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
    slug: 'spreadsheet',
    title: '스프레드시트',
    sub: 'spreadsheet · スプレッドシート',
    summary: '칸에 값과 수식을 넣어 계산이 저절로 이어지는 표 프로그램',
    category: '업무 시스템',
    date: '2026-10-27'
  },
  {
    slug: 'ssh',
    title: 'SSH',
    sub: '시큐어 셸 · Secure Shell',
    summary: '멀리 있는 서버에 암호화된 통로로 접속하는 방식',
    category: '네트워크',
    date: '2026-10-27'
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
    slug: 'ssl',
    title: 'SSL',
    sub: '보안 소켓 계층 · Secure Sockets Layer',
    summary: '통신을 암호로 감싸던 초기 규약. 지금은 모두 금지됨',
    category: '네트워크',
    date: '2026-10-27'
  },
  {
    slug: 'statement-of-applicability',
    title: '적용 선언서',
    sub: 'Statement of Applicability (SoA) · 適用宣言書',
    summary: '보안 대책을 무엇을 쓰고 무엇을 뺐는지 이유까지 밝힌 문서',
    category: '보안',
    date: '2026-10-27'
  },
  {
    slug: 'stderr',
    title: '표준에러',
    sub: 'stderr · standard error · 標準エラー出力',
    summary: '오류와 알림을 결과와 섞이지 않게 내보내는 통로',
    category: '운영체제',
    date: '2026-10-26'
  },
  {
    slug: 'stdout',
    title: '표준출력',
    sub: 'stdout · standard output · 標準出力',
    summary: '프로그램이 결과를 내보내는 기본 통로',
    category: '운영체제',
    date: '2026-10-26'
  },
  {
    slug: 'stepping-stone-attack',
    title: '경유지 공격',
    sub: '발판 공격 · 스테핑스톤 공격 · stepping-stone attack · 踏み台攻撃',
    summary: '먼저 뚫어 둔 남의 컴퓨터를 발판 삼아 진짜 표적을 치는 공격',
    category: '보안',
    date: '2026-11-02'
  },
  {
    slug: 'supply-chain-attack',
    title: '공급망 공격',
    sub: '서플라이 체인 공격 · 공급망 침해 · supply chain attack · サプライチェーン攻撃 · SBOM',
    summary: '표적이 믿고 받아 쓰는 것을 먼저 더럽혀 들어가는 공격',
    category: '보안',
    date: '2026-11-03'
  },
  {
    slug: 'symmetric-key',
    title: '공통키',
    sub: '대칭키 · symmetric key · 共通鍵',
    summary: '잠글 때와 열 때 같은 열쇠를 쓰는 암호 방식',
    category: '보안',
    date: '2026-10-20'
  },
  {
    slug: 'tkip',
    title: 'TKIP',
    sub: '티킵 · Temporal Key Integrity Protocol · 임시 키 무결성 프로토콜 · WPA',
    summary: 'WEP이 깨진 뒤 기존 장비를 그대로 쓰려고 만든 임시 무선 암호 방식',
    category: '네트워크',
    date: '2026-11-02'
  },
  {
    slug: 'tls',
    title: 'TLS',
    sub: '전송 계층 보안 · Transport Layer Security',
    summary: '인터넷 통신을 암호로 감싸는 지금의 표준',
    category: '네트워크',
    date: '2026-10-27'
  },
  {
    slug: 'trojan-horse',
    title: '트로이 목마',
    sub: '트로이안 · 트로이 목마 바이러스 · Trojan horse · トロイの木馬',
    summary: '쓸모 있는 프로그램인 척 들어와 뒤에서 다른 일을 하는 악성 프로그램',
    category: '보안',
    date: '2026-11-02'
  },
  {
    slug: 'typescript',
    title: 'TypeScript',
    sub: '타입스크립트 · TS',
    summary: 'JavaScript에 타입을 더해 실수를 미리 잡아 주는 언어',
    category: '웹',
    date: '2026-10-22'
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
    slug: 'vpn',
    title: 'VPN',
    sub: '브이피엔 · Virtual Private Network',
    summary: '공용 인터넷 위에 내는 암호화된 전용 통로',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'waf',
    title: 'WAF',
    sub: '웹 애플리케이션 방화벽 · Web Application Firewall',
    summary: 'HTTP 요청의 내용까지 읽어 걸러내는 방화벽',
    category: '보안',
    date: '2026-10-29'
  },
  {
    slug: 'wan',
    title: 'WAN',
    sub: '완 · Wide Area Network',
    summary: '멀리 떨어진 LAN들을 이어 주는 넓은 범위의 네트워크',
    category: '네트워크',
    date: '2026-10-21'
  },
  {
    slug: 'wbs',
    title: 'WBS',
    sub: '작업 분해 구조 · Work Breakdown Structure · 作業分解構成図',
    summary: '큰 일을 다룰 수 있는 크기로 쪼개 나무 모양으로 늘어놓은 것',
    category: '업무 시스템',
    date: '2026-10-27'
  },
  {
    slug: 'web-beacon',
    title: '웹 비콘',
    sub: '추적 픽셀 · 웹 버그 · 투명 GIF · web beacon · tracking pixel · web bug · ウェブビーコン',
    summary: '보이지 않는 작은 그림을 끼워 열람 사실을 기록하는 추적 장치',
    category: '웹',
    date: '2026-11-02'
  },
  {
    slug: 'what-tree',
    title: '요소 분해 트리',
    sub: '요소분해 트리 · What 트리 · element breakdown tree · 要素分解ツリー',
    summary: '큰 덩어리를 무엇으로 이루어졌나로 쪼개 구조를 보는 나무 (What 트리)',
    category: '업무 시스템',
    date: '2026-10-30'
  },
  {
    slug: 'wpa2',
    title: 'WPA2',
    sub: '더블유피에이 투 · Wi-Fi Protected Access 2',
    summary: '와이파이로 오가는 내용을 암호로 지키는 규격',
    category: '네트워크',
    date: '2026-10-22'
  },
  {
    slug: 'xss',
    title: 'XSS',
    sub: '크로스 사이트 스크립팅 · Cross-Site Scripting',
    summary: '사이트에 코드를 끼워 넣어 방문자 브라우저에서 실행시키는 공격',
    category: '보안',
    date: '2026-10-22'
  },
  {
    slug: 'zero-day',
    title: '제로데이',
    sub: 'zero-day · ゼロデイ',
    summary: '고칠 방법이 아직 없는 상태에서 알려진 취약점',
    category: '보안',
    date: '2026-10-23'
  }
];
