import { useCallback, useEffect, useRef, useState } from "react";
import Head from "flareact/head";
import Link from "flareact/link";
import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import { useRouter } from "flareact/router";
import { createPortal } from "react-dom";

const ACTION_KEY_DEFAULT = ["Ctrl ", "Control"];
const ACTION_KEY_APPLE = ["⌘", "Command"];

function Hit({ hit, children }) {
  return (
    <Link href="/docs/[slug]" as={hit.url}>
      <a>{children}</a>
    </Link>
  );
}

/**
 * All credit for this goes to Tailwind:
 * https://github.com/tailwindlabs/tailwindcss.com/blob/032c328bb7bef9340be84d5d0d33b25b6f171aa1/src/components/Search.js
 */
export default function DocsSearchInput() {
  const searchButtonRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState(null);
  const router = useRouter();
  const [actionKey, setActionKey] = useState();

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (e) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery]
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        setActionKey(ACTION_KEY_APPLE);
      } else {
        setActionKey(ACTION_KEY_DEFAULT);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://BH4D9OD16A-dsn.algolia.net"
          crossOrigin="true"
        />
      </Head>
      <button
        ref={searchButtonRef}
        onClick={onOpen}
        className="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          className="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>
          Quick search<span className="hidden sm:inline"> for anything</span>
        </span>
        {actionKey && (
          <span className="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md">
            <span className="sr-only">Press </span>
            <kbd className="font-sans">
              <abbr title={actionKey[1]} className="no-underline">
                {actionKey[0]}
              </abbr>
            </kbd>
            <span className="sr-only"> and </span>
            <kbd className="font-sans">K</kbd>
            <span className="sr-only"> to search</span>
          </span>
        )}
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            searchParameters={{
              distinct: 1,
            }}
            onClose={onClose}
            indexName="flareact"
            apiKey="450e58b4ff73372d228a59a6eab57613"
            appId="BH4D9OD16A"
            navigator={{
              navigate({ suggestionUrl }) {
                setIsOpen(false);
                router.push("/docs/[slug]", suggestionUrl);
              },
            }}
            hitComponent={Hit}
            transformItems={(items) => {
              return items.map((item) => {
                /**
                 * N.B. This hack is required because our site is indexed a bit strangely.
                 * The levels are off by one: we don't have a "category" e.g. "Getting Started"
                 * so the top-level result is always an empty string. This fixes that.
                 */
                if (!item._snippetResult) {
                  item.type = "lvl1";
                  item.hierarchy.lvl1 = item.hierarchy.lvl0;
                  item._snippetResult = {
                    content: { value: item.hierarchy.lvl0, matchLevel: "full" },
                    hierarchy: {
                      lvl1: { value: item.hierarchy.lvl0, matchLevel: "none" },
                    },
                  };
                }

                const a = document.createElement("a");
                a.href = item.url;

                const hash = a.hash === "#content-wrapper" ? "" : a.hash;

                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                };
              });
            }}
          />,
          document.body
        )}
    </>
  );
}
