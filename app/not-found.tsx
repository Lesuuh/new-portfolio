import { AlertCircle, ArrowLeft } from "./_components/Icons";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 text-neutral-100">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
          <AlertCircle className="h-6 w-6 text-red-400" />
        </div>

        <h1 className="mt-5 text-xl font-bold text-white">
          Project Not Found
        </h1>

        <p className="mt-2 text-sm leading-6 text-neutral-500">
          The project you&apos;re looking for could not be found.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-neutral-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
