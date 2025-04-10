import Link from "next/link";
import { Icon } from "../Common/Icon";

export function UserNavigation() {
  return (
    <>
      <ul className="flex justify-between gap-5 text-sm text-secondary-800">
        <li>
          <Link href="/mypage" className="flex items-center gap-1">
            <span>
              <Icon iconType="personStroke" size="s" fill="#60799A" />
            </span>
            <p>내정보</p>
          </Link>
        </li>
        <li>
          <Link href="/mypage" className="flex items-center gap-1">
            <span>
              <Icon iconType="setting" size="s" fill="#60799A" />
            </span>
            <p>계정관리</p>
          </Link>
        </li>
        <li>
          <Link href="/mypage" className="flex items-center gap-1">
            <span>
              <Icon iconType="logout" size="s" fill="#60799A" />
            </span>
            <p>내정보</p>
          </Link>
        </li>
      </ul>
    </>
  );
}
