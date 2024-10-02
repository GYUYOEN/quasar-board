import { QTableColumn } from 'quasar';

export const postColumn: QTableColumn[] = [
  {
    name: 'post_id',
    label: '게시판',
    align: 'left',
    field: 'post_id',
  },
  {
    name: 'post_title',
    label: '제목',
    align: 'left',
    field: 'post_title',
  },
  {
    name: 'post_username',
    label: '작성자',
    align: 'left',
    field: 'post_username',
  },
  {
    name: 'mem_address3',
    label: '부서',
    align: 'left',
    field: 'mem_address3',
  },
  {
    name: 'post_datetime',
    label: '작성일',
    align: 'left',
    field: 'post_datetime',
  },
  {
    name: 'post_hit',
    label: '조회수',
    align: 'left',
    field: 'post_hit',
  },
];

export const menuList = [
  {
    icon: '',
    label: '전체공지글보기',
    route: '/notice_posts',
    separator: false,
  },
  {
    icon: '',
    label: '전체게시글보기',
    route: '/posts',
    separator: true,
  },
  {
    icon: '',
    label: '업무연락',
    route: '/board/b-c-1',
    separator: false,
  },
  {
    icon: '',
    label: '전사공지',
    route: '/board/b-c-2',
    separator: false,
  },
  {
    icon: '',
    label: '본사공지',
    route: '/board/b-c-3',
    separator: false,
  },
  {
    icon: '',
    label: '그룹공지',
    route: '/board/b-c-4',
    separator: true,
  },
  {
    icon: '',
    label: '우리뉴스',
    route: '/board/b-b-1',
    separator: false,
  },
  {
    icon: '',
    label: '관리업관련 정보',
    route: '/board/b-b-2',
    separator: false,
  },
  {
    icon: '',
    label: '우리관리 지식인',
    route: '/board/b-b-3',
    separator: false,
  },
  {
    icon: '',
    label: '유용한 업무팁 공유',
    route: '/board/b-b-4',
    separator: false,
  },
  {
    icon: '',
    label: 'CS자료실',
    route: '/board/b-b-5',
    separator: false,
  },
  {
    icon: '',
    label: '채용정보',
    route: '/board/b-b-6',
    separator: false,
  },
  {
    icon: '',
    label: '사내제안',
    route: '/board/b-b-7',
    separator: false,
  },
  {
    icon: '',
    label: '공동구매',
    route: '/board/b-b-9',
    separator: false,
  },
  {
    icon: '',
    label: '전산시스템 문의',
    route: '/board/b-b-8',
    separator: true,
  },
  {
    icon: '',
    label: '관리소장직',
    route: '/board/b-a-1',
    separator: false,
  },
  {
    icon: '',
    label: '관리직',
    route: '/board/b-a-2',
    separator: false,
  },
  {
    icon: '',
    label: '기술직',
    route: '/board/b-a-3',
    separator: false,
  },
  {
    icon: '',
    label: '경리직',
    route: '/board/b-a-4',
    separator: false,
  },
  {
    icon: '',
    label: '서무직',
    route: '/board/b-a-5',
    separator: false,
  },
  {
    icon: '',
    label: '커뮤니티직',
    route: '/board/b-a-6',
    separator: false,
  },
  {
    icon: '',
    label: '자유토크',
    route: '/board/b-a-7',
    separator: false,
  },
  {
    icon: '',
    label: '경조사',
    route: '/board/b-a-8',
    separator: true,
  },
  {
    icon: '',
    label: '동호회일반',
    route: '/board/club-1',
    separator: false,
  },
  {
    icon: '',
    label: '산악회',
    route: '/board/club-2',
    separator: false,
  },
  {
    icon: '',
    label: '여소회',
    route: '/board/club-3',
    separator: false,
  },
];
