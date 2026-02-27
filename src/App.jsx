import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import Expertise from "./pages/Expertise";
import Investors from "./pages/Investors";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";

// Legal Pages (NEW)
import PrivacyPolicy from "./pages/privacy";
import TermsAndConditions from "./pages/terms";
import CookiePolicy from "./pages/cookie";

// Services
import ApplicationEngineering from "./pages/services/ApplicationEngineering";
import Cloud from "./pages/services/Cloud";
import DevOps from "./pages/services/DevOps";
import DataEngineering from "./pages/services/DataEngineering";
import CloudSaaS from "./pages/services/CloudSaaS";
import QualityEngineering from "./pages/services/QualityEngineering";
import UiUx from "./pages/services/UiUx";
import Mobility from "./pages/services/Mobility";
import ERP from "./pages/services/erp";

// Application Engineering Sub-services
import Transformations from "./pages/services/Transformations";
import ModernDevelopment from "./pages/services/ModernDevelopment";
import LifecycleManagement from "./pages/services/LifecycleManagement";
import Python from "./pages/services/Python";
import DotNet from "./pages/services/DotNet";
import Nodejs from "./pages/services/Nodejs";
import React from "./pages/services/React";
import Angular from "./pages/services/Angular";

// Cloud SaaS Sub-services
import Workday from "./pages/services/Workday";
import Salesforce from "./pages/services/Salesforce";
import Dynamics from "./pages/services/Dynamics";
import ServiceNow from "./pages/services/ServiceNow";

// Cloud Sub-services
import AWS from "./pages/services/AWS";
import Azure from "./pages/services/Azure";
import GCP from "./pages/services/GCP";
import CloudMigration from "./pages/services/CloudMigration";

// Quality Engineering Sub-services
import AutomationTesting from "./pages/services/AutomationTesting";
import ContinuousTesting from "./pages/services/ContinuousTesting";
import PerformanceTesting from "./pages/services/PerformanceTesting";
import Selenium from "./pages/services/Selenium";

// Data Engineering Sub-services
import ETL from "./pages/services/ETL";
import DataLakes from "./pages/services/DataLakes";
import Warehousing from "./pages/services/Warehousing";
import Analytics from "./pages/services/Analytics";

// DevOps Sub-services
import CICD from "./pages/services/CICD";
import Kubernetes from "./pages/services/Kubernetes";
import IaC from "./pages/services/IaC";
import Monitoring from "./pages/services/Monitoring";

// UI/UX Sub-services
import UXStrategy from "./pages/services/UXStrategy";
import Frontend from "./pages/services/Frontend";
import DesignSystems from "./pages/services/DesignSystems";

// Mobility Sub-services
import NativeApps from "./pages/services/NativeApps";
import CrossPlatform from "./pages/services/CrossPlatform";
import EnterpriseMobility from "./pages/services/EnterpriseMobility";


// Case Studies
import DigitalTransformation from "./pages/services/DigitalTransformation";
import LifeSciencesInnovation from "./pages/services/LifeSciencesInnovation";
import FinancialServicesModernization from "./pages/services/FinancialServicesModernization";
import HedgeFundPlatforms from "./pages/services/HedgeFundPlatforms";
import GenAIEnablement from "./pages/services/GenAIEnablement";
import MuleSoft from "./pages/services/MuleSoft";

import Playwright from "./pages/services/Playwright";


import SmarterBusinessSolutions from "./pages/services/SmarterBusinessSolutions";
import Airflow from "./pages/services/Airflow";
import Kafka from "./pages/services/Kafka";
import ScrollToTop from "./components/ScrollToTop";




export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith("/services")) {
      return;
    }

    const handleServiceCtaRedirect = (event) => {
      const button = event.target.closest("button");

      if (!button) {
        return;
      }

      const shouldRedirect = button.matches(
        ".cta-btn, .cta-btn-outline, .cta-connect, .cta-button, .cta-white-btn, .cta-orange-btn"
      );

      if (!shouldRedirect) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();
      navigate("/contact");
    };

    document.addEventListener("click", handleServiceCtaRedirect);

    return () => {
      document.removeEventListener("click", handleServiceCtaRedirect);
    };
  }, [location.pathname, navigate]);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* MAIN ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services/saas/mulesoft" element={<MuleSoft />} />
        <Route path="/services/qa/playwright" element={<Playwright />} />
        <Route path="/services/qa/automation" element={<AutomationTesting />} />


        <Route path="/services/qa/performance" element={<PerformanceTesting />} />
        <Route path="/services/data/kafka" element={<Kafka />} />
        <Route path="/services/devops/k8s" element={<Kubernetes />} />

        <Route path="/services/devops/azure" element={<Azure />} />

        <Route path="/services/ux/strategy" element={<UXStrategy />} />
        <Route path="/services/ux/frontend" element={<Frontend />} />
        <Route path="/services/ui-ux/design-systems" element={<DesignSystems />} />


        <Route path="/services/ux/systems" element={<DesignSystems />} />
        <Route path="/services/ux/accessibility" element={<DesignSystems />} />
        <Route path="/services/mobility/cross" element={<CrossPlatform />} />
        <Route path="/services/mobility/ui" element={<UiUx />} />



        {/* CASE STUDIES */}
        <Route
          path="/case-study/digital-transformation"
          element={<DigitalTransformation />}
        />
        <Route
          path="/case-study/life-sciences-innovation"
          element={<LifeSciencesInnovation />}
        />
        <Route
          path="/case-study/financial-services-modernization"
          element={<FinancialServicesModernization />}
        />
        <Route
          path="/case-study/hedge-fund-platforms"
          element={<HedgeFundPlatforms />}
        />
        <Route
          path="/case-study/genai-enablement"
          element={<GenAIEnablement />}
        />
        <Route
          path="/case-study/smarter-business-solutions"
          element={<SmarterBusinessSolutions />}
        />


        {/* SERVICES */}
        <Route path="/services/application-engineering" element={<ApplicationEngineering />} />
        <Route path="/services/cloud" element={<Cloud />} />
        <Route path="/services/devops" element={<DevOps />} />
        <Route path="/services/data-engineering" element={<DataEngineering />} />
        <Route path="/services/cloud-saas" element={<CloudSaaS />} />
        <Route path="/services/quality-engineering" element={<QualityEngineering />} />
        <Route path="/services/ui-ux" element={<UiUx />} />
        <Route path="/services/mobility" element={<Mobility />} />
        <Route path="/services/erp" element={<ERP />} />

        {/* APPLICATION ENGINEERING SUB-SERVICES */}
        <Route path="/services/app-eng/transformations" element={<Transformations />} />
        <Route path="/services/app-eng/modern-development" element={<ModernDevelopment />} />
        <Route path="/services/app-eng/lifecycle-management" element={<LifecycleManagement />} />
        <Route path="/services/app-eng/python" element={<Python />} />
        <Route path="/services/app-eng/dotnet" element={<DotNet />} />
        <Route path="/services/app-eng/nodejs" element={<Nodejs />} />
        <Route path="/services/app-eng/frontend" element={<React />} />
        <Route path="/services/app-eng/angular" element={<Angular />} />
        <Route path="/services/data/etl" element={<ETL />} />
        <Route path="/services/data/warehousing" element={<Warehousing />} />

        <Route path="/services/data/etl" element={<ETL />} />
        <Route path="/services/data/warehousing" element={<Warehousing />} />
        <Route path="/services/data/airflow" element={<Airflow />} />


        {/* CLOUD SAAS SUB-SERVICES */}
        <Route path="/services/saas/workday" element={<Workday />} />
        <Route path="/services/saas/salesforce" element={<Salesforce />} />
        <Route path="/services/saas/dynamics" element={<Dynamics />} />
        <Route path="/services/saas/servicenow" element={<ServiceNow />} />

        {/* CLOUD SUB-SERVICES */}
        <Route path="/services/cloud/aws" element={<AWS />} />
        <Route path="/services/cloud/azure" element={<Azure />} />
        <Route path="/services/cloud/gcp" element={<GCP />} />
        <Route path="/services/cloud/migration" element={<CloudMigration />} />

        {/* QUALITY ENGINEERING SUB-SERVICES */}
        <Route path="/services/quality-engineering/automation" element={<AutomationTesting />} />
        <Route path="/services/quality-engineering/continuous-testing" element={<ContinuousTesting />} />
        <Route path="/services/quality-engineering/performance" element={<PerformanceTesting />} />
        <Route path="/services/qa/selenium" element={<Selenium />} />

        {/* DATA ENGINEERING SUB-SERVICES */}
        <Route path="/services/data-engineering/etl" element={<ETL />} />
        <Route path="/services/data-engineering/data-lakes" element={<DataLakes />} />
        <Route path="/services/data-engineering/warehousing" element={<Warehousing />} />
        <Route path="/services/data-engineering/analytics" element={<Analytics />} />

        {/* DEVOPS SUB-SERVICES */}
        <Route path="/services/devops/cicd" element={<CICD />} />
        <Route path="/services/devops/kubernetes" element={<Kubernetes />} />
        <Route path="/services/devops/k8s" element={<Kubernetes />} />
        <Route path="/services/devops/iac" element={<IaC />} />
        <Route path="/services/devops/monitoring" element={<Monitoring />} />

        {/* UI/UX SUB-SERVICES */}
        <Route path="/services/ui-ux/ux-strategy" element={<UXStrategy />} />
        <Route path="/services/ui-ux/frontend" element={<Frontend />} />
        <Route path="/services/ui-ux/design-systems" element={<DesignSystems />} />

        {/* MOBILITY SUB-SERVICES */}
        <Route path="/services/mobility/native" element={<NativeApps />} />
        <Route path="/services/mobility/cross-platform" element={<CrossPlatform />} />
        <Route path="/services/mobility/enterprise" element={<EnterpriseMobility />} />

        {/* LEGAL PAGES (NEW) */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}