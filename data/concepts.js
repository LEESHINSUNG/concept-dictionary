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
    slug: 'background',
    title: '백그라운드',
    sub: '백그라운드 실행 · background · 포그라운드 · foreground',
    summary: '프로그램을 뒤에서 돌게 맡기고 바로 다른 일을 하는 실행 방식',
    category: '운영체제',
    date: '2026-10-29'
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
    slug: 'dns-cache-poisoning',
    title: 'DNS 캐시 포이즈닝',
    sub: 'DNS cache poisoning · DNSキャッシュポイズニング',
    summary: '주소록에 가짜 답을 심어 엉뚱한 서버로 보내는 공격',
    category: '보안',
    date: '2026-10-27'
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
    slug: 'mece',
    title: 'MECE',
    sub: '미시 · 중복 없이 누락 없이 · Mutually Exclusive and Collectively Exhaustive · 漏れなくダブりなく',
    summary: '겹치지 않게, 빠짐없이 나누자는 생각 정리 원칙',
    category: '업무 시스템',
    date: '2026-10-29'
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
    slug: 'ppp',
    title: 'PPP',
    sub: '점대점 프로토콜 · Point-to-Point Protocol',
    summary: '두 지점을 선 하나로 직접 이을 때 쓰는 규약',
    category: '네트워크',
    date: '2026-10-27'
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
    slug: 'risk-acceptance',
    title: '위험 수용',
    sub: 'risk acceptance · リスク受容',
    summary: '알면서도 손대지 않기로 정하는 위험 대응',
    category: '보안',
    date: '2026-10-29'
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
    slug: 'symmetric-key',
    title: '공통키',
    sub: '대칭키 · symmetric key · 共通鍵',
    summary: '잠글 때와 열 때 같은 열쇠를 쓰는 암호 방식',
    category: '보안',
    date: '2026-10-20'
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
