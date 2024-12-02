import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const datas = [
  {
    name: "test",
    email: "test@gmail.com",
    department: "테스트부서",
    authority: "테스트권한",
    registDate: "2024.12.02",
    lastConnectTime: "2024.12.02",
    edit: "수정",
  },
];

export function DataTable() {
  return (
    <Table>
      <TableHeader className="bg-black-100 text-black-600">
        <TableRow className="text-center">
          <TableHead className="w-[85px] text-center">이름</TableHead>
          <TableHead>ID(이메일)</TableHead>
          <TableHead>부서</TableHead>
          <TableHead>권한</TableHead>
          <TableHead>등록일</TableHead>
          <TableHead>최근 접속시간</TableHead>
          <TableHead>수정</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {datas && datas.length > 0 ? (
          datas.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.department}</TableCell>
              <TableCell>{data.authority}</TableCell>
              <TableCell>{data.registDate}</TableCell>
              <TableCell>{data.lastConnectTime}</TableCell>
              <TableCell>{data.edit}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow className="w-full h-full text-center">
            <TableCell>검색 결과가 없습니다.</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
