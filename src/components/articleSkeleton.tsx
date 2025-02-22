import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export default function ArticleSkeleton() {
  return (
    <Card className="aspect-square w-full max-w-72 min-w-60 sm:min-w-72 md:min-w-80 grid grid-rows-3 border-none shadow-none">
      <CardHeader className="relative row-span-2 bg-none overflow-hidden w-full">
        <Skeleton className="absolute inset-0 m-0" />
        {/* <Skeleton className="absolute top-2 left-2 h-6 w-20" /> */}
      </CardHeader>

      <div className="row-span-1 flex flex-col justify-between px-2 py-2">
        <CardContent className="bg-white rounded-b-lg p-0 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-20" />
        </CardContent>
        <CardFooter className="flex justify-between items-center p-0">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </CardFooter>
      </div>
    </Card>
  )
}
