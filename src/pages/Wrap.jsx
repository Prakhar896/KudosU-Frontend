import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Wrap() {
  return (
    <main className="flex flex-col items-center p-2 ">
      <div className="flex justify-center items-center content-center">
        <Link to="/">
          {" "}
          <ArrowLeftIcon className="w-10 h-10 absolute  top-10 left-5" />
        </Link>
        <h1 className="text-4xl font-extrabold flex-1">KudosWrap</h1>
      </div>
      <h1 className="text-2xl my-10">
        You received <strong className="text-4xl">10</strong> affimations this
        week
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className="mb-2">Little Teacher</CardTitle>
          <CardDescription>
            You are affirmed for helping your peers in their academic work
          </CardDescription>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          <p>6 affirmations</p>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="mb-2">Helping Hand</CardTitle>
          <CardDescription>
            You are affirmed for helping your peers in their daily routines
          </CardDescription>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          <p>4 affirmations</p>
        </CardContent>
      </Card>
    </main>
  );
}
export default Wrap;
