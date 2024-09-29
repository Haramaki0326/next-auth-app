import Link from "next/link";
import { SignIn } from "./signin-button";
import { SignOut } from "./signout-button";
import Image from "next/image";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function Header() {
  const session = await auth();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-bold">
            HOME
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <div>
                {session?.user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Image
                        src={session.user.image!}
                        alt="User avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>プロフィール</DropdownMenuItem>
                      <DropdownMenuItem>設定</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <SignOut />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <SignIn />
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
