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
