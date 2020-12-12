import BaseLayout from "./BaseLayout";

export default function PageLayout({ children }) {
  return (
    <BaseLayout>
      <div className="pt-10 pb-24 lg:pb-16 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </BaseLayout>
  );
}
