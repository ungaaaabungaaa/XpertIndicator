import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

import {
    IconTrendingUp,
    IconChartBubble,
    IconAlertCircle,
    IconGauge,
    IconReportAnalytics,
    IconCalendarEvent,
  } from "@tabler/icons-react";

export function Simple_Bento() {
  const features = [
    {
        title: "Real-Time Market Insights",
        description:
          "Stay ahead with real-time analysis and insights tailored for every market move.",
        icon: <IconTrendingUp />,
      },
      {
        title: "Simplified Technical Analysis",
        description:
          "Access key technical indicators and patterns effortlessly, with no complexity.",
        icon: <IconChartBubble />,
      },
      {
        title: "Risk Management Alerts",
        description:
          "Get notified of high-risk conditions to make informed decisions and minimize losses.",
        icon: <IconAlertCircle />,
      },
      {
        title: "Customizable Indicators",
        description:
          "Tailor your trading strategy with flexible settings to match your unique style.",
        icon: <IconAdjustmentsBolt />,
      },
      {
        title: "Automated Signal Generation",
        description:
          "Receive automated buy/sell signals based on advanced algorithms and analysis.",
        icon: <IconGauge />,
      },
      {
        title: "Comprehensive Market Reports",
        description:
          "Access in-depth reports and analytics to understand the market's bigger picture.",
        icon: <IconReportAnalytics />,
      },
      {
        title: "Profit Potential Calculator",
        description:
          "Calculate potential returns before entering a trade, helping you maximize gains.",
        icon: <IconCurrencyDollar />,
      },
      {
        title: "Event-Based Alerts",
        description:
          "Stay informed about key economic events that impact markets directly.",
        icon: <IconCalendarEvent />,
      },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-[#5350F2] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
