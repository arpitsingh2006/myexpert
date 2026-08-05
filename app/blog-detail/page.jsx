import { Suspense } from "react";
import BlogDetailPage from "./BlogDetailPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="container py-5">
          <h3>Loading...</h3>
        </div>
      }
    >
      <BlogDetailPage />
    </Suspense>
  );
}