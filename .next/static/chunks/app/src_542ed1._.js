(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app/src_542ed1._.js", {

"[project]/src/components/search/SearchForm.tsx (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "SearchForm": ()=>SearchForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
function SearchForm(param) {
    let { searchPost } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
        className: "flex gap-1",
        onSubmit: searchPost,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "search",
                name: "postTitle",
                className: "text-black",
                placeholder: "Filter by sku"
            }, void 0, false, {
                fileName: "<[project]/src/components/search/SearchForm.tsx>",
                lineNumber: 6,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                type: "submit",
                children: "🔍"
            }, void 0, false, {
                fileName: "<[project]/src/components/search/SearchForm.tsx>",
                lineNumber: 12,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/search/SearchForm.tsx>",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = SearchForm;
var _c;
__turbopack_refresh__.register(_c, "SearchForm");

})()),
"[project]/src/lib/apolloClient.ts (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getClient": ()=>getClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@apollo/client/index.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$experimental$2d$nextjs$2d$app$2d$support$2f$dist$2f$ssr$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@apollo/experimental-nextjs-app-support/dist/ssr/index.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$experimental$2d$nextjs$2d$app$2d$support$2f$dist$2f$rsc$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@apollo/experimental-nextjs-app-support/dist/rsc/index.js (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const { getClient } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$experimental$2d$nextjs$2d$app$2d$support$2f$dist$2f$rsc$2f$index$2e$js__$28$ecmascript$29$__["registerApolloClient"](()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$experimental$2d$nextjs$2d$app$2d$support$2f$dist$2f$ssr$2f$index$2e$js__$28$ecmascript$29$__["NextSSRApolloClient"]({
        cache: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$index$2e$js__$28$ecmascript$29$__["InMemoryCache"](),
        link: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$index$2e$js__$28$ecmascript$29$__["HttpLink"]({
            uri: "http://localhost:4444/api/graphql"
        })
    });
});

})()),
"[project]/src/graphql/queries/POSTS_Q.ts (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "POSTS": ()=>POSTS
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@apollo/client/index.js (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const POSTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$index$2e$js__$28$ecmascript$29$__["gql"]`
  query Posts {
    posts {
      id
      title
      body
      createdAt
      author{
        id
        nickname
      }
    }
  }
`;

})()),
"[project]/src/components/search/HeaderSearch.tsx (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "HeaderSearch": ()=>HeaderSearch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$POSTS_Q$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries/POSTS_Q.ts (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/apolloClient.ts (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function HeaderSearch() {
    async function getPostInfo(title) {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$ts__$28$ecmascript$29$__["getClient"]().query({
            query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$POSTS_Q$2e$ts__$28$ecmascript$29$__["POSTS"],
            variables: {
                title
            }
        });
        const postInfo = data.posts[0];
        return postInfo;
    }
    const searchPost = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const postTitle = form.postTitle.value.trim();
        const post = await getPostInfo(postTitle);
        if (!post) {
            return "Post with such title doesn't exist";
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
        className: "flex gap-1",
        onSubmit: searchPost,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "search",
                name: "postTitle",
                className: "text-black",
                placeholder: "Filter by sku"
            }, void 0, false, {
                fileName: "<[project]/src/components/search/HeaderSearch.tsx>",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                type: "submit",
                children: "🔍"
            }, void 0, false, {
                fileName: "<[project]/src/components/search/HeaderSearch.tsx>",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/search/HeaderSearch.tsx>",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = HeaderSearch;
var _c;
__turbopack_refresh__.register(_c, "HeaderSearch");

})()),
}]);

//# sourceMappingURL=src_542ed1._.js.map