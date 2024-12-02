import Link from "next/link";
import { CustomIcon } from "../CustomIcon";

export function UserNav() {
  return (
    <>
      <ul className="flex justify-between gap-5 text-sm text-secondary-800">
        <li>
          <Link href="/mypage" className="flex items-center gap-1">
            <span>
              <CustomIcon iconType="personStroke" size="s" />
            </span>
            <p>내정보</p>
          </Link>
        </li>
        <li>
          <Link href="/mypage" className="flex items-center gap-1">
            <span>
              <CustomIcon iconType="setting" size="s" />
            </span>
            <p>계정관리</p>
          </Link>
        </li>
        <li>
          <Link href="/mypage" className="flex items-center gap-1">
            <span>
              <CustomIcon iconType="logout" size="s" />
            </span>
            <p>내정보</p>
          </Link>
        </li>
      </ul>
    </>
  );
}
