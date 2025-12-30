import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { LandingPage } from "@/pages/LandingPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { InterviewsPage } from "@/pages/InterviewsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "interviews",
        element: <InterviewsPage />,
      },
    ],
  },
]);
