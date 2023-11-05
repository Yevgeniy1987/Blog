(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app/src_components_search_HeaderSearch_tsx_61ecca._.js", {

"[project]/src/components/search/HeaderSearch.tsx (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "HeaderSearch": ()=>HeaderSearch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$POST_Q$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries/POST_Q.ts (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/apolloClient.ts (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function HeaderSearch() {
    async function getPostInfo(title) {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$ts__$28$ecmascript$29$__["getClient"]().query({
            query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$POST_Q$2e$ts__$28$ecmascript$29$__["POST"],
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
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                type: "submit",
                children: "🔍"
            }, void 0, false, {
                fileName: "<[project]/src/components/search/HeaderSearch.tsx>",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/search/HeaderSearch.tsx>",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = HeaderSearch;
var _c;
__turbopack_refresh__.register(_c, "HeaderSearch");

})()),
}]);

//# sourceMappingURL=src_components_search_HeaderSearch_tsx_61ecca._.js.map