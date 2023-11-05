module.exports = {

"[project]/src/components/search/HeaderSearch.tsx (ecmascript, app ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "HeaderSearch": ()=>HeaderSearch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$POST_Q$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries/POST_Q.ts (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/apolloClient.ts (ecmascript, app ssr)");
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
        className: "flex gap-1",
        onSubmit: searchPost,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "search",
                name: "postTitle",
                className: "text-black",
                placeholder: "Filter by sku"
            }, void 0, false, {
                fileName: "<[project]/src/components/search/HeaderSearch.tsx>",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
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

})()),
"[project]/node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js (ecmascript, app ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports }) { !function() {

"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map

}.call(this) }),
"[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js (ecmascript, app ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports }) { !function() {

"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js (ecmascript, app ssr)").vendored["react-ssr"].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map

}.call(this) }),

};

//# sourceMappingURL=_141505._.js.map