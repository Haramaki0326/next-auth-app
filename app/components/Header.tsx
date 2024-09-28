import Link from "next/link";
import { SignIn } from "./signin-button";
import { SignOut } from "./signout-button";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Header() {
  // const { data: session, status } = useSession();
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
                  <div className="flex items-center space-x-4">
                    <Image
                      src={session.user.image!}
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <SignOut />
                  </div>
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
