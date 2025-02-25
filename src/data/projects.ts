import photograyTitle from '@images/photogray-title.png';
import photograyApp from '@images/photogray-app.png';
import photograyAdminPage from '@images/photogray-admin-page.png';
import photograyQrPage from '@images/photogray-qr-page.png';
import aprTitle from '@images/apr-title.png';
import ocupTitle from '@images/ocup-title.png';
import ocupPage from '@images/ocup-page.png';
import pawdlyTitle from '@images/pawdly-title.png';
import pawdlyUser from '@images/pawdly-user.png';
import pawdlyPartners from '@images/pawdly-partners.png';

export type Project = ProjectTitle | MainProject | SmallProject;

export interface ProjectTitle {
  id: number;
  category: string;
  titleImage: string;
}

export interface MainProject {
  id: number;
  category: string;
  mainImage: string;
  title: string;
  description: string;
  featureDetails: string[];
}

export interface SmallProject {
  id: number;
  category: string;
  smallProjects: {
    id: number;
    title: string;
    description: string;
  }[];
}

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    category: 'PHOTOGRAY',
    titleImage: photograyTitle,
  },
  {
    id: 1,
    category: 'PHOTOGRAY',
    mainImage: photograyApp,
    title: '포토그레이 앱',
    description:
      '포토그레이 부스의 4컷 사진 촬영 후 스탬프 적립, 포컷랭킹, 우주게임 등 다양한 기능을 제공하는 하이브리드 앱 기반 서비스',
    featureDetails: [
      '초기 프로젝트 빌딩 및 웹 서비스 → 앱 서비스 전환',
      '가상스크롤을 활용한 실시간랭킹 성능 최적화',
      'EXIF 세션 ID 검출 및 OCR 검증 기능 개발을 통한 포컷랭킹 사진 업로드 검수 자동화',
      '포컷랭킹 월드컵 게임 기능 구현',
      '우주게임(수박게임 변형) 기능 구현',
      '소셜 로그인 및 본인 인증 기능 구현',
    ],
  },
  {
    id: 2,
    category: 'PHOTOGRAY',
    mainImage: photograyAdminPage,
    title: '포토그레이 관리자 시스템',
    description:
      '포토그레이 지점 및 부스 관리, 매출 확인, 포컷랭킹 사진 검수, 우주게임 응모 관리 등 운영을 위한 다양한 기능을 제공하는 웹 기반 관리 시스템',
    featureDetails: [
      '초기 프로젝트 빌딩 및 구조설계',
      '관리자 페이지 공통 컴포넌트 최적화',
      'Storybook을 활용한 디자인 시스템 정리',
      '운영팀을 위한 통계 대시보드 구축',
      '소모품 주문 및 AS 신청 시스템 개발',
      '포토그레이 우주게임 응모 관리 시스템 구축',
      '다국어 지원 및 글로벌 서비스 확장 대비',
    ],
  },
  {
    id: 4,
    category: 'PHOTOGRAY',
    mainImage: photograyQrPage,
    title: '포토그레이 사진 다운로드 페이지',
    description:
      '포토그레이 부스에서 촬영된 사진의 원본 파일을 다운로드할 수 있는 웹페이지, 사진 인화 시 상단 QR 코드를 스캔하여 접속 가능',
    featureDetails: [
      '콜라보 이벤트별 UI 테마 적용 및 맞춤 퍼블리싱',
      '동영상 자동 재생 및 음성 재생(콜라보 한정) 기능 추가',
      'i18n 다국어 적용(한국어/영어/일본어/중국어/광둥어)',
    ],
  },
  {
    id: 1,
    category: 'APR',
    titleImage: aprTitle,
  },
  {
    id: 1,
    category: 'APR',
    smallProjects: [
      {
        id: 1,
        title: '글로벌피부과학연구원',
        description:
          '인체적용시험 공고 등록, 참가자 모집 및 신청 관리, 시험 진행 안내 등을 제공하는 피부 임상 연구 기관 웹페이지',
      },
      {
        id: 2,
        title: '메디큐브 피부진단 서비스',
        description:
          '메디큐브 팝업스토어 내에서 고객들이 본인의 피부를 촬영한 결과와 설문의 결과를 통해 피부 타입을 진단하고 제품을 추천해주는 서비스',
      },
      {
        id: 3,
        title: '에이피알 온라인 신문고',
        description:
          '에이피알 홈페이지 내, 회사 및 임직원들의 윤리경영 관련 비리에 대하여 제보할 수 있는 웹페이지',
      },
    ],
  },
  {
    id: 2,
    category: 'OCUP',
    titleImage: ocupTitle,
  },
  {
    id: 2,
    category: 'OCUP',
    mainImage: ocupPage,
    title: '오늘의 컵홀더',
    description: '케이팝 아티스트의 생일 카페 및 생일 이벤트 아카이빙 웹사이트',
    featureDetails: [
      '기획 및 디자인, 개발 과정 전체 참여',
      'Next.js 도입으로 SEO 최적화',
      'Supabase를 이용하여 DB 구축, Vercel 배포',
      'recoil을 활용한 전역 상태 관리',
      'Google Analytics를 활용한 방문자 트래킹',
      'Kakao Map api 주소 검색 및 지도 연결',
    ],
  },
  {
    id: 1,
    category: 'PAWDLY',
    titleImage: pawdlyTitle,
  },
  {
    id: 1,
    category: 'PAWDLY',
    mainImage: pawdlyUser,
    title: '포들리 유저 앱',
    description:
      '반려동물 보호자가 포들리 파트너사에 반려동물 미용 예약을 하고 반려동물 맞춤 알림장을 받아볼 수 있는 앱 서비스',
    featureDetails: [
      '기존 Vue.js로 개발 되어있던 코드를 React로 전환',
      '하이브리드 앱 내 웹앱 개발(React)',
      'Vite를 이용하여 빌드',
      'Zustand를 이용한 전역 상태관리',
      'CSS Module 도입하여 컴포넌트 스타일 중첩 방지',
      '소셜로그인, 본인인증, 결제 등 서드파티 모듈 사용',
    ],
  },
  {
    id: 2,
    category: 'PAWDLY',
    mainImage: pawdlyPartners,
    title: '포들리 파트너스 센터 앱',
    description:
      '포들리 파트너사가 고객 예약을 조회하고, 일정 관리 및 알림장 작성을 할 수 있는 웹·앱 서비스',
    featureDetails: [
      '구글 플레이스토어 배포(2022.02.16)',
      '앱스토어 배포(2022.02.22)',
    ],
  },
];
