import { store } from "@/store";
import { checkSession } from "@/store/session";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

const Page = () => {
  // ****** Session variables - Redux *******
  const sessionUser: any = store.getState().session.user;
  const thereIsASession = checkSession(sessionUser);

  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center">
      <div className="text-2xl">🚀 N2PMT Full-stack Template</div>
      <Link href="https://github.com/vlhsmylv/n2pmt-template">
        <div className="flex items-center gap-1 text-xl">
          <span className="text-2xl ease-in-out duration-200 hover:text-gray-700">
            <AiOutlineGithub />
          </span>{" "}
          <span className="hover:underline">Github</span>
        </div>
      </Link>
      {thereIsASession ? (
        `Welcome back ${sessionUser.username}!`
      ) : (
        <Link href={"/signin"} className="underline">
          Sign In now!
        </Link>
      )}
    </div>
  );
};

export default Page;
