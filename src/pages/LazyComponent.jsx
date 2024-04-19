import React, { lazy, Suspense } from "react";
import { Loading } from "./";

const LazyComponent = (importStatement) => {
  const Component = lazy(importStatement);
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyComponent;
