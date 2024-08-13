import { QTableColumn } from 'quasar';

export const postColumn: QTableColumn[] = [
  {
    name: 'brdId',
    label: '게시판',
    align: 'left',
    field: 'brdId',
  },
  {
    name: 'postTitle',
    label: '제목',
    align: 'left',
    field: 'postTitle',
  },
  {
    name: 'writer',
    label: '작성자',
    align: 'left',
    field: 'writer',
  },
  {
    name: 'department',
    label: '부서',
    align: 'left',
    field: 'department',
  },
  {
    name: 'postDatetime',
    label: '작성일',
    align: 'left',
    field: 'postDatetime',
  },
  {
    name: 'postHit',
    label: '조회수',
    align: 'left',
    field: 'postHit',
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
  // {
  //   icon: '',
  //   label: '업무연락',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '전사공지',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '본사공지',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '그룹공지',
  //   type: '',
  //   separator: true,
  // },
  // {
  //   icon: '',
  //   label: '우리뉴스',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '관리업관련정보',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '우리관리 지식인',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '유용힌 업무팁 공유',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: 'CS자료실',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '채용정보',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '사내제안',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '공동구매',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '전산시스템 문의',
  //   type: '',
  //   separator: true,
  // },
  // {
  //   icon: '',
  //   label: '관리소장직',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '관리직',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '기술직',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '경리직',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '서무직',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '커뮤니티직',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '자유토크',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '경조사',
  //   type: '',
  //   separator: true,
  // },
  // {
  //   icon: '',
  //   label: '동호회일반',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '산악회',
  //   type: '',
  //   separator: false,
  // },
  // {
  //   icon: '',
  //   label: '여소회',
  //   type: '',
  //   separator: false,
  // },
];
