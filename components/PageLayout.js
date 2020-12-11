import Header from "./Header";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-50">
      <Header onOpen={() => {}} />
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        {children}
      </div>
    </div>
  );
}
