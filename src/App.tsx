import { Skeleton } from "@/components/ui/skeleton";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const PackagesPage = lazy(() => import("@/pages/PackagesPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const TourDetailPage = lazy(() => import("@/pages/TourDetailPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const HotelsPage = lazy(() => import("@/pages/HotelsPage"));
const FlightsPage = lazy(() => import("@/pages/FlightsPage"));
const TrainsPage = lazy(() => import("@/pages/TrainsPage"));
const ForexPage = lazy(() => import("@/pages/ForexPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const IndianToursPage = lazy(() => import("@/pages/IndianToursPage"));
const InternationalToursPage = lazy(
  () => import("@/pages/InternationalToursPage"),
);
const HoneymoonPackagesPage = lazy(
  () => import("@/pages/HoneymoonPackagesPage"),
);
const CorporateToursPage = lazy(() => import("@/pages/CorporateToursPage"));

const PageLoader = () => (
  <div className="min-h-screen flex flex-col gap-4 p-8 bg-background">
    <Skeleton className="h-16 w-full rounded-xl" />
    <Skeleton className="h-64 w-full rounded-xl" />
    <div className="grid grid-cols-3 gap-4">
      <Skeleton className="h-48 rounded-xl" />
      <Skeleton className="h-48 rounded-xl" />
      <Skeleton className="h-48 rounded-xl" />
    </div>
  </div>
);

const rootRoute = createRootRoute({
  notFoundComponent: () => (
    <Suspense fallback={<PageLoader />}>
      <NotFoundPage />
    </Suspense>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AboutPage />
    </Suspense>
  ),
});

const packagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/packages",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PackagesPage />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ContactPage />
    </Suspense>
  ),
});

const tourDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tour/$id",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TourDetailPage />
    </Suspense>
  ),
});

const hotelsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hotels",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HotelsPage />
    </Suspense>
  ),
});

const flightsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/flights",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FlightsPage />
    </Suspense>
  ),
});

const trainsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trains",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TrainsPage />
    </Suspense>
  ),
});

const forexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forex",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ForexPage />
    </Suspense>
  ),
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <GalleryPage />
    </Suspense>
  ),
});

const indianToursRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/indian-tours",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <IndianToursPage />
    </Suspense>
  ),
});

const internationalToursRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/international-tours",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <InternationalToursPage />
    </Suspense>
  ),
});

const honeymoonPackagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/honeymoon-packages",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HoneymoonPackagesPage />
    </Suspense>
  ),
});

const corporateToursRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/corporate-tours",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CorporateToursPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  packagesRoute,
  contactRoute,
  tourDetailRoute,
  hotelsRoute,
  flightsRoute,
  trainsRoute,
  forexRoute,
  galleryRoute,
  indianToursRoute,
  internationalToursRoute,
  honeymoonPackagesRoute,
  corporateToursRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
